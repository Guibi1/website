import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Contributions from "@/components/Contributions";
import MetaBalls from "@/components/MetaBalls";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="container flex flex-1 flex-col items-stretch justify-between px-4 py-8 sm:px-12 lg:px-20">
            <div className="flex gap-4 md:justify-between md:gap-8 lg:gap-10 xl:gap-20">
                <div className="max-w-xl sm:py-4 md:py-12 lg:py-20">
                    <h1 className="block animate-fade-in-up font-bold text-4xl text-gray-800 tracking-wide sm:text-5xl lg:leading-tight xl:text-6xl dark:text-white">
                        Hey! I'm Laurent,
                        <div className="animate-fade-in delay-100 duration-800">
                            a
                            <span className="bg-linear-to-br from-red via-primary to-lavender/80 bg-clip-text text-transparent">
                                {" fullstack "}
                            </span>
                            dev
                        </div>
                    </h1>

                    <p className="mt-8 animate-fade-in-up text-gray-800 text-lg delay-300 dark:text-gray-400">
                        I enjoy learning new frameworks and staying on top of the tech wave. Feel free to look around,
                        and don't hesitate to contact me if you want!
                    </p>

                    <div className="mt-7 grid w-full animate-fade-in-up gap-3 delay-500 sm:inline-flex">
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

                <div className="hidden aspect-square w-fit max-w-xl animate-fade-in delay-100 duration-1000 md:grid">
                    <MetaBalls
                        color="#cba6f7"
                        cursorBallColor="#cba6f7"
                        cursorBallSize={1}
                        ballCount={18}
                        animationSize={24}
                        hoverSmoothness={0.02}
                        clumpFactor={1}
                        speed={0.2}
                    />
                </div>
            </div>

            <section className="mt-16 w-full min-w-0 animate-fade-in-up delay-800 lg:mt-20 xl:px-16">
                <Contributions />
            </section>
        </main>
    );
}
