"use client";

import { useEffect, useRef, useState } from "react";

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      title: "SSAFY 14th(교육)",
      company: "삼성청년SW아카데미",
      period: "2025.07 ~ Present",
    },
    {
      title: "멋쟁이사자처럼 12th",
      company: "멋쟁이사자처럼",
      period: "2024.03 - 2025.12",
    },
    {
      title: "언더독 레볼루션 운영진(교내 동아리)",
      company: "언더독 레볼루션",
      period: "2024.03 - 2025.12",
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
    <section
      id="experience"
      className="py-32 px-6 lg:px-8 bg-muted"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl font-bold uppercase tracking-wider text-muted-foreground mb-16 transition-all duration-700 text-center md:text-left ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          My Experience
        </h2>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-border to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-12 text-left transition-all duration-700 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="absolute left-0 top-3 w-8 h-0.5 bg-foreground/30 group-hover:w-10 group-hover:bg-foreground transition-all duration-300" />

                <div>
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-muted-foreground">
                    {exp.company} | {exp.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
