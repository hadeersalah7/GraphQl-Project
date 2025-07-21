import { Repository } from "./types";
/**
 * Calculates the top 5 most forked repositories
 * @param repositories Array of repository data from GitHub API
 * @returns Array of objects containing repository names and their fork counts
 * Example return: [{ repo: "react", count: 1000 }, { repo: "vue", count: 500 }]
 */
export const mostForkedRepos = (
    repositories: Repository[]
): { repo: string; count: number }[] => {
    if (repositories.length === 0) {
        return [];
    }
    const forkedRepos = repositories
        .map((repo) => ({
            repo: repo.name,
            count: repo.forkCount,
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

    return forkedRepos;
};

/**
 * Calculates the top 5 most starred repositories
 * @param repositories Array of repository data from GitHub API
 * @returns Array of objects containing repository names and their star counts
 * Example return: [{ repo: "tensorflow", stars: 5000 }, { repo: "linux", stars: 4000 }]
 */

export const calculateMostStarredRepos = (
    repositories: Repository[]
): { repo: string; stars: number }[] => {
    if (repositories.length === 0) {
        return [];
    }

    const starredRpos = repositories
        .map((repo) => ({
            repo: repo.name,
            stars: repo.stargazerCount,
        }))
        .sort((a, b) => b.stars - a.stars)
        .slice(0, 5);

    return starredRpos;
};

/**
 * Calculates the top 5 most used programming languages across all repositories
 * @param repositories Array of repository data from GitHub API
 * @returns Array of objects containing language names and their occurrence count
 * Example return: [{ language: "JavaScript", count: 10 }, { language: "Python", count: 7 }]
 */

export const calculatePopularLanguages = (
    reposiotories: Repository[]
): { language: string; count: number }[] => {
    if (reposiotories.length === 0) {
        return [];
    }

    // Initialize a map to track how many times each language appears
    const langaugeMap: { [key: string]: number } = {};

    reposiotories.forEach((repo) => {
        if (repo.languages.edges.length === 0) {
            return;
        }

        // languages.edges comes from GitHub's GraphQL API structure
        repo.languages.edges.forEach((langauge) => {
            const { name } = langauge.node;
            // Increment the count for this language, initializing to 1 if it's the first occurrence
            langaugeMap[name] = (langaugeMap[name] || 0) + 1;
        });
    });

    if (Object.keys(langaugeMap).length === 0) {
        return [];
    }

    return Object.entries(langaugeMap)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([language, count]) => ({ language, count }));
};
