import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-primary opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwNzBGMyIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-yellow-300">Yash Garg</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Versatile Full-Stack Developer & AI Engineer
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90">
              Building cross-platform applications, intelligent automation tools, and agentic AI systems. 
              Proven track record in developing scalable UIs, integrating SDKs, and solving real-world problems with impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-semibold"
                onClick={() => scrollToSection("contact")}
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white opacity-70 hover:opacity-100 transition-opacity duration-200"
              data-testid="button-scroll-down"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
