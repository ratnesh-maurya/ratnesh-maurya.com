export interface GitHubStats {
  totalStars: number;
  totalForks: number;
  totalRepositories: number;
  topLanguages: string[];
}

export interface Repository {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
}
