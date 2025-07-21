import { type Repository } from '@/types';
import { calculateMostStarredRepos } from '@/utils';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
    const popularRepos = calculateMostStarredRepos(repositories)
  const chartConfig = {
    repo: {
      label: 'Repository',
      color: '#facd12',
    },
  } satisfies ChartConfig;
  return (
    <div>
      <h2 className='text-2xl font-semibold text-center mb-4'>Popular Repos</h2>
      <ChartContainer config={chartConfig} className='h-100 w-full'>
        <BarChart accessibilityLayer data={popularRepos}>
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey='repo' // Uses 'repo' property from data for labels
            tickLine={true} // Shows small lines at each tick mark
            tickMargin={10} // Space between tick line and label
            axisLine={false} // Hides the main axis line
            tickFormatter={(value) => value.slice(0, 10)} // Truncates long repo names
          />
          <YAxis dataKey='count' />
          <ChartTooltip content={<ChartTooltipContent />} />

          <Bar dataKey='count' fill='var(--color-repo)' radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default PopularRepos