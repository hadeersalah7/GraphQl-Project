import { useQuery } from "@apollo/client";
import { GET_USER } from "@/queries";
import { UserData } from "@/types";
import UserCard from "./UserCard";
import StatsContainer from "./StatsContainer";

type UserProfileProps = {
    userName: string;
};
const UserProfile = ({ userName }: UserProfileProps) => {
    const { data, loading, error } = useQuery<UserData>(GET_USER, {
        variables: { login: userName },
    });

    if (loading) return <div>Loading...</div>;

    if (error) return <h2 className="text-xl">{error.message}</h2>;

    if (!data) return <h2 className="text-xl">No User Found.</h2>;

    const {
        avatarUrl,
        name,
        bio,
        url,
        repositories,
        followers,
        following,
        gists,
    } = data.user;
    return (
        <>
            <UserCard url={url} name={name} bio={bio} avatarUrl={avatarUrl} />
            <StatsContainer
                totalRepos={repositories.totalCount}
                followers={followers.totalCount}
                following={following.totalCount}
                gists={gists.totalCount}
            />
        </>
    );
};

export default UserProfile;
