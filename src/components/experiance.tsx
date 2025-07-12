"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function Experience() {
  const [open, setOpen] = useState(false)

  const summary = (
    <>
      <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
        <li>Enhanced Asset Management System</li>
        <li>Built high-performance REST APIs</li>
        <li>Developed modular React frontend</li>
        <li>SAP integration & SSO authentication</li>
        <li>Docker deployment & CI/CD pipelines</li>
      </ul>
    </>
  )

  // Full details for modal
  const fullDetails = [
    "Developed and enhanced an Asset Management System with complete lifecycle tracking from procurement to disposal.",
    "Designed and implemented high-performance REST APIs with an average response time of 200-300ms.",
    "Created a dynamic, modular React frontend supporting custom fields and fine-grained access control, reducing developer intervention for UI changes.",
    "Ensured secure and consistent data handling using Zod-based validation on both frontend and backend.",
    "Integrated with SAP for real-time asset data sync and enabled seamless authentication via Single Sign-On (SSO).",
    "Offloaded non-critical services (e.g., mailing, notifications) to BullMQ background workers, improving system throughput and resilience.",
    "Containerized and deployed the application using Docker, enabling environment consistency and smoother DevOps workflows.",
    "Scheduled routine tasks such as maintenance and cleanup using cron jobs, ensuring operational stability.",
    "Set up CI/CD pipelines using Jenkins to automate deployment on MLL servers, ensuring fast and reliable release cycles.",
    "Refactored code base to follow clean architecture principles, reducing tight coupling and improving maintainability."
  ]

  return (
    <div className="w-full h-full flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-center">Professional Experience</h2>
      <div
        className="relative flex-1 overflow-y-auto pr-2 
        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ maxHeight: 320 }}
      >
        {/* <div className="absolute left-4 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div> */}
        <div className="space-y-8 pb-4">
          <div className="relative">
            {/* <div className="absolute -left-7 top-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-background"></div>
            </div> */}
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Mahindra Logistics</CardTitle>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>SDE Intern</span>
                  <span>Apr 2025 – Present</span>
                </div>
              </CardHeader>
              <CardContent>
                {summary}
                <div className="flex justify-end mt-2">
                  <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <div className="absolute -left-7 top-0 w-6 h-6 rounded-full bg-transparent flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>SDE Intern</DialogTitle>
            <DialogDescription>Mahindra Logistics • Apr 2025 – Present</DialogDescription>
          </DialogHeader>
          
          <div className="overflow-y-auto flex-grow py-2 pr-2">
            <ul className="list-disc list-inside space-y-2">
              {fullDetails.map((detail, index) => (
                <li key={index} className="text-sm">{detail}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-end pt-4">
            <Button onClick={() => setOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
