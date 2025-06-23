import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchPullRequests } from "@/lib/github";
import { ExternalLinkIcon, GitPullRequestArrowIcon, LoaderCircleIcon } from "lucide-react";
import { Suspense } from "react";
import TimeAgo from "./TimeAgo";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export default function PullRequestList({ repo }: { repo: string }) {
    const prs = fetchPullRequests(repo, "Guibi1");

    return (
        <Card className="mx-auto max-w-5xl">
            <CardHeader>
                <CardTitle className="inline-flex gap-4 items-center">
                    <GitPullRequestArrowIcon />
                    My Pull Requests
                </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col divide-y divide-muted max-h-90 overflow-y-scroll px-4">
                <Suspense fallback={<PullRequestListSkeleton />}>
                    {prs.then((prs) =>
                        prs.map((pr) => (
                            <a
                                href={pr.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-between items-center p-2 hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring rounded-md"
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
        <div className="flex justify-between items-center p-2" key={k}>
            <div className="flex flex-col px-2 gap-2 grow">
                <Skeleton className="max-w-72 w-full h-4" />

                <div className="flex items-center gap-2">
                    <Skeleton className="w-10 h-4" />
                    <span>•</span>
                    <Skeleton className="w-38 h-4" />
                </div>
            </div>

            <Button variant="ghost" size="icon" disabled>
                <ExternalLinkIcon />
            </Button>
        </div>
    ));
}
