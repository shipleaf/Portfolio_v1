"use client";

import { useEffect, useRef, useState } from "react";

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "테이블 오더 서비스 - DineQ",
      tags: ["Next.js", "Webview", "Zustand", "React Query"],
      image: "/dineq.png",
    },
    {
      title: "주차 관리 서비스 - HonorsParking",
      tags: ["Next.js", "React Native", "Firebase Cloud Messaging"],
      image: "/honorsparking.png",
    },
    {
      title: "모임 투표 서비스 - 모여봐요",
      tags: ["Next.js", "Responsive Web", "TailwindCSS", "SEO"],
      image: "/moyeobwayo.png",
    },
    {
      title: "취업 지원 플랫폼 - MyJobCalendar",
      tags: ["React.js", "Naver Cloud Platform", "Recoil"],
      image: "/myjobcalendar.png",
    },
  ];

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
    <section id="projects" className="py-32 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl font-bold uppercase tracking-wider text-muted-foreground mb-16 transition-all duration-700 text-center md:text-left ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-700 text-center md:text-left ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 bg-muted aspect-3/2">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
