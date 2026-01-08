"use client";

import { useEffect, useRef, useState } from "react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const certifications = [
    { name: "정보처리기사", issuer: "한국산업인력공단", date: "2025.12" },
    { name: "SQLD", issuer: "한국데이터산업진흥원", date: "2024.11" },
  ];

  const skills = [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    { name: "Recoil", logo: "https://recoiljs.org/img/logo.svg" },
    {
      name: "Zustand",
      logo: "https://raw.githubusercontent.com/pmndrs/zustand/main/docs/bear.jpg",
    },
    {
      name: "TanStack Query",
      logo: "https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg",
    },
    {
      name: "Vue.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    { name: "Pinia", logo: "https://pinia.vuejs.org/logo.svg" },
    {
      name: "Vercel",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    },
    {
      name: "Naver Cloud",
      logo: "https://velog.velcdn.com/images/jae9380/post/6f8f5de4-bf4f-4dfe-9852-360e447dcb85/image.png",
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "React Native",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "SASS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      name: "Styled-Components",
      logo: "https://www.styled-components.com/atom.png",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "WebSocket",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
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

  const handleMouseMove = (e: React.MouseEvent, skillName: string) => {
    setHoveredSkill(skillName);
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section id="about" className="py-32 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl font-bold uppercase tracking-wider text-muted-foreground mb-16 transition-all duration-700 text-center md:text-left ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          About Me
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="max-w-2xl mx-auto md:mx-0">
            <img src="/photo.png" alt="" />
          </div>
          <div
            className={`space-y-6 lg:col-span-2 transition-all duration-700 delay-100 text-center md:text-left ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              사용자 경험과 코드 품질을 함께 고민하는 프론트엔드 개발자입니다.
              React·Next.js·Vue.js등 다양한 프레임워크를 기반으로 웹 서비스를
              개발하며, 구조 개선과 성능 최적화를 통해 실제 사용자 경험을
              향상시키는 데 보람을 느낍니다.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              프론트엔드는 사용자와 서비스가 가장 먼저 만나는 영역입니다. 그래서
              저는 "왜 이 UI여야 하는가", "이 흐름이 사용자에게 자연스러운가"를
              끊임없이 질문하며, 사용자가 서비스를 처음 접하는 순간을 설계한다는
              책임감을 가지고 더 나은 경험을 만드는 개발자로 성장하고자 합니다.
            </p>
          </div>

          <div
            className={`md:col-span-2 lg:col-span-1 transition-all duration-700 delay-200 text-center md:text-left ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative w-14 h-14 bg-card dark:bg-white rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg border border-border cursor-pointer"
                  onMouseMove={(e) => handleMouseMove(e, skill.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={skill.logo || "/placeholder.svg"}
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-3 md:flex-col md:gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-sm text-muted-foreground">
                    <span className="font-medium">{cert.name}</span>
                    {cert.issuer && (
                      <span className="text-muted-foreground/70">
                        {" "}
                        · {cert.issuer}
                      </span>
                    )}
                    {cert.date && (
                      <span className="text-muted-foreground/70">
                        {" "}
                        · {cert.date}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {hoveredSkill && (
        <div
          className="fixed pointer-events-none z-50 px-3 py-1.5 bg-foreground text-background text-xs rounded-md shadow-lg"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y + 20}px`,
            transform: "translateX(-50%)",
          }}
        >
          {hoveredSkill}
        </div>
      )}
    </section>
  );
}
