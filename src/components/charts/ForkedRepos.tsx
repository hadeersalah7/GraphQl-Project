import { type Repository } from '@/types';
import { mostForkedRepos } from '@/utils';


const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {
    const forkedRepos = mostForkedRepos(repositories)
    console.log("forked---", forkedRepos)
  return (
    <div>ForkedRepos</div>
  )
}

export default ForkedRepos