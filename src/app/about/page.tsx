import { GlobeIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "About me • Guibi.dev",
};

export default function Page() {
    return (
        <main className="container px-4 py-8">
            <header className="mb-12 animate-fade-in-up">
                <h1 className="mb-2 font-bold text-4xl text-primary">About me</h1>
                <p className="animate-fade-in text-muted-foreground text-xl delay-200">Once upon a time...</p>
            </header>

            <section>
                <h2 className="mb-4 animate-fade-in-up font-bold text-3xl text-primary delay-200">Languages</h2>

                <div className="mb-12 grid gap-3 gap-x-8 md:grid-cols-2 lg:gap-1">
                    {languages.map((lang, i) => (
                        <div
                            className="flex animate-fade-in-up flex-col gap-1 lg:flex-row lg:items-center lg:gap-4"
                            style={{ animationDelay: `${250 + i * 25}ms` }}
                            key={lang.name}
                        >
                            <div className="w-20 lg:text-right">{lang.name}</div>

                            <div className="relative h-2 grow rounded-md bg-muted">
                                <div
                                    className="absolute inset-0 rounded-md bg-primary"
                                    style={{ width: `${lang.percent}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="mb-4 animate-fade-in-up font-bold text-3xl text-primary delay-500">Job experience</h2>

                <div className="columns-xs gap-4">
                    {jobs.map((job, i) => (
                        <Card
                            className="mb-4 animate-fade-in-up break-inside-avoid"
                            style={{ animationDelay: `${(i + 6) * 100}ms` }}
                            key={job.description}
                        >
                            <CardHeader className="pb-4">
                                <CardTitle>{job.title}</CardTitle>
                                <CardDescription>{job.dates}</CardDescription>
                            </CardHeader>

                            <CardContent className="grow space-y-4">
                                <Separator />

                                <div className="flex items-center justify-between gap-2">
                                    <div>
                                        <div className="leading-none tracking-tight">At {job.at}</div>
                                        <div className="text-muted-foreground text-sm">{job.info}</div>
                                    </div>

                                    <Button variant="ghost" size="icon" asChild>
                                        <Link href={job.website} target="_blank" rel="noopener noreferrer">
                                            <GlobeIcon />
                                        </Link>
                                    </Button>
                                </div>

                                <div>{job.description}</div>
                            </CardContent>

                            <CardFooter>
                                <div className="flex flex-wrap gap-2">
                                    {job.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-secondary px-2 py-1 font-medium text-secondary-foreground text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    );
}

const languages = [
    { name: "TypeScript", percent: 100 },
    { name: "HTML", percent: 100 },
    { name: "Rust", percent: 95 },
    { name: "SQL", percent: 90 },
    { name: "C & C++", percent: 80 },
    { name: "Python", percent: 70 },
    { name: "Java", percent: 60 },
    { name: "C#", percent: 55 },
];

const jobs: {
    at: string;
    info: string;
    title: string;
    description: string;
    dates: string;
    tags: string[];
    website: string;
}[] = [
    {
        at: "the STM",
        info: "Société de transport de Montréal",
        title: "Web developper",
        description:
            "I developed NetBox plugins, created Grafana dashboards, automated tasks, and maintained other internal tools.",
        dates: "Internship in winter 2025",
        tags: ["NetBox", "Grafana", "React", "Python"],
        website: "https://stm.info",
    },
    {
        at: "Caido",
        info: "A lightweight web security auditing toolkit",
        title: "Full-stack developper",
        description:
            "I added community's most requested features, like websocket support on the backend proxy and a full revamp of the sitemap page in the frontend.",
        dates: "Internship in fall 2025",
        tags: ["Proxy", "Rust", "Vue"],
        website: "https://caido.io",
    },
];
