import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/Nav";

import "./globals.css";

const font = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Guibi.dev",
    description: "Guibi.dev is my personal website, where you can find information about me and my projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" type="image/svg+xml" href="favicon.svg" />
            </head>

            <body className={`${font.className} flex min-h-dvh flex-col bg-background text-foreground antialiased`}>
                <ThemeProvider defaultTheme="dark" disableTransitionOnChange>
                    <Nav />

                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
