import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchPullRequests } from "@/lib/github";
import { ExternalLinkIcon, GitPullRequestArrowIcon, GithubIcon } from "lucide-react";
import TimeAgo from "./TimeAgo";
import { Button } from "./ui/button";

export default async function PullRequestList(props: {
    repo: string;
    owner: string;
}) {
    const prs = await fetchPullRequests(props.owner, props.repo, "Guibi1");

    return (
        <Card className="mx-auto max-w-5xl">
            <CardHeader>
                <CardTitle className="inline-flex gap-4 items-center">
                    <GitPullRequestArrowIcon />
                    My Pull Requests
                </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col divide-y divide-muted max-h-96 overflow-y-scroll">
                {prs.map((pr) => (
                    <a
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between items-center p-2 hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring rounded-md"
                        key={pr.id}
                    >
                        <div className="flex flex-col">
                            <div className="font-semibold">{pr.title}</div>

                            <div className="flex items-center gap-2">
                                <span>#{pr.number}</span>
                                <span>•</span>
                                <span>{pr.mergedAt ? "merged" : "opened"}</span>
                                <TimeAgo date={pr.mergedAt ?? pr.openedAt} />
                            </div>
                        </div>

                        <Button variant="ghost" size="icon">
                            <ExternalLinkIcon />
                        </Button>
                    </a>
                ))}
            </CardContent>
        </Card>
    );
}
