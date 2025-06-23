import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function fetchCalendarData(): Promise<Activity[]> {
    const response = await fetch("https://github-contributions-api.jogruber.de/v4/Guibi1?y=last", {
        cache: "force-cache",
        next: { revalidate: 86400 },
    });
    const data = await response.json();

    if (!response.ok) {
        throw Error(`Fetching GitHub contribution data failed: ${data.error}`);
    }

    return data.contributions as Activity[];
}

interface Activity {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}
