'use client'

import { useState, useEffect } from "react"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast } from "sonner" 

type ChatMessage = {
  _id: string
  name: string
  message: string
  createdAt: string
}

export function GlobalChat() {
  const [accepted, setAccepted] = useState(false)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [cooldown, setCooldown] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchMessages();

    const interval: NodeJS.Timeout = setInterval(() => {
      fetchMessages();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    try {
      // setIsLoading(true)
      const response = await fetch('/api/messages')
      const data = await response.json()
      if (data.success) {
        setMessages(data.data.reverse())
      }
    } catch {
      toast("Failed to load messages")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [cooldown])

  const handleSend = async () => {
    if (!name || !message) return
    const tempId = Date.now().toString()
    const newMessage = { _id: tempId, name, message, createdAt: new Date().toISOString() }
    setMessages(prev => [...prev, newMessage])
    setMessage("")
    setCooldown(69)

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, message })
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message')
      }
      setMessages(prev =>
        prev.map(msg => msg._id === tempId ? result.data : msg)
      )
    } catch {
      toast("Failed to send message")
      setMessages(prev => prev.filter(msg => msg._id !== tempId))
    }
  }
  function formatIST(datetime: string) {
    const date = new Date(datetime);
    const istOffset = 5.5 * 60; 
    const localTime = new Date(date.getTime() + istOffset * 60000);
    const dateStr = localTime.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    const timeStr = localTime.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    return { dateStr, timeStr };
  }

  return (
    <Card className="w-full max-w-2xl min-h-[500px] h-full flex flex-col pl-1 pr-1 pt-4 pb-4 rounded-xl shadow-xl overflow-hidden">
      {!accepted ? (
        <>
          <CardHeader>
            <CardTitle className="text-center">Rules</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between items-center">
            <ul className="list-disc text-sm text-muted-foreground pl-4 space-y-2">
              <li>No racism, sexism, hate speech, or communal/anti-religious remarks</li>
              <li>No harassment, bullying, or personal attacks of any kind</li>
              <li>No threats, encouragement of self-harm, or promotion of violence</li>
              <li>No spamming, advertising, or sharing of suspicious links</li>
              <li>Do not click on any links posted by users</li>
              <li>No sharing of personal information or doxxing</li>
              <li>This is a public space — always be respectful and responsible</li>
              <li>Admins reserve the right to remove any content or user at their discretion</li>
            </ul>
            <Button className="mt-4" onClick={() => setAccepted(true)}>
              I Understand
            </Button>
          </CardContent>

        </>
      ) : (
        <>
          <CardHeader>
            <CardTitle>Visitor Log</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col overflow-hidden">
            {/* Chat Body */}
            <ScrollArea className="flex-1 max-h-[250px] border rounded-md p-2 mb-4 overflow-y-auto">
              {isLoading ? (
                <div className="flex justify-center items-center h-full">
                  <p>Loading messages...</p>
                </div>
              ) : messages.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                  <p>No messages yet. Be the first to chat!</p>
                </div>
              ) : (
                <div className="space-y-2 text-sm">
                  {messages.map((msg) => {
                    const { dateStr, timeStr } = formatIST(msg.createdAt);
                    return (
                      <p key={msg._id}>
                        <span className="font-semibold text-primary">{msg.name}:</span>{" "}
                        <span className="font-light text-foreground">{msg.message}</span>
                        <span className="ml-2 text-xs text-gray-500 font-light">
                          {dateStr}, {timeStr}
                        </span>
                      </p>
                    )
                  })}
                </div>
              )}
            </ScrollArea>
            <div className="space-y-2">
              <Input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Textarea
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={cooldown > 0}
              />
              <Button
                onClick={handleSend}
                className="w-full"
                disabled={cooldown > 0 || !name || !message}
              >
                {cooldown > 0 ? `Please wait ${cooldown}s` : "Send Message"}
              </Button>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  )
}
