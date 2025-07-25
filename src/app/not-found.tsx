import { FileQuestionIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="gap container flex flex-col items-center px-6 py-6 sm:px-12 lg:px-20">
            <FileQuestionIcon className="mb-8 size-16" />

            <h2 className="block font-bold text-3xl text-subtext0 tracking-wide sm:text-4xl lg:text-2xl lg:leading-none">
                404
            </h2>

            <h1 className="block font-bold text-gray-800 text-xl tracking-wide sm:text-2xl lg:text-4xl lg:leading-none dark:text-white">
                Page not found
            </h1>

            <Button className="mt-8">
                <Link href="/">Go home</Link>
            </Button>
        </main>
    );
}
