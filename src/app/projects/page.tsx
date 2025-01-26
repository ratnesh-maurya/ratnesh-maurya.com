'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Tag } from 'lucide-react'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import { projects } from '@/data/projects'


export default function ProjectsPage() {
    const [selectedTags, setSelectedTags] = useState<string[]>([])

    const allTags = Array.from(new Set(projects.flatMap(project => project.tags)))

    const filteredProjects = projects.filter(project =>
        selectedTags.length === 0 || project.tags.some(tag => selectedTags.includes(tag))
    )


    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        )
    }

    return (

        <div className="container mx-auto max-w-4xl py-12 px-4 font-sans  ">
            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-merriweather font-semibold dark:text-teal-100 text-teal-700 ">Projects</h1>
                    <p className=" max-w-[700px]">
                        A collection of my recent work in software development, cloud technologies, and system design.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 ">
                    {allTags.map(tag => (
                        <Badge
                            key={tag}
                            variant={selectedTags.includes(tag) ? "default" : "outline"}
                            className={`cursor-pointer hover:bg-teal-100 ${selectedTags.includes(tag) ? 'bg-teal-500 hover:bg-teal-600 text-white' : 'text-teal-600 border-teal-500'
                                }`}
                            onClick={() => toggleTag(tag)}
                        >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {filteredProjects.map(project => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Card className="w-full h-full max-w-sm flex flex-col dark:bg-transparent border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-teal-600">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow">
                                    <Link href={project.links.live || project.links.github || '/'} passHref target='_blank'>
                                            <div className="aspect-video relative rounded-lg overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100">
                                                <Image
                                                    src={project.image}
                                                    alt={`${project.title} preview`}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="transition-transform duration-300 hover:scale-105"
                                                />
                                            </div>
                                        
                                    </Link>

                                    <p className="text-sm">
                                        {project.longDescription}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                                className="bg-teal-50 text-teal-600 hover:bg-teal-100"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex gap-2 pt-2 mt-auto">
                                        {project.links.github && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="border-teal-500 text-teal-600 hover:bg-teal-700 hover:text-white transition-colors duration-300"
                                                asChild
                                            >
                                                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Code
                                                </a>
                                            </Button>
                                        )}
                                        {project.links.live && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="border-teal-500 text-teal-600 hover:bg-teal-700 hover:text-white transition-colors duration-300"
                                                asChild
                                            >
                                                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Demo
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}

