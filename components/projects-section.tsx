"use client"

import { useEffect, useRef, useState } from "react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "E-Commerce Platform",
      tags: ["Web Design", "Development", "Branding"],
      image: "/modern-ecommerce-website.png",
    },
    {
      title: "Mobile Banking App",
      tags: ["UI/UX", "Mobile", "Fintech"],
      image: "/mobile-banking-app.png",
    },
    {
      title: "SaaS Dashboard",
      tags: ["Web Design", "Data Viz", "SaaS"],
      image: "/modern-dashboard-analytics.jpg",
    },
    {
      title: "Brand Identity",
      tags: ["Branding", "Logo Design", "Print"],
      image: "/brand-identity-design-mockup.jpg",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-sm uppercase tracking-wider text-muted-foreground mb-16 transition-all duration-700 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-700 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 bg-muted aspect-[3/2]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
