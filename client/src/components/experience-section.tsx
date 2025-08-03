import { CheckCircle, Award } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              My professional journey in software development and AI engineering
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary hidden md:block"></div>
            
            <div className="space-y-12">
              {/* Current Position */}
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>
                <div className="md:ml-20 w-full">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary">Associate Engineer</h3>
                        <h4 className="text-lg font-medium">JioGames | Jio Platforms Limited</h4>
                        <p className="text-gray-500 dark:text-gray-400">Mumbai</p>
                      </div>
                      <div className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full mt-2 md:mt-0">
                        December 2023 – Present
                      </div>
                    </div>
                    
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 w-4 h-4" />
                        Built cross-platform games by integrating the JioGames SDK to manage ad rendering, event callbacks, and in-game monetization logic.
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 w-4 h-4" />
                        Developed automated browser-based scraping tools to analyze websites across domains for competitive SEO research and extracting game data.
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 w-4 h-4" />
                        Created dynamic, responsive ad layouts optimized for various screen orientations, ensuring consistent ad behavior.
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 w-4 h-4" />
                        Built responsive UI components to support real-time multiplayer functionality across a wide range of screen sizes and devices.
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 w-4 h-4" />
                        Validated over 150 games, resolving more than 600 issues through in-depth console analysis and hands-on debugging.
                      </li>
                    </ul>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm inline-flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Best Debutant Award
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
