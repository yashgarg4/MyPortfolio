import { ExternalLink, Github, MapPin, UserCheck, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  const projects = [
    {
      id: "ai-travel-planner",
      title: "AI Travel Planner App",
      description: "Built an AI-powered travel planner that generates personalized, multi-day itineraries with map-based sightseeing, cost estimation, cultural tips, and emergency info using CrewAI and Gemini LLM.",
      technologies: ["Streamlit", "CrewAI", "Python", "Gemini LLM"],
      icon: MapPin,
      gradient: "from-blue-400 to-purple-600"
    },
    {
      id: "ai-job-assistant",
      title: "AI Job Application Assistant",
      description: "Built an AI tool to parse resumes and job descriptions, assess match compatibility, and generate tailored resumes and cover letters using multi-agent workflows and structured orchestration.",
      technologies: ["Streamlit", "CrewAI", "LiteLLM", "Pydantic"],
      icon: UserCheck,
      gradient: "from-green-400 to-blue-600"
    },
    {
      id: "ai-financial-analyst",
      title: "AI Financial Analyst Assistant",
      description: "Built an AI-powered system using CrewAI and Gemini LLM to automate financial analysis and company research, integrating APIs for market data, statements, and news sentiment analysis.",
      technologies: ["Python", "CrewAI", "Streamlit", "LLM APIs"],
      icon: TrendingUp,
      gradient: "from-purple-400 to-pink-600"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              AI-powered applications showcasing my expertise in intelligent automation and agentic systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div
                  key={project.id}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  data-testid={`project-card-${project.id}`}
                >
                  {/* Project Header */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button
                        variant="link"
                        size="sm"
                        className="p-0 text-primary hover:text-primary/80"
                        data-testid={`button-demo-${project.id}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </Button>
                      <Button
                        variant="link"
                        size="sm"
                        className="p-0 text-gray-500 hover:text-gray-600"
                        data-testid={`button-code-${project.id}`}
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
