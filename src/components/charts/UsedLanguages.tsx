import { type Repository } from '@/types';
import { calculatePopularLanguages } from '@/utils';

const UsedLanguages = ({ reposiotories }: { reposiotories: Repository[] }) => {
    const mostUsedLanguages = calculatePopularLanguages(reposiotories)
    console.log("langs", mostUsedLanguages)
  return (
    <div>UsedLanguages</div>
  )
}

export default UsedLanguages