"use client";

import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import PullRequestList from "@/components/PullRequestList";
import { Button } from "@/components/ui/button";

export type Project = {
    title: string;
    description: string;
    details: string;
    tags: string[];
    repo: string;
    showPullRequests?: boolean;
};

export default function ProjectList({ projects }: { projects: Project[] }) {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
        <div className="flex flex-col justify-between gap-8 md:flex-row lg:gap-20">
            <div className="flex flex-col divide-y divide-muted">
                {projects.map((project) => (
                    <div key={project.title} className="py-1">
                        <button
                            onClick={() => setSelectedProject(project)}
                            className="flex w-80 flex-col rounded-md px-4 py-2 text-left hover:bg-muted/60"
                            type="button"
                        >
                            <div className="flex flex-col gap-2">
                                <div className="font-semibold leading-none tracking-tight">{project.title}</div>
                                <div className="text-muted-foreground text-sm">{project.description}</div>
                            </div>
                        </button>
                    </div>
                ))}
            </div>

            <div className="max-w-5xl grow space-y-8">
                <div className="flex flex-col gap-2">
                    <div className="font-semibold text-xl leading-none tracking-tight">{selectedProject.title}</div>
                    <div className="text-muted-foreground">{selectedProject.details}</div>

                    <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-secondary px-2 py-1 font-medium text-secondary-foreground text-xs"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <Button variant="outline" asChild>
                    <Link href={`https://github.com/${selectedProject.repo}`} target="_blank" rel="noopener noreferrer">
                        <GithubIcon />
                        Code
                    </Link>
                </Button>

                {selectedProject.showPullRequests && <PullRequestList repo={selectedProject.repo} />}
            </div>
        </div>
    );
}
