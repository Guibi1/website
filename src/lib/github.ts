import { Octokit } from "@octokit/rest";

export type PullRequest = {
    id: number;
    number: number;
    title: string;
    url: string;
    draft: boolean;
    openedAt: Date;
    closedAt?: Date;
    mergedAt?: Date;
};

export async function fetchPullRequests(repo: string, openedBy: string): Promise<PullRequest[]> {
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

    const closedPRs = await octokit.search.issuesAndPullRequests({
        q: `is:pr repo:${repo} author:${openedBy}`,
        sort: "updated",
        state: "all",
        per_page: 100,
        headers: {
            "X-GitHub-Api-Version": "2022-11-28",
        },
        advanced_search: "true",
    });

    return closedPRs.data.items
        .map((pr) => ({
            id: pr.id,
            number: pr.number,
            title: pr.title,
            url: pr.html_url,
            draft: pr.draft ?? false,
            openedAt: new Date(pr.created_at),
            closedAt: pr.closed_at ? new Date(pr.closed_at) : undefined,
            mergedAt: pr.pull_request?.merged_at ? new Date(pr.pull_request.merged_at) : undefined,
        }))
        .sort((a, b) => (a.mergedAt ? (b.mergedAt ? 0 : 1) : b.mergedAt ? -1 : 0));
}
