import { Card, CardDescription, CardTitle } from "../ui/card";

interface StatsCardProps {
    title: string;
    count: number
}

const CardStats = ({title, count}: StatsCardProps) => {
    return (
        <Card>
            <div className="flex flex-row justify-between items-center p-6">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{count}</CardDescription>
            </div>
        </Card>
    )
}

export default CardStats