import type { Metadata } from "next";
import ProjectList, { type Project } from "./ProjectList";

export const metadata: Metadata = {
    title: "Projects • Guibi.dev",
};

export default function Page() {
    return (
        <main className="container px-4 py-8">
            <header className="mb-12">
                <h1 className="mb-2 font-bold text-4xl text-primary">My Coding Projects</h1>
                <p className="text-muted-foreground text-xl">Here's what I'm working on</p>
            </header>

            <ProjectList projects={projects} />
        </main>
    );
}

const projects: Project[] = [
    {
        title: "Maki",
        description: "A Bun-based React-19 metaframework for building typesafe and fast fullstack websites.",
        details: "A Bun-based React-19 metaframework for building typesafe and fast fullstack websites.",
        tags: ["React", "Server components", "TypeScript"],
        repo: "Guibi1/maki",
    },
    {
        title: "Pumpkin",
        description: "A Minecraft server built entirely in Rust, offering a fast and customizable experience.",
        details: "A Minecraft server built entirely in Rust, offering a fast, efficient, and customizable experience.",
        tags: ["Rust", "Game Server"],
        repo: "Pumpkin-MC/Pumpkin",
        showPullRequests: true,
    },
    {
        title: "FireWall",
        description: "A 2D battle royale game where player written bots compete against each other.",
        details:
            "A 2D battle royale game where player written bots compete against each other in a shrinking arena. Used in the 2025 JDIS Games competition.",
        tags: ["Rust", "Game Server", "React"],
        repo: "JDIS/jdis-games-2025",
    },
    {
        title: "SvelteKit TypeSafe API",
        description: "A Vite plugin that adds type safety to SvelteKit's server endpoints.",
        details: "A Vite plugin that adds type safety to SvelteKit's server endpoints.",
        tags: ["SvelteKit", "TypeScript"],
        repo: "Guibi1/SvelteKit-TypeSafe-API",
    },
    {
        title: "Univox",
        description: "A student-only website to share schedules between friends and sell used books.",
        details: "A student-only website to share schedules between friends and sell used books.",
        tags: ["SvelteKit", "PostgreSQL", "S3"],
        repo: "Guibi1/Univox",
    },
    {
        title: "Guibi.dev",
        description: "A handmade website to show-off what I've built.",
        details: "A handmade website to show-off what I've built.",
        tags: ["Next.js", "TypeScript"],
        repo: "Guibi1/website",
    },
];
