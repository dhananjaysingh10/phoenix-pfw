"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech CSE-MAC",
      institution: "Netaji Subhas University of Technology",
      date: "05/2026",
      grade: "8.2 CGPA"
    },
    {
      degree: "CBSE (Class XII)",
      institution: "Dashmesh Public School",
      date: "06/2022",
      grade: "90%"
    },
    {
      degree: "CBSE (Class X)",
      institution: "Dashmesh Public School",
      date: "06/2020",
      grade: "94%"
    }
  ]

  return (
    <div className="w-full h-full flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-center">Education Timeline</h2>
      
      <div className="relative flex-1 overflow-y-auto pr-2 
        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ maxHeight: 320 }}>
        
        <div className="space-y-8 pb-4">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              {/* <div className="absolute -left-7 top-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-background"></div>
              </div>
               */}
              <Card className="bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{edu.institution}</span>
                    <span>{edu.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Grade:</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {edu.grade}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
          
          <div className="relative">
            <div className="absolute -left-7 top-0 w-6 h-6 rounded-full bg-transparent flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
