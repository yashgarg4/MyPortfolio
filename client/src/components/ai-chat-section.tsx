import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/hooks/use-toast"
import { useMutation } from "@tanstack/react-query"
import { apiRequest } from "@/lib/queryClient"

interface ChatMessage {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
}

interface ChatResponse {
  success: boolean
  response: string
}

export function AiChatSection() {
  const { toast } = useToast()
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi! I'm Yash's AI assistant. I can answer questions about his experience, skills, projects, and background. What would you like to know?",
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState("")
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const chatMutation = useMutation({
    mutationFn: async (message: string): Promise<ChatResponse> => {
      return apiRequest("POST", "/api/chat", { message }) as Promise<ChatResponse>
    },
    onSuccess: (data, userMessage) => {
      const userMsg: ChatMessage = {
        id: Date.now().toString(),
        type: 'user',
        content: userMessage,
        timestamp: new Date()
      }
      
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: data.response,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, userMsg, aiMsg])
      setInputMessage("")
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact Yash directly.",
        variant: "destructive",
      })
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim() || chatMutation.isPending) return
    
    chatMutation.mutate(inputMessage.trim())
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const suggestedQuestions = [
    "What's your experience with AI and machine learning?",
    "Tell me about your projects at JioGames",
    "What technologies do you specialize in?",
    "What was your role in the AI Travel Planner project?"
  ]

  return (
    <section id="ai-chat" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-primary mr-2" />
              <h2 className="text-4xl font-bold">Ask About My Experience</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Chat with my AI assistant to learn more about my background, projects, and skills
            </p>
          </div>
          
          <Card className="bg-gray-50 dark:bg-gray-700 border-0 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg">
                <Bot className="w-5 h-5 text-primary mr-2" />
                AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Chat Messages */}
              <ScrollArea 
                className="h-96 w-full rounded-lg border bg-white dark:bg-gray-800 p-4"
                ref={scrollAreaRef}
              >
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start space-x-3 ${
                        message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === 'ai' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                      }`}>
                        {message.type === 'ai' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </div>
                      <div className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === 'ai'
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                          : 'bg-primary text-white'
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {chatMutation.isPending && (
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              
              {/* Suggested Questions */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Suggested questions:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="justify-start text-left h-auto p-3 text-xs"
                        onClick={() => setInputMessage(question)}
                        data-testid={`suggested-question-${index}`}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Chat Input */}
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything about Yash's experience..."
                  disabled={chatMutation.isPending}
                  className="flex-1"
                  maxLength={1000}
                  data-testid="chat-input"
                />
                <Button
                  type="submit"
                  disabled={!inputMessage.trim() || chatMutation.isPending}
                  className="bg-primary text-white hover:bg-primary/90"
                  data-testid="chat-send-button"
                >
                  {chatMutation.isPending ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}