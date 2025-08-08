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

            <div className="columns-xs gap-4">
                {jobs.map((job, i) => (
                    <Card
                        className="mb-4 animate-fade-in-up break-inside-avoid"
                        style={{ animationDelay: `${(i + 2) * 100}ms` }}
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
        </main>
    );
}

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
