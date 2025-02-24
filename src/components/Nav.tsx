import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Nav() {
    return (
        <nav className="container px-4 py-8 md:h-20 flex items-center justify-between gap-4">
            <Link href="/" className="text-xl">
                Guibi.dev
            </Link>

            <div className="flex items-center gap-4">
                <Button variant="ghost" asChild>
                    <Link href="/projects" className="text-lg">
                        My projects
                    </Link>
                </Button>

                <Button variant="ghost" asChild>
                    <Link href="https://github.com/Guibi1" title="github account" target="_blank">
                        <GithubIcon />
                    </Link>
                </Button>
            </div>
        </nav>
    );
}
