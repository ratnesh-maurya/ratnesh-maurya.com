const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'ratnesh-maurya';

export async function fetchGitHubData() {
  try {
    const [userRes, reposRes, eventsRes, contributionsRes, commitActivityRes] = await Promise.all([
      fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}`),
      fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
      fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/events?per_page=100`),
      fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`),
      fetch(`${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${GITHUB_USERNAME}/stats/commit_activity`)
    ]);

    const userData = await userRes.json();
    const reposData = await reposRes.json();
    const eventsData = await eventsRes.json();
    const contributionsData = await contributionsRes.json();
    const commitActivityData = await commitActivityRes.json();

    const pullRequests = eventsData
      .filter((event: any) => event.type === 'PullRequestEvent')
      .slice(0, 5)
      .map((event: any) => ({
        title: event.payload.pull_request.title,
        url: event.payload.pull_request.html_url,
        repo: event.repo.name,
        createdAt: event.payload.pull_request.created_at,
        state: event.payload.pull_request.state
      }));

    const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
    const totalForks = reposData.reduce((acc: number, repo: any) => acc + repo.forks_count, 0);

    const languages = reposData.reduce((acc: { [key: string]: number }, repo: any) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
      }
      return acc;
    }, {});
    
    type LanguageStats = {
      name: string;
      count: number;
      percentage: number;
    };

   const languageStats: LanguageStats[] = Object.entries(languages)
     .sort(([, a], [, b]) => (b as number) -  (a as number))
     .map(([language, count]) => ({
       name: language,
       count: count as number,
       percentage: ((count as number) / reposData.length) * 100,
     }));

    const recentActivity = eventsData
      .slice(0, 10)
      .map((event: any) => ({
        type: event.type,
        repo: event.repo.name,
        createdAt: event.created_at,
        payload: event.payload
      }));

    const contributionStreak = calculateContributionStreak(contributionsData.contributions);
    const totalContributions = contributionsData.contributions.reduce((acc: number, day: any) => acc + day.count, 0);

    // const topContributors = await fetchTopContributors(GITHUB_USERNAME);
    const pinnedRepos = await fetchPinnedRepos(GITHUB_USERNAME);

    const commitActivity = commitActivityData.slice(-12).map((week: any) => ({
      week: new Date(week.week * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      total: week.total,
      days: week.days
    }));

    return {
      user: {
        name: userData.name,
        bio: userData.bio,
        avatarUrl: userData.avatar_url,
        followers: userData.followers,
        following: userData.following,
        publicRepos: userData.public_repos,
        location: userData.location,
        company: userData.company,
        blog: userData.blog,
        createdAt: userData.created_at
      },
      stats: {
        totalStars,
        totalForks,
        totalRepositories: reposData.length,
        languageStats
      },
      repositories: reposData.map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        url: repo.html_url,
        updatedAt: repo.updated_at,
        openIssues: repo.open_issues_count,
        watchers: repo.watchers_count
      })),
      pullRequests,
      contributions: contributionsData.contributions,
      recentActivity,
      contributionStreak,
      totalContributions,
      pinnedRepos,
      commitActivity
    };
  } catch (error) {
    console.error('Failed to fetch GitHub data:', error);
    throw new Error('Failed to fetch GitHub data');
  }
}

function calculateContributionStreak(contributions: any[]): number {
  let streak = 0;
  let currentStreak = 0;

  for (let i = contributions.length - 1; i >= 0; i--) {
    if (contributions[i].count > 0) {
      currentStreak++;
      if (currentStreak > streak) {
        streak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  }

  return streak;
}

async function fetchPinnedRepos(username: string): Promise<any[]> {
  try {
    const response = await fetch(`https://gh-pinned-repos.egoist.dev/?username=${username}`);
    const pinnedRepos = await response.json();
    return pinnedRepos.map((repo: any) => ({
      name: repo.repo,
      description: repo.description,
      stars: repo.stars,
      forks: repo.forks,
      language: repo.language,
      url: `https://github.com/${username}/${repo.repo}`
    }));
  } catch (error) {
    console.error('Failed to fetch pinned repositories:', error);
    return [];
  }
}

