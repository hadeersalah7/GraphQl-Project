import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { type FormEvent } from "react";
import { useState } from "react";

type SearchFormProps = {
    userName: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
    const {toast} = useToast()
    const [text, setText] = useState(userName);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text === "") {
            toast({
                description: "Please Enter A Valid User Name"
            })
            return;
        }
        setUserName(text);
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-x-2 w-full lg:w-1/3 mb-8"
        >
            <Label htmlFor="search" className="sr-only">
                Search
            </Label>

            <Input
                type="text"
                id="search"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Search Github User..."
                className="flex-grow bg-background"
            />

            <Button type="submit">Search</Button>
        </form>
    );
};

export default SearchForm;
