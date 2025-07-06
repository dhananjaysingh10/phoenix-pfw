'use client'

import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

export default function ProfileData() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-foreground">Dhananjay Singh</h1>

      <ul className="space-y-1 text-sm text-muted-foreground">
        <li>
          - SDE Intern{" "}
          <a
            href="https://www.mahindralogistics.com/"
            className="underline text-foreground hover:opacity-90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mahindra Logistics (Apr 2025 - June 2025)
          </a>
        </li>
        <li>- Typescript, Node.js, and React enjoyer</li>
        <li>- Meta Hacker Cup Global Rank 3184 Round 2</li>
        <li>- TCS Code Vita Global Rank 1200 </li>
        <li>- Built CP Blog, Sentence Construction Game, and more</li>
        <li>- Loves clean UI, performance, and automation</li>
      </ul>

      <div className="flex space-x-4 pt-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-foreground hover:text-primary transition"
          asChild
        >
          <a
            href="https://www.linkedin.com/in/dhananjay-singh-0335a5259/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-foreground hover:text-primary transition"
          asChild
        >
          <a
            href="https://github.com/dhananjaysingh10/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-foreground hover:text-primary transition"
          asChild
        >
          <a
            href="mailto:itsdhananjaysingh04@gmail.com"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  )
}
