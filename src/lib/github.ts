export interface GitHubStats {
  followers: number;
  following: number;
  publicRepos: number;
  publicGists: number;
  bio: string | null;
  location: string | null;
  company: string | null;
  blog: string | null;
  hireable: boolean | null;
  createdAt: string;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  stargazersCount: number;
  language: string | null;
  url: string;
  updatedAt: string;
  isFork: boolean;
}

export async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    const res = await fetch('https://api.github.com/users/ratnesh-maurya', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error('Failed to fetch GitHub stats');
    const data = await res.json();
    return {
      followers: data.followers ?? 0,
      following: data.following ?? 0,
      publicRepos: data.public_repos ?? 0,
      publicGists: data.public_gists ?? 0,
      bio: data.bio ?? null,
      location: data.location ?? null,
      company: data.company ?? null,
      blog: data.blog ?? null,
      hireable: data.hireable ?? null,
      createdAt: data.created_at ?? '',
    };
  } catch {
    return {
      followers: 63,
      following: 106,
      publicRepos: 36,
      publicGists: 0,
      bio: 'Software Engineer @initializ | Golang | Elixir',
      location: 'Gurugram',
      company: '@initializ',
      blog: 'https://ratnesh-maurya.com/',
      hireable: true,
      createdAt: '2021-06-01T01:47:22Z',
    };
  }
}

export async function fetchTopRepos(limit = 10): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/ratnesh-maurya/repos?sort=updated&per_page=${limit}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      stargazersCount: repo.stargazers_count ?? 0,
      language: repo.language,
      url: repo.html_url,
      updatedAt: repo.updated_at,
      isFork: repo.fork ?? false,
    }));
  } catch {
    return [];
  }
}
