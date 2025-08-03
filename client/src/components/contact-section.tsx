import { useState } from "react"
import { Mail, Phone, Github, Linkedin, Download, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useMutation } from "@tanstack/react-query"
import { apiRequest } from "@/lib/queryClient"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data)
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      })
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields.",
        variant: "destructive",
      })
      return
    }
    contactMutation.mutate(formData)
  }

  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a')
    link.href = '/api/resume'
    link.download = 'Yash_Garg_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yashgargg4@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7428846924",
      color: "green"
    },
    {
      icon: Github,
      label: "Code Repository",
      value: "GitHub Profile",
      color: "gray"
    },
    {
      icon: Linkedin,
      label: "Professional Network",
      value: "LinkedIn Profile",
      color: "blue"
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary",
      green: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
      gray: "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400",
      blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.primary
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Let's discuss how we can work together on innovative projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and collaborations in AI engineering and full-stack development.
                </p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div key={info.label} className="flex items-center">
                      <div className={`w-12 h-12 ${getColorClasses(info.color)} rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">{info.value}</p>
                        <p className="text-sm text-gray-500">{info.label}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {/* Resume Download */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-600">
                <Button
                  onClick={handleDownloadResume}
                  className="bg-primary text-white hover:bg-primary/90"
                  data-testid="button-download-resume"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your name"
                    required
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="Project discussion"
                    required
                    data-testid="input-subject"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell me about your project..."
                    rows={4}
                    required
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90"
                  disabled={contactMutation.isPending}
                  data-testid="button-send-message"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
