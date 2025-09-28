import { GithubIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import BlueSkyIcon from "./BlueSkyIcon";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "./ui/button";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function Nav() {
    return (
        <nav className="container flex animate-fade-in items-center justify-between gap-4 px-4 py-8 delay-100 duration-300 md:h-20">
            <Link href="/" className="text-xl">
                Guibi.dev
            </Link>

            <div className="hidden items-center gap-4 sm:flex">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" asChild>
                        <Link href="/about" className="text-lg">
                            About me
                        </Link>
                    </Button>

                    <Button variant="ghost" asChild>
                        <Link href="/projects" className="text-lg">
                            My projects
                        </Link>
                    </Button>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" asChild>
                        <Link href="https://bsky.app/profile/guibi.dev" title="bluesky account" target="_blank">
                            <BlueSkyIcon />
                        </Link>
                    </Button>

                    <Button variant="ghost" asChild>
                        <Link href="https://github.com/Guibi1" title="github account" target="_blank">
                            <GithubIcon />
                        </Link>
                    </Button>
                </div>

                <ThemeSwitcher variant="ghost" />
            </div>

            <Popover modal>
                <PopoverTrigger asChild className="sm:hidden">
                    <Button variant="ghost">
                        <MenuIcon />
                    </Button>
                </PopoverTrigger>

                <PopoverContent hideWhenDetached className="flex flex-col gap-2">
                    <PopoverClose asChild>
                        <Button variant="secondary" asChild>
                            <Link href="/about" className="text-lg">
                                About me
                            </Link>
                        </Button>
                    </PopoverClose>

                    <PopoverClose asChild>
                        <Button variant="secondary" asChild>
                            <Link href="/projects" className="text-lg">
                                My projects
                            </Link>
                        </Button>
                    </PopoverClose>

                    <div className="flex items-center justify-stretch gap-2">
                        <PopoverClose asChild>
                            <Button variant="secondary" asChild>
                                <Link href="https://bsky.app/profile/guibi.dev" title="bluesky account" target="_blank">
                                    <BlueSkyIcon />
                                </Link>
                            </Button>
                        </PopoverClose>

                        <PopoverClose asChild>
                            <Button variant="secondary" asChild className="mr-auto">
                                <Link href="https://github.com/Guibi1" title="github account" target="_blank">
                                    <GithubIcon />
                                </Link>
                            </Button>
                        </PopoverClose>

                        <ThemeSwitcher variant="secondary" />
                    </div>
                </PopoverContent>
            </Popover>
        </nav>
    );
}
