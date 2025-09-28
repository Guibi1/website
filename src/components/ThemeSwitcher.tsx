"use client";

import { SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import type { ComponentProps } from "react";
import { Button } from "./ui/button";

export default function ThemeSwitcher({ variant = "ghost" }: { variant: ComponentProps<typeof Button>["variant"] }) {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant={variant}
            onClick={() => {
                if (theme === "dark") setTheme("light");
                else setTheme("dark");
            }}
        >
            <SunMoonIcon />
        </Button>
    );
}
