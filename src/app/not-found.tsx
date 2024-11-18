import { Button } from "@/components/ui/button";
import { FileQuestionIcon } from "lucide-react";

import Link from "next/link";

export default function Home() {
    return (
        <main className="container flex flex-col items-center gap px-6 py-6 sm:px-12 lg:px-20">
            <FileQuestionIcon className="size-16 mb-8" />

            <h2 className="block text-3xl font-bold text-subtext0 sm:text-4xl lg:text-2xl lg:leading-none tracking-wide">
                404
            </h2>

            <h1 className="block text-xl font-bold text-gray-800 dark:text-white sm:text-2xl lg:text-4xl lg:leading-none tracking-wide">
                Page not found
            </h1>

            <Button className="mt-8">
                <Link href="/">Go home</Link>
            </Button>
        </main>
    );
}
