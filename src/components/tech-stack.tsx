// components/tech-stack.tsx
import {  } from "react"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@radix-ui/react-tooltip"
const techCategories = [
    {
        name: "Frontend",
        items: [
            { name: "React", level: "Intermediate" },
            { name: "TypeScript", level: "Newbie" },
            { name: "Tailwind CSS", level: "Intermediate" },
            { name: "shadcn/ui", level: "Intermediate" },
            { name: "Redux", level: "Intermediate" }
        ]
    },
    {
        name: "Backend",
        items: [
            { name: "Node.js", level: "Intermediate" },
            { name: "Express.js", level: "Intermediate" },
            { name: "REST API", level: "Intermediate" },
            { name: "BullMQ", level: "Newbie" },
            { name: "Zod", level: "Intermediate" }
        ]
    },
    {
        name: "DevOps",
        items: [
            { name: "Docker", level: "Newbie" },
            { name: "Vercel", level: "Newbie" },
            { name: "Render", level: "Newbie" }
        ]
    },
    {
        name: "Databases",
        items: [
            { name: "MongoDB", level: "Intermediate" },
            { name: "MySQL", level: "Intermediate" }
        ]
    },
    {
        name: "Languages",
        items: [
            { name: "C++", level: "Intermediate" },
            { name: "JavaScript", level: "Intermediate" },
            { name: "SQL", level: "Intermediate" }
        ]
    }
]

const competencies = [
    { name: "Data Structures & Algorithms", badge: "700+ LeetCode" },
    { name: "UI/UX Design", badge: "ECell NSUT" },
    { name: "Authentication Systems", badge: "SSO/OAuth" },
    { name: "Competitive Programming", badge: "Meta Hacker Cup" }
]

const achievements = [
    { label: "Global Rank 3184 in Meta Hacker Cup Round 2" },
    { label: "TCS code vits Global Rank 1200" }    
]

// function TechTooltip({ text, children }: { text: string, children: React.ReactNode }) {
//     const [show, setShow] = useState(false)
//     return (
//         <span
//             className="relative"
//             onMouseEnter={() => setShow(true)}
//             onMouseLeave={() => setShow(false)}
//             tabIndex={0}
//             onFocus={() => setShow(true)}
//             onBlur={() => setShow(false)}
//         >
//             {children}
//             {show && (
//                 <span className="absolute z-20 left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-900 text-white text-xs whitespace-nowrap shadow-lg">
//                     {text}
//                 </span>
//             )}
//         </span>
//     )
// }

export default function TechStack() {
    return (
        <div className="w-full h-full flex flex-col">
            <h2 className="text-xl font-bold mb-4 text-center">Skillset</h2>

            <div className="grid grid-cols-1 gap-4 flex-grow overflow-y-auto pr-2
        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                style={{ maxHeight: 320 }}>

                {/* Tech Stack */}
                <div className="bg-white/70 dark:bg-black/40 rounded-2xl shadow-lg p-5 backdrop-blur-md">
                    <h3 className="text-lg font-semibold mb-4">Technical Toolkit</h3>
                    <div className="space-y-4">
                        {techCategories.map(category => (
                            <div key={category.name}>
                                <div className="font-semibold text-sm mb-1">{category.name}</div>
                                <div className="flex flex-wrap gap-2">
                                    {/* {category.items.map(tech => (
                    <TechTooltip key={tech.name} text={`${tech.level} `}>
                      <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800 transition">
                        {tech.name}
                      </span>
                    </TechTooltip>
                  ))} */}

                                    <TooltipProvider> 
                                        {category.items.map(tech => (
                                            <Tooltip key={tech.name}>
                                                <TooltipTrigger asChild>
                                                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800 transition">
                                                        {tech.name}
                                                    </span>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    {tech.level}
                                                </TooltipContent>
                                            </Tooltip>
                                        ))}
                                    </TooltipProvider>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Competencies */}
                <div className="bg-white/70 dark:bg-black/40 rounded-2xl shadow-lg p-5 backdrop-blur-md flex flex-col">
                    <h3 className="text-lg font-semibold mb-4">Core Competencies</h3>
                    <div>
                        <div className="font-semibold text-sm mb-1">Technical Expertise</div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            {competencies.map(skill => (
                                <div key={skill.name}>
                                    <div className="text-sm font-medium">{skill.name}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{skill.badge}</div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="font-semibold text-sm mb-1 mt-2">Key Achievements</div>
                            <ul className="space-y-2 text-sm">
                                {achievements.map(a => (
                                    <li key={a.label} className="flex items-start">
                                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                                        <span>{a.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
