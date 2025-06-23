import { Octokit } from "@octokit/rest";

export type PullRequest = {
    id: number;
    number: number;
    title: string;
    url: string;
    openedAt: Date;
    mergedAt?: Date;
};

export async function fetchPullRequests(owner: string, repo: string, openedBy: string): Promise<PullRequest[]> {
    const octokit = new Octokit({
        auth: process.env.GITHUB_PAT,
        request: {
            fetch: (url: string, init: RequestInit) =>
                fetch(url, {
                    ...init,
                    cache: "force-cache",
                    next: { revalidate: 86400 },
                }),
        },
    });

    const closedPRs = await octokit.paginate(octokit.pulls.list, {
        owner,
        repo,
        sort: "updated",
        state: "all",
        per_page: 100,
        headers: {
            "X-GitHub-Api-Version": "2022-11-28",
        },
    });

    return closedPRs
        .filter((pr) => pr.user?.login === openedBy)
        .map((pr) => ({
            id: pr.id,
            number: pr.number,
            title: pr.title,
            url: pr.html_url,
            openedAt: new Date(pr.created_at),
            mergedAt: pr.merged_at ? new Date(pr.merged_at) : undefined,
        }))
        .reverse()
        .sort((a, b) => (a.mergedAt ? (b.mergedAt ? 0 : 1) : b.mergedAt ? -1 : 0));
}
