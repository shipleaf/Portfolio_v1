"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  type ProjectStatus = "live" | "development" | "completed";

  interface Project {
    title: string;
    tags: string[];
    image: string;
    status: ProjectStatus;
    teamSize: number;
    techStack: string[];
    duration: string;
    description: string;
  }

  const projects: Project[] = [
    {
      title: "테이블 오더 서비스 - DineQ",
      tags: ["Next.js", "Webview", "Zustand", "React Query"],
      image: "/dineq.png",
      status: "live",
      teamSize: 4,
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      duration: "6 months",
      description:
        "A modern e-commerce platform with a focus on user experience and conversion optimization. Features include real-time inventory management, personalized recommendations, and seamless checkout flow.A modern e-commerce platform with a focus on user experience and conversion optimization. Features include real-time inventory management, personalized recommendations, and seamless checkout flow.A modern e-commerce platform with a focus on user experience and conversion optimization. Features include real-time inventory management, personalized recommendations, and seamless checkout flow.A modern e-commerce platform with a focus on user experience and conversion optimization. Features include real-time inventory management, personalized recommendations, and seamless checkout flow.",
    },
    {
      title: "주차 관리 서비스 - HonorsParking",
      tags: ["Next.js", "React Native", "Firebase Cloud Messaging"],
      image: "/honorsparking.png",
      status: "completed",
      teamSize: 6,
      techStack: ["React Native", "TypeScript", "Firebase", "WebSocket"],
      duration: "8 months",
      description:
        "A secure and intuitive mobile banking application that allows users to manage their finances on the go. Includes features like instant transfers, bill payments, and financial insights.",
    },
    {
      title: "모임 투표 서비스 - 모여봐요",
      tags: ["Next.js", "Responsive Web", "TailwindCSS", "SEO"],
      image: "/moyeobwayo.png",
      status: "completed",
      teamSize: 3,
      techStack: ["Vue.js", "Pinia", "TanStack Query", "SASS"],
      duration: "4 months",
      description:
        "An analytics dashboard for SaaS businesses to track key metrics and make data-driven decisions. Features interactive charts, real-time updates, and customizable widgets.",
    },
    {
      title: "취업 지원 플랫폼 - MyJobCalendar",
      tags: ["React.js", "Naver Cloud Platform", "Recoil"],
      image: "/myjobcalendar.png",
      status: "completed",
      teamSize: 2,
      techStack: ["Adobe Illustrator", "Figma", "After Effects"],
      duration: "2 months",
      description:
        "Complete brand identity design including logo, color palette, typography, and brand guidelines. Created a cohesive visual language that represents the brand's values and resonates with the target audience.",
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

  const getStatusConfig = (status: ProjectStatus) => {
    switch (status) {
      case "live":
        return {
          label: "Live",
          color:
            "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
        };
      case "development":
        return {
          label: "In Development",
          color:
            "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
        };
      case "completed":
        return {
          label: "Completed",
          color:
            "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20",
        };
    }
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <>
      <section id="projects" className="py-32 px-6 lg:px-8" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold uppercase tracking-wider text-muted-foreground mb-16 transition-all duration-700 text-center md:text-left ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const statusConfig = getStatusConfig(project.status);
              return (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-700 text-center md:text-left ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 bg-muted aspect-3/2">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span
                      className={`text-xs px-3 py-1 rounded-full border ${statusConfig.color} font-medium`}
                    >
                      {statusConfig.label}
                    </span>
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
              );
            })}
          </div>
        </div>
      </section>
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                {selectedProject.title}
              </h2>
              <button
                onClick={handleModalClose}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="relative overflow-hidden rounded-lg bg-muted aspect-3/2">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Team Size
                  </h3>
                  <p className="text-lg">{selectedProject.teamSize} members</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Duration
                  </h3>
                  <p className="text-lg">{selectedProject.duration}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Status
                </h3>
                <span
                  className={`inline-block text-xs px-3 py-1 rounded-full border ${
                    getStatusConfig(selectedProject.status).color
                  } font-medium`}
                >
                  {getStatusConfig(selectedProject.status).label}
                </span>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1.5 bg-muted text-foreground rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                  Project Description
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
