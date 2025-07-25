import { ExternalLinkIcon, GitPullRequestArrowIcon } from "lucide-react";
import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchPullRequests } from "@/lib/github";
import TimeAgo from "./TimeAgo";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export default function PullRequestList({ repo }: { repo: string }) {
    const prs = fetchPullRequests(repo, "Guibi1");

    return (
        <Card className="mx-auto max-w-5xl">
            <CardHeader>
                <CardTitle className="inline-flex items-center gap-4">
                    <GitPullRequestArrowIcon />
                    My Pull Requests
                </CardTitle>
            </CardHeader>

            <CardContent className="flex max-h-90 flex-col divide-y divide-muted overflow-y-scroll px-4">
                <Suspense fallback={<PullRequestListSkeleton />}>
                    {prs.then((prs) =>
                        prs.map((pr) => (
                            <a
                                href={pr.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring"
                                key={pr.id}
                            >
                                <div className="flex flex-col px-2">
                                    <div className="font-semibold">{pr.title}</div>

                                    <div className="flex items-center gap-2">
                                        <span>#{pr.number}</span>
                                        <span>•</span>
                                        <span>{pr.mergedAt ? "merged" : "opened"}</span>
                                        <TimeAgo date={pr.mergedAt ?? pr.openedAt} />
                                    </div>
                                </div>

                                <Button variant="ghost" size="icon" disabled>
                                    <ExternalLinkIcon />
                                </Button>
                            </a>
                        )),
                    )}
                </Suspense>
            </CardContent>
        </Card>
    );
}

function PullRequestListSkeleton() {
    return new Array(7).fill(0).map((k) => (
        <div className="flex items-center justify-between p-2" key={k}>
            <div className="flex grow flex-col gap-2 px-2">
                <Skeleton className="h-4 w-full max-w-72" />

                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-10" />
                    <span>•</span>
                    <Skeleton className="h-4 w-38" />
                </div>
            </div>

            <Button variant="ghost" size="icon" disabled>
                <ExternalLinkIcon />
            </Button>
        </div>
    ));
}
