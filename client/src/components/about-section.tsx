import { Code, Brain, Smartphone } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate about creating innovative solutions that bridge the gap between cutting-edge technology and real-world applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Full-Stack Developer & AI Engineer</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently working as an Associate Engineer at JioGames, where I build cross-platform games and develop automated tools for competitive analysis. 
                My expertise spans from frontend React components to backend APIs, with a special focus on AI-powered applications and agentic systems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I've validated over 150 games, resolved 600+ issues, and authored comprehensive SDK documentation that accelerated developer onboarding. 
                My passion lies in leveraging LLMs and multi-agent orchestration to create intelligent automation solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  Full-Stack Development
                </div>
                <div className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-lg flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Engineering
                </div>
                <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-4 py-2 rounded-lg flex items-center">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Cross-Platform
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Games Validated</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">600+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Issues Resolved</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">9.06</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">CGPA</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
