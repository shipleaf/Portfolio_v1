"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConnectSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="connect" className="py-24 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <div
            className={`space-y-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:hello@example.com">
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </Button>
          </div>

          <div
            className={`flex items-center justify-center gap-4 pt-8 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="https://github.com/shipleaf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-muted rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            {/* <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-muted rounded-lg transition-colors"
              aria-label="Dribbble"
            >
              <Dribbble className="w-5 h-5" />
            </a> */}
            <a
              href="https://www.linkedin.com/in/%EC%84%A0%EC%97%BD-undefined-432659337/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-muted rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
