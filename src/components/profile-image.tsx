'use client'

import Image from "next/image"

export default function ProfileImage() {
  return (
    <div className="flex justify-center">
      <Image
        src="/logo3.jpg" 
        alt="Dhananjay Singh"
        width={150}
        height={150}
        className="rounded-full shadow-md"
      />
    </div>
  )
}
  

