import { GithubIcon } from "lucide-react";
import Calendar from "react-activity-calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchCalendarData } from "@/lib/utils";

export default async function Contributions() {
    const contributions = await fetchCalendarData();

    return (
        <Card className="mx-auto max-w-5xl">
            <CardHeader>
                <CardTitle className="inline-flex items-center gap-4">
                    <GithubIcon />
                    Contributions
                </CardTitle>
            </CardHeader>

            <CardContent className="[&_rect]:!stroke-border/20 flex pb-8">
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
