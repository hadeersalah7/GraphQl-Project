import CardStats from "./CardStats";

interface StatsContainerProps {
    totalRepos: number;
    followers: number;
    following: number;
    gists: number
}

const StatsContainer = (props: StatsContainerProps) => {
    const { totalRepos, followers, following, gists } = props
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8">
            <CardStats title="Total Repositories" count={totalRepos} />
            <CardStats title="Followers" count={followers} />
            <CardStats title="Following" count={following} />
            <CardStats title="Gists" count={gists}/>
        </div>
    )
}

export default StatsContainer