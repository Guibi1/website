import Nav from "@/components/Nav";
import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const font = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Guibi.dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${font.className} antialiased dark h-dvh`}>
                <Nav />

                {children}
            </body>
        </html>
    );
}
