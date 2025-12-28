"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "connect", label: "Connect" },
]

export function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const sectionElements = sections.map(({ id }) => ({
      id,
      element: document.getElementById(id),
    })).filter(({ element }) => element !== null)

    const updateActiveSection = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const viewportCenter = scrollY + viewportHeight / 2

      // 스크롤이 맨 위에 있거나 hero 섹션이 보일 때 hero를 활성화
      const heroElement = document.getElementById("hero")
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect()
        const heroBottom = scrollY + heroRect.bottom
        
        // 스크롤이 hero 섹션 내부에 있거나 매우 위에 있을 때
        if (scrollY < heroBottom - viewportHeight * 0.3) {
          setActiveSection("hero")
          return
        }
      }

      let closestSection = "hero"
      let minDistance = Infinity

      sectionElements.forEach(({ id, element }) => {
        if (!element || id === "hero") return

        const rect = element.getBoundingClientRect()
        const elementTop = window.scrollY + rect.top
        const elementCenter = elementTop + rect.height / 2

        // 뷰포트 중앙과 섹션 중앙 사이의 거리
        const distance = Math.abs(viewportCenter - elementCenter)

        // 뷰포트 중앙이 섹션 범위 내에 있으면 우선순위를 높임
        const isInRange = viewportCenter >= elementTop && viewportCenter <= elementTop + rect.height
        const adjustedDistance = isInRange ? distance * 0.5 : distance

        if (adjustedDistance < minDistance) {
          minDistance = adjustedDistance
          closestSection = id
        }
      })

      setActiveSection(closestSection)
    }

    // 초기 설정
    updateActiveSection()

    // 스크롤 이벤트 리스너
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <nav className="flex flex-col gap-6">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group relative flex items-center"
            aria-label={`Go to ${label}`}
          >
            <div
              className={`w-0.5 transition-all duration-300 rounded-full ${
                activeSection === id
                  ? "h-12 bg-foreground"
                  : "h-8 bg-foreground/30 group-hover:h-10 group-hover:bg-foreground/50"
              }`}
            />
          </button>
        ))}
      </nav>
    </div>
  )
}
