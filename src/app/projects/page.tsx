import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects • Guibi.dev",
};

interface Project {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    liveUrl?: string;
}

const projects: Project[] = [
    {
        title: "Maki",
        description: "A Bun-based React-19 metaframework for building typesafe and fast fullstack websites.",
        tags: ["React", "Server components", "TypeScript"],
        githubUrl: "https://github.com/Guibi1/maki",
    },
    {
        title: "Pen",
        description:
            "An easy-to-use tool for effortlessly managing virtual environments with specific Python versions.",
        tags: ["Rust", "PyPI"],
        githubUrl: "https://github.com/Guibi1/pen",
    },
    {
        title: "SvelteKit TypeSafe API",
        description: "A Vite plugin that adds type safety to SvelteKit's server endpoints.",
        tags: ["SvelteKit", "TypeScript"],
        githubUrl: "https://github.com/Guibi1/SvelteKit-TypeSafe-API",
        liveUrl: "https://www.npmjs.com/package/sveltekit-typesafe-api",
    },
    {
        title: "Univox",
        description: "A student-only website to share schedules between friends and sell used books.",
        tags: ["SvelteKit", "PostgreSQL", "S3"],
        githubUrl: "https://github.com/Guibi1/Univox",
    },
    {
        title: "My personal website",
        description: "A handmade website to show-off what I've built.",
        tags: ["Next.js", "TypeScript"],
        githubUrl: "https://github.com/Guibi1/website",
        liveUrl: "/",
    },
];

export default function Page() {
    return (
        <main className="container px-4 py-8">
            <header className="mb-12">
                <h1 className="text-4xl font-bold mb-2 text-primary">My Coding Projects</h1>
                <p className="text-xl text-muted-foreground">
                    A showcase of my recent work and experiments in web development
                </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card key={project.title} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="grow">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </CardContent>

                        <CardFooter className="flex justify-between">
                            <Button variant="outline" asChild>
                                <Link href={project.githubUrl}>
                                    <GithubIcon />
                                    Code
                                </Link>
                            </Button>

                            {project.liveUrl && (
                                <Button asChild>
                                    <Link href={project.liveUrl}>
                                        <ExternalLinkIcon />
                                        View more
                                    </Link>
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
}
