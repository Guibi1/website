import { ExternalLinkIcon } from "lucide-react";
import { Suspense, useMemo } from "react";
import { fetchPullRequests } from "@/lib/github";
import TimeAgo from "./TimeAgo";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export default function PullRequestList({ repo }: { repo: string }) {
    const prs = useMemo(() => fetchPullRequests(repo, "Guibi1"), [repo]);

    return (
        <div className="max-h-80 overflow-y-scroll">
            <Suspense fallback={<PullRequestListSkeleton />}>
                {prs.then((prs) =>
                    prs.length === 0 ? (
                        <div className="py-4 text-center text-muted-foreground">No pull requests found.</div>
                    ) : (
                        <ul className="flex flex-col divide-y divide-muted">
                            {prs.map((pr) => (
                                <li key={pr.id}>
                                    <a
                                        href={pr.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring"
                                    >
                                        <div className="flex flex-col px-2">
                                            <div>{pr.title}</div>

                                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                                <span>#{pr.number}</span>
                                                <span>•</span>
                                                <span>
                                                    {pr.mergedAt ? "merged" : pr.closedAt ? "closed" : "opened"}
                                                </span>
                                                <TimeAgo date={pr.mergedAt ?? pr.closedAt ?? pr.openedAt} />
                                            </div>
                                        </div>

                                        <Button variant="ghost" size="icon" disabled>
                                            <ExternalLinkIcon />
                                        </Button>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ),
                )}
            </Suspense>
        </div>
    );
}

function PullRequestListSkeleton() {
    return (
        <ul className="flex flex-col divide-y divide-muted overflow-hidden">
            {new Array(7)
                .fill(0)
                .map((_, i) => i)
                .map((k) => (
                    <li className="flex items-center justify-between p-2" key={k}>
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
                    </li>
                ))}
        </ul>
    );
}
