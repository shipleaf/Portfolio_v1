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
              Contact Me!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              더 나은 개발자가 되기 위해 꾸준히 배우고 있습니다. 제 포트폴리오가
              마음에 드셨다면, 연락 주시면 감사한 마음으로 응답드리겠습니다.
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
              <a href="mailto:sunyeop12@gmail.com">
                <Mail className="w-4 h-4" />
                Contact to Email
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
            <a
              href="https://velog.io/@shipleaf/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-muted rounded-lg transition-colors"
              aria-label="Dribbble"
            >
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 192 192"
                enableBackground="new 0 0 28 28"
                xmlSpace="preserve"
                width="20"
              >
                <path
                  id="Website"
                  fill="#000000"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z"
                />
              </svg>
            </a>
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
