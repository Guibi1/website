import Nav from "@/components/Nav";
import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const font = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Guibi.dev",
    description: "Guibi.dev is my personal website, where you can find information about me and my projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${font.className} bg-background text-foreground antialiased h-dvh flex flex-col`}>
                <Nav />

                {children}
            </body>
        </html>
    );
}
