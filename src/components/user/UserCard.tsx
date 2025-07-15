import { Button } from "../ui/button";
import { Card, CardTitle, CardHeader, CardDescription } from "../ui/card";

interface IUserProps {
    avatarUrl: string;
    name: string;
    bio: string;
    url: string;
}

const UserCard = ({ avatarUrl, url, name, bio }: IUserProps) => {
    return (
        <Card className="w-full lg:w-1/3 mb-8">
            <CardHeader className="flex-row gap-x-8 items-center">
                <img src={avatarUrl} alt={name} className="w-36 h-36 rounded" />
                <div className="flex flex-col gap-y-2">
                    <CardTitle>{name || "Coding Addict"}</CardTitle>
                    <CardDescription>
                        {bio || "Passionate About Front End Field"}
                    </CardDescription>
                    <Button asChild size="sm" className="w-1/2 mt-2">
                        <a href={url} target="_blank" rel="noreferrer">
                            Follow
                        </a>
                    </Button>
                </div>
            </CardHeader>
        </Card>
    );
};

export default UserCard;
