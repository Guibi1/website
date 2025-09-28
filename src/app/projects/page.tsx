import { GithubIcon, GitPullRequestArrowIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import PullRequestList from "@/components/PullRequestList";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Projects • Guibi.dev",
};

export default function Page() {
    return (
        <main className="container px-4 py-8">
            <header className="mb-12 animate-fade-in-up">
                <h1 className="mb-2 font-bold text-4xl text-primary">My Coding Projects</h1>
                <p className="animate-fade-in text-muted-foreground text-xl delay-200">Here's what I'm working on</p>
            </header>

            <div className="columns-xs gap-4">
                {projects.map((project, i) => (
                    <Card
                        className="mb-4 animate-fade-in-up break-inside-avoid"
                        style={{ animationDelay: `${(i + 3) * 100}ms` }}
                        key={project.repo}
                    >
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                        </CardHeader>

                        <CardContent className="grow space-y-4">
                            <div>{project.description}</div>

                            {project.showPullRequests && (
                                <div className="space-y-2 pb-4">
                                    <Separator />

                                    <div className="ml-2 inline-flex size-lg items-center gap-2">
                                        <GitPullRequestArrowIcon size={16} />
                                        My Contributions
                                    </div>

                                    <PullRequestList repo={project.repo} />
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-red px-2 py-1 font-medium text-primary-foreground text-xs dark:bg-secondary dark:text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </CardContent>

                        <CardFooter>
                            <Button variant="outline" className="grow md:grow-0" asChild>
                                <Link
                                    href={`https://github.com/${project.repo}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GithubIcon />
                                    Code
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
}

const projects: {
    title: string;
    description: string;
    tags: string[];
    repo: string;
    showPullRequests?: boolean;
}[] = [
    {
        title: "Maki",
        description: "A Bun-based React-19 metaframework for building typesafe and fast fullstack websites.",
        tags: ["React", "Server components", "TypeScript"],
        repo: "Guibi1/maki",
    },
    {
        title: "FireWall",
        description:
            "A 2D battle royale game where player written bots compete against each other in a shrinking arena. Used in the 2025 JDIS Games competition.",
        tags: ["Rust", "Game Server", "React"],
        repo: "JDIS/jdis-games-2025",
    },
    {
        title: "Pumpkin",
        description:
            "A Minecraft server built entirely in Rust, offering a fast, efficient, and customizable experience.",
        tags: ["Rust", "OSS", "Game Server"],
        repo: "Pumpkin-MC/Pumpkin",
        showPullRequests: true,
    },
    {
        title: "SvelteKit TypeSafe API",
        description: "A Vite plugin that adds type safety to SvelteKit's server endpoints.",
        tags: ["SvelteKit", "TypeScript"],
        repo: "Guibi1/SvelteKit-TypeSafe-API",
    },
    {
        title: "SherbyRide",
        description: "A website to facilitate carpool planning between students.",
        tags: ["Next.js", "Java", "PostgreSQL"],
        repo: "Guibi1/SherbyRide",
    },
    {
        title: "Univox",
        description: "A student-only website to share schedules between friends and sell used books.",
        tags: ["SvelteKit", "PostgreSQL", "S3"],
        repo: "Guibi1/Univox",
    },
    {
        title: "Guibi.dev",
        description: "A handmade website to show-off what I've built.",
        tags: ["Next.js", "TypeScript"],
        repo: "Guibi1/website",
    },
];
