import { ModeToggle } from "@/components/theme-toggle"
import Image from "next/image"
export default function Navbar() {
  return (
    <nav className="p-4 md:p-6 border-b border-border flex items-center justify-between w-full">
     
      <div className="flex items-center gap-3">
        <Image
          src="/logo4.svg"
          alt="Phoenix Logo"
          width={48}
          height={48}
          className="w-12 h-12 dark:invert text-white"
        />
        <h1 className="font-bold font-mono text-xl md:text-2xl text-foreground">
          phoenix
        </h1>
      </div>
      <ModeToggle />
    </nav>
  )
}
