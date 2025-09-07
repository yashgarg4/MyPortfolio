import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function EducationSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0 flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-1">
                    Bachelor of Technology
                  </h3>
                  <h4 className="text-lg font-medium">
                    Information Technology
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Maharaja Surajmal Institute of Technology, Delhi
                  </p>
                  <div className="mt-2">
                    <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-semibold">
                      CGPA: 9.06
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="text-primary font-semibold text-lg">
                August 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
