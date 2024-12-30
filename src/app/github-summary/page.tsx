'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitFork, Star, FileCode, Users, Book, GitPullRequest, MapPin, Briefcase, LinkIcon, Activity, Calendar, GitCommit, Eye } from 'lucide-react'
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import Image from "next/image"
import { fetchGitHubData } from '@/services/github'

interface GitHubData {
  user: {
    name: string
    bio: string
    avatarUrl: string
    followers: number
    following: number
    publicRepos: number
    location: string
    company: string
    blog: string
    createdAt: string
  }
  stats: {
    totalStars: number
    totalForks: number
    totalRepositories: number
    languageStats: {
      name: string
      count: number
      percentage: number
    }[]
  }
  repositories: {
    name: string
    description: string
    stars: number
    forks: number
    language: string
    url: string
    updatedAt: string
    openIssues: number
    watchers: number
  }[]
  pullRequests: {
    title: string
    url: string
    repo: string
    createdAt: string
    state: string
  }[]
  contributions: {
    date: string
    count: number
    level: number
  }[]
  recentActivity: {
    type: string
    repo: string
    createdAt: string
    payload:unknown
  }[]
  // contributionStreak: number
  // totalContributions: number
  // topContributors: {
  //   login: string
  //   avatarUrl: string
  //   contributions: number
  // }[]
  // pinnedRepos: {
  //   name: string
  //   description: string
  //   stars: number
  //   forks: number
  //   language: string
  //   url: string
  // }[]
  commitActivity: {
    week: string
    total: number
    days: number[]
  }[]
}

export default function GitHubSummary() {
  const [data, setData] = useState<GitHubData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadGitHubData() {
      try {
        const githubData = await fetchGitHubData()
        setData(githubData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    loadGitHubData()
  }, [])

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-red-500">Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50 font-poppins">
      {/* Profile Section */}
      <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6">
          {isLoading ? (
            <div className="flex items-center gap-4">
              <Skeleton className="h-24 w-24 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-96" />
              </div>
            </div>
          ) : data && (
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Image
                src={data.user.avatarUrl}
                alt={data.user.name}
                width={96}
                height={96}
                className="rounded-full ring-2 ring-teal-500"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.user.name}</h1>
                <p className="text-gray-600 mb-4">{data.user.bio}</p>
                <div className="flex flex-wrap gap-4">
                  {data.user.location && (
                    <span className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1 text-teal-500" />
                      {data.user.location}
                    </span>
                  )}
                  {data.user.company && (
                    <span className="flex items-center text-sm text-gray-500">
                      <Briefcase className="w-4 h-4 mr-1 text-teal-500" />
                      {data.user.company}
                    </span>
                  )}
                  {data.user.blog && (
                    <Link href={data.user.blog} className="flex items-center text-sm text-teal-600 hover:text-teal-700">
                      <LinkIcon className="w-4 h-4 mr-1" />
                      Website
                    </Link>
                  )}
                  <span className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1 text-teal-500" />
                    Joined {new Date(data.user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats Section */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        {isLoading ? (
          Array(4).fill(0).map((_, i) => (
            <Skeleton key={i} className="h-32" />
          ))
        ) : data && (
          <>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-teal-600">
                  <Star className="w-4 h-4 inline-block mr-2" />
                  Total Stars
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900">{data.stats.totalStars}</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-teal-600">
                  <Users className="w-4 h-4 inline-block mr-2" />
                  Followers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900">{data.user.followers}</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-teal-600">
                  <GitFork className="w-4 h-4 inline-block mr-2" />
                  Total Forks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900">{data.stats.totalForks}</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-teal-600">
                  <Book className="w-4 h-4 inline-block mr-2" />
                  Repositories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900">{data.stats.totalRepositories}</p>
              </CardContent>
            </Card>
          </>
        )}
      </div>


      {/* Most Used Languages */}
      <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">Most Used Languages</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-48" />
          ) : data && (
            <div className="space-y-4">
              {data.stats.languageStats.slice(0, 5).map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                    <span className="text-sm font-medium text-gray-500">{lang.percentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-teal-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Activity and Pull Requests */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Recent Activity */}
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              Array(5).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-16 mb-2" />
              ))
            ) : data && data.recentActivity.length > 0 ? (
              <div className="space-y-4">
                {data.recentActivity.slice(0, 5).map((activity, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.type.replace('Event', '')}</p>
                      <p className="text-sm text-gray-500">{activity.repo}</p>
                    </div>
                    <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                      <Activity className="w-3 h-3 mr-1" />
                      {new Date(activity.createdAt).toLocaleDateString()}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No recent activity found.</p>
            )}
          </CardContent>
        </Card>

        {/* Recent Pull Requests */}
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">Recent Pull Requests</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              Array(5).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-16 mb-2" />
              ))
            ) : data && data.pullRequests.length > 0 ? (
              <div className="space-y-4">
                {data.pullRequests.map((pr) => (
                  <div key={pr.url} className="p-3 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <Link
                        href={pr.url}
                        className="text-teal-600 hover:text-teal-700 transition-colors font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {pr.title}
                      </Link>
                      <Badge variant="outline" className={`${pr.state === 'open' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-purple-50 text-purple-700 border-purple-200'}`}>
                        <GitPullRequest className="w-3 h-3 mr-1" />
                        {pr.state}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500">
                      {pr.repo} • {new Date(pr.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No recent pull requests found.</p>
            )}
          </CardContent>
        </Card>
      </div>

     

    

     

      {/* Top Repositories */}
      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">Top Repositories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {isLoading ? (
              Array(4).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-48" />
              ))
            ) : data && data.repositories ? (
              data.repositories
                .sort((a, b) => b.stars - a.stars)
                .slice(0, 6)
                .map((repo) => (
                  <div key={repo.name} className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <Link
                        href={repo.url}
                        className="text-lg font-medium text-teal-600 hover:text-teal-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repo.name}
                      </Link>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-gray-600">
                          <Star className="w-4 h-4" />
                          {repo.stars}
                        </span>
                        <span className="flex items-center gap-1 text-gray-600">
                          <GitFork className="w-4 h-4" />
                          {repo.forks}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{repo.description || 'No description provided'}</p>
                    <div className="flex items-center gap-4">
                      {repo.language && (
                        <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                          <FileCode className="w-3 h-3 mr-1" />
                          {repo.language}
                        </Badge>
                      )}
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Eye className="w-4 h-4" />
                        {repo.watchers} watchers
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <GitCommit className="w-4 h-4" />
                        {repo.openIssues} open issues
                      </span>
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-gray-500">No repository data available.</p>
            )}
          </div>
        </CardContent>
      </Card>


      {/* Activity Graph */}
      <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow duration-300 ">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">Activity Graph</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-48" />
          ) : data && data.contributions ? (
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex flex-wrap justify-center gap-1">
                {data.contributions.map((day, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-sm transition-all duration-300 hover:transform hover:scale-150 ${day.level === 0 ? 'bg-gray-100' :
                      day.level === 1 ? 'bg-teal-200' :
                        day.level === 2 ? 'bg-teal-300' :
                          day.level === 3 ? 'bg-teal-400' : 'bg-teal-500'
                      }`}
                    title={`${day.date}: ${day.count} contributions`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No activity graph data available.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

