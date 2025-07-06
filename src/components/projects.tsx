"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function Projects() {
    const [modal, setModal] = useState<{ open: boolean, projectIndex: number | null }>({ open: false, projectIndex: null })

    const projects = [
        {
            title: "Blog Application",
            liveUrl: "https://cpblog.onrender.com/",
            githubUrl: "https://github.com/dhananjaysingh10/YetAnotherWebBLOG",
            description: "High-performance blogging platform utilizing React, Redux, Node.js, Express.js, MongoDB, and Tailwind CSS, deployed on Render. Integrated Google OAuth for secure authentication.",
            features: [
                "Admin Dashboard for content management, including Post Creation, Public Profiles, and Search Functionality.",
                "Markdown support with syntax highlighting for code snippets.",
                "Achieved 1800+ page views and 190+ active users.",
                "Focused on delivering Competitive programming resources and Interview preparation guides."
            ],
            techStack: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]
        },
        {
            title: "Sentence Construction",
            liveUrl: "https://sentence-counstruction-game.vercel.app/",
            githubUrl: "https://github.com/dhananjaysingh10/sentence-counstruction-game",
            description: "Interactive quiz app with a strong focus on clean UI, smooth interactions, and sentence construction via option-based blanks.",
            features: [
                "Tech Stack: React, Tailwind CSS, Vite, shadcn/ui, Node.js, Express.js, REST API"
            ],
            techStack: ["React", "Tailwind CSS", "Vite", "shadcn/ui", "Node.js", "Express.js"]
        }
    ]

    return (
        <div className="w-full h-full flex flex-col">
            <h2 className="text-xl font-bold mb-4 text-center">Projects</h2>
            <div className="relative flex-1 overflow-y-auto pr-2
        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                style={{ maxHeight: 320 }}>
                <div className="space-y-6">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-white/70 dark:bg-black/40 rounded-2xl shadow-lg p-5 backdrop-blur-md"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-lg font-semibold inline-block">{project.title}</span>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{project.description}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-blue-600"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="2" y1="12" x2="22" y2="12"></line>
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <Button
                                className="mt-4"
                                size="sm"
                                variant="outline"
                                onClick={() => setModal({ open: true, projectIndex: idx })}
                            >
                                Read More
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            <Dialog open={modal.open} onOpenChange={open => setModal({ open, projectIndex: open ? modal.projectIndex : null })}>
                <DialogContent className="max-w-lg max-h-[80vh] flex flex-col">
                    {modal.projectIndex !== null && (
                        <>
                            <DialogHeader>
                                <DialogTitle>{projects[modal.projectIndex].title}</DialogTitle>
                                <DialogDescription>
                                    <div className="flex gap-3 mt-2">
                                        <a
                                            href={projects[modal.projectIndex].liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-blue-600"
                                            title="Live Site"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                                <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2" />
                                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
                                            </svg>
                                        </a>
                                        <a
                                            href={projects[modal.projectIndex].githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-gray-900 dark:hover:text-white"
                                            title="GitHub"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </DialogDescription>

                            </DialogHeader>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {projects[modal.projectIndex].techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{projects[modal.projectIndex].description}</p>
                            <div className="overflow-y-auto pr-2">
                                <ul className="space-y-2 text-sm">
                                    {projects[modal.projectIndex].features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-end pt-4">
                                <Button onClick={() => setModal({ open: false, projectIndex: null })}>Close</Button>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
