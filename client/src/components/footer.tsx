import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/yashgarg4", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yashgarg04",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:yashgargg4@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-1">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              © 2025 Yash Garg. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                  data-testid={`social-${link.label.toLowerCase()}`}
                >
                  <a href={link.href} target="_blank" aria-label={link.label}>
                    <IconComponent className="h-5 w-5" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
