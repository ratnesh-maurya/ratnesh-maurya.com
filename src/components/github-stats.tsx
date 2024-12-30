import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GitFork, Star, Book } from 'lucide-react'
import type { GitHubStats } from "@/types/github"

interface GitHubStatsProps {
    stats: GitHubStats
}

export function GitHubStats({ stats }: GitHubStatsProps) {
    return (
        <div className="grid gap-4 md:grid-cols-3 mb-8">
            <Card className="bg-teal-50">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-teal-600">
                        <Star className="w-4 h-4 inline-block mr-2" />
                        Total Stars
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold text-teal-700">{stats.totalStars}</p>
                </CardContent>
            </Card>

            <Card className="bg-teal-50">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-teal-600">
                        <GitFork className="w-4 h-4 inline-block mr-2" />
                        Total Forks
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold text-teal-700">{stats.totalForks}</p>
                </CardContent>
            </Card>

            <Card className="bg-teal-50">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-teal-600">
                        <Book className="w-4 h-4 inline-block mr-2" />
                        Repositories
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold text-teal-700">{stats.totalRepositories}</p>
                </CardContent>
            </Card>
        </div>
    )
}

