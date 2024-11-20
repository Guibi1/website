import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRightIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

export default function Home() {
    return (
        <main className="container flex-1 flex flex-col justify-between px-4 py-8 sm:px-12 lg:px-20">
            <div className="grid justify-items-center gap-4 md:grid-cols-2 md:items-center md:gap-8 lg:gap-10 xl:gap-20">
                <div className="max-w-xl">
                    <h1 className="block text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl lg:text-6xl lg:leading-tight tracking-wide">
                        Hey! I'm Laurent,
                        <br />a
                        <span className="bg-gradient-to-br from-red via-lavender/80 to-mauve bg-clip-text text-transparent">
                            {" fullstack "}
                        </span>
                        dev
                    </h1>

                    <p className="mt-8 text-lg text-gray-800 dark:text-gray-400">
                        I enjoy learning new frameworks and staying on top of the tech wave. Feel free to look around,
                        and don't hesitate to contact me if you want!
                    </p>

                    <div className="mt-7 grid w-full gap-3 sm:inline-flex">
                        <Button size="lg" className="relative group pr-12" asChild>
                            <Link href="/projects">
                                View my projects
                                <ChevronRightIcon className="absolute right-6 group-hover:right-4 transition-[right]" />
                            </Link>
                        </Button>

                        <Button size="lg" variant="outline" asChild>
                            <Link href="/about">Learn more about me</Link>
                        </Button>
                    </div>
                </div>
            </div>

            <section className="mt-16 xl:px-16">
                <Card className="mx-auto max-w-5xl">
                    <CardHeader>
                        <CardTitle className="inline-flex gap-4 items-center">
                            <GithubIcon />
                            Contributions
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="flex pb-8">
                        <GitHubCalendar
                            username="Guibi1"
                            colorScheme="dark"
                            theme={{
                                dark: ["rgba(245, 194, 231, 0)", "rgb(203, 166, 247)"],
                            }}
                            style={{ marginInline: "auto" }}
                            hideTotalCount
                        />
                    </CardContent>
                </Card>
            </section>
        </main>
    );
}
