'use client'

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function getTimeLeft() {
  const now = new Date()
  const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59)
  const diff = endOfYear.getTime() - now.getTime()

  const seconds = Math.floor(diff / 1000) % 60
  const minutes = Math.floor(diff / (1000 * 60)) % 60
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30))

  return { months, days, hours, minutes, seconds }
}

export default function TimeLeftThisYear() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="text-center text-sm font-bold md:text-2xl">
          Time Left This Year
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-center gap-2 text-center">
        <TimeBadge label="Months" value={timeLeft.months} />
        <TimeBadge label="Days" value={timeLeft.days} />
        <TimeBadge label="Hours" value={timeLeft.hours} />
        <TimeBadge label="Minutes" value={timeLeft.minutes} />
        <TimeBadge label="Seconds" value={timeLeft.seconds} />
      </CardContent>
    </Card>
  )
}

function TimeBadge({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <Badge className="text-lg px-4 py-2">{value}</Badge>
      <span className="text-sm mt-1 text-muted-foreground">{label}</span>
    </div>
  )
}
