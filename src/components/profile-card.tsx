'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import ProfileData from "./profile-data"
import ProfileImage from "./profile-image"
import { Button } from "@/components/ui/button"
import Education from "./education"
import Experience from "./experiance"
import TechStack from "./tech-stack"
import Projects from "./projects"
import { Home, GraduationCap, Briefcase, Code2, Cpu } from "lucide-react"

export default function ProfileCard() {
  const [flipped, setFlipped] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return <ProfileData />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "tech-stack":
        return <TechStack />;
      default:
        return <ProfileData />;
    }
  }

  const NAV_ITEMS = [
    { id: "home", icon: Home, label: "Home" },
    { id: "education", icon: GraduationCap, label: "Education" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "projects", icon: Code2, label: "Projects" },
    { id: "tech-stack", icon: Cpu, label: "Tech Stack" },
  ]

  return (
    <div className="flex justify-center items-center perspective w-full">
      <motion.div
        className="relative w-full max-w-md min-h-[500px] h-full transition-transform duration-700 preserve-3d rounded-2xl shadow-2xl bg-card"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute w-full h-full backface-hidden rounded-2xl  p-6 flex flex-col justify-between">
          <div className="flex-grow">
            {renderContent()}
          </div>

          <div className="flex justify-center space-x-1 mb-4">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setCurrentPage(item.id)}
                className="rounded-full transition-colors"
              >
                <item.icon size={18} />
              </Button>
            ))}
          </div>

          <div className="flex justify-center">
            <Button onClick={() => setFlipped(true)} variant="outline">
              Flip to Image
            </Button>
          </div>
        </div>

        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-white/10 p-6 flex flex-col justify-between">
          <ProfileImage />
          <div className="flex justify-center">
            <Button onClick={() => setFlipped(false)} variant="outline">
              Back to About
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
