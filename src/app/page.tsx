import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Contributions from "@/components/Contributions";
import MetaBalls from "@/components/MetaBalls";
import PullRequestList from "@/components/PullRequestList";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="container flex flex-1 flex-col justify-between px-4 py-8 sm:px-12 lg:px-20">
            <div className="grid justify-items-center gap-4 md:grid-cols-2 md:items-center md:gap-8 lg:gap-10 xl:gap-20">
                <div className="max-w-xl">
                    <h1 className="block font-bold text-3xl text-gray-800 tracking-wide sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                        Hey! I'm Laurent,
                        <br />a
                        <span className="bg-linear-to-br from-red via-primary to-lavender/80 bg-clip-text text-transparent">
                            {" fullstack "}
                        </span>
                        dev
                    </h1>

                    <p className="mt-8 text-gray-800 text-lg dark:text-gray-400">
                        I enjoy learning new frameworks and staying on top of the tech wave. Feel free to look around,
                        and don't hesitate to contact me if you want!
                    </p>

                    <div className="mt-7 grid w-full gap-3 sm:inline-flex">
                        <Button size="lg" className="group relative pr-12" asChild>
                            <Link href="/projects">
                                View my projects
                                <ChevronRightIcon className="absolute right-6 transition-[right] group-hover:right-4" />
                            </Link>
                        </Button>

                        <Button size="lg" variant="outline" asChild>
                            <Link href="/about">Learn more about me</Link>
                        </Button>
                    </div>
                </div>

                <div className="hidden aspect-square size-full max-w-xl lg:grid">
                    <MetaBalls
                        color="#cba6f7"
                        cursorBallColor="#cba6f7"
                        cursorBallSize={1}
                        ballCount={18}
                        animationSize={24}
                        hoverSmoothness={0.01}
                        clumpFactor={1}
                        speed={0.2}
                    />
                </div>
            </div>

            <section className="mt-16 xl:px-16">
                <Contributions />
            </section>
        </main>
    );
}
