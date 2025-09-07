import { Code, Brain, Layers, Wrench, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "blue",
      skills: [
        "JavaScript",
        "Python",
        "TypeScript",
        "C#",
        "Java",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "AI & Agentic Systems",
      icon: Brain,
      color: "purple",
      skills: [
        "LLMs",
        "MCP",
        "RAG",
        "Agentic AI",
        "CrewAI",
        "ChromaDB",
        "Pydantic",
        "FastAPI",
        "LangChain",
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "green",
      skills: [
        "React",
        "Node.js",
        "Express",
        "Streamlit",
        "Pandas",
        "Playwright",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "orange",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Kubernetes",
        "MongoDB",
        "MySQL",
        "Unity",
      ],
    },
  ];

  const certifications = [
    "Programming with JavaScript",
    "Become a Full-Stack Developer",
    "Containers with Docker and Kubernetes",
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
      purple:
        "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
      green:
        "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
      orange:
        "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A comprehensive toolkit for building modern, intelligent
              applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 ${getColorClasses(
                        category.color
                      )} rounded-lg flex items-center justify-center mr-4`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Certifications
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md flex items-center"
                  data-testid={`certification-${index}`}
                >
                  <Award className="text-yellow-500 mr-2 w-5 h-5" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
