import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchCalendarData } from "@/lib/utils";
import { GithubIcon } from "lucide-react";
import Calendar from "react-activity-calendar";

export default async function Contributions() {
    const contributions = await fetchCalendarData();

    return (
        <Card className="mx-auto max-w-5xl">
            <CardHeader>
                <CardTitle className="inline-flex gap-4 items-center">
                    <GithubIcon />
                    Contributions
                </CardTitle>
            </CardHeader>

            <CardContent className="flex pb-8 [&_rect]:!stroke-border/20">
                <Calendar
                    style={{ marginInline: "auto" }}
                    data={contributions}
                    colorScheme="dark"
                    theme={{
                        dark: ["transparent", "var(--color-primary)"],
                    }}
                />
            </CardContent>
        </Card>
    );
}
