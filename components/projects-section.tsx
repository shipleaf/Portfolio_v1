"use client";

import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
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
    description: string | string[];
    images?: string[];
  }

  const projects: Project[] = [
    {
      title: "테이블 오더 서비스 - DineQ",
      tags: ["Next.js", "Webview", "Zustand", "React Query"],
      image: "/dineq.png",
      status: "live",
      teamSize: 4,
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      duration: "6 개월",
      description: [
        "DineQ는 매장 QR 주문 서비스로, 고객의 주문 편의성을 높이고 점주의 운영 효율을 개선하기 위해 개발되었습니다. 빠른 서비스 도입을 위해 Next.js 기반의 React Native WebView 방식을 채택하여 웹과 앱 환경을 동시에 지원하며 개발 기간을 크게 단축했습니다.",
        '또한 "주문 수신이 늦게 들어온다"는 사용자 피드백을 기반으로 기존의 polling 구조를 WebSocket 기반 실시간 통신으로 전환했습니다. 이를 통해 최악의 경우 약 25배, 평균 12배 이상 빠른 응답 속도 개선을 이루었으며, 서버로 전송되는 불필요한 요청도 약 90% 감소시키는 성과를 얻었습니다.',
        "그 결과 서비스 도입 이후 현재까지 안정적으로 운영되고 있으며, 누적 2000건 이상의 고객 주문을 처리하며 점주와 고객 모두에게 긍정적인 반응을 얻고 있습니다. QR 주문 환경에서의 실시간성·안정성·개발 효율을 동시에 향상시킨 프로젝트였습니다.",
      ],
      images: ["/dineq.png", "/dineq-desc-2.png"],
    },
    {
      title: "주차 관리 서비스 - HonorsParking",
      tags: ["Next.js", "React Native", "Firebase Cloud Messaging"],
      image: "/honorsparking.png",
      status: "completed",
      teamSize: 6,
      techStack: ["React Native", "TypeScript", "Firebase", "WebSocket"],
      duration: "8 개월",
      description: [
        "HonorsParking은 실제 주차장의 이용 흐름을 그대로 반영하여 주차 조회, 관리, 정산 전 과정을 설계하고 구현한 스마트 주차 관리 서비스입니다. 단순한 CRUD 구현이 아닌, 입차부터 출차, 요금 정산까지의 실사용 시나리오를 기준으로 도메인을 설계하였으며, 차량·주차 기록·요금 정책을 분리하여 데이터 구조를 구성했습니다.",
        "차량 번호 기반 조회 방식을 도입해 사용자 진입 장벽을 낮추고, 관리자 페이지에서는 실시간 주차 현황과 이용 이력을 한눈에 확인할 수 있도록 구성했습니다. 프론트엔드에서는 주차 상태와 선택된 차량 정보를 상태로 관리해 UI와 데이터의 일관성을 유지했고, 백엔드에서는 시간 기반 요금 계산과 정산 로직을 서버 중심으로 처리하여 책임을 명확히 분리했습니다.",
        "이를 통해 실제 서비스 수준의 흐름을 고려한 도메인 설계와 프론트엔드–백엔드 협업 구조에 대한 이해를 높일 수 있었습니다.",
      ],
    },
    {
      title: "모임 투표 서비스 - 모여봐요",
      tags: ["Next.js", "Responsive Web", "TailwindCSS", "SEO"],
      image: "/moyeobwayo.png",
      status: "completed",
      teamSize: 5,
      techStack: ["Next.js", "Responsive Web", "TailwindCSS", "SEO"],
      duration: "4 개월",
      description: [
        "모여봐요는 팀 프로젝트나 모임에서 발생하는 의사결정을 빠르고 직관적으로 해결하기 위해 개발한 실시간 투표 서비스입니다. 투표 생성부터 참여, 결과 집계까지의 전 과정을 하나의 사용자 경험으로 설계했으며, 투표·선택지·참여자·응답 데이터를 명확히 분리해 도메인 구조를 구성했습니다.",
        "사용자가 선택을 완료하면 즉시 결과가 반영되도록 상태 흐름을 설계해 실시간성을 강화했고, 중복 투표 방지 및 투표 진행 상태에 따른 접근 제어 로직을 구현해 서비스 신뢰도를 높였습니다.",
        "프론트엔드에서는 선택 비율과 참여 인원을 즉시 시각화해 사용자 이해도를 높였으며, 서버에서는 집계 로직을 처리해 클라이언트의 책임을 최소화했습니다. 이를 통해 실시간 상태 동기화와 도메인 중심 설계의 중요성을 경험할 수 있었습니다.",
      ],
    },
    {
      title: "취업 지원 플랫폼 - MyJobCalendar",
      tags: ["React.js", "Naver Cloud Platform", "Recoil"],
      image: "/myjobcalendar.png",
      status: "completed",
      teamSize: 5,
      techStack: ["React.js", "Recoil", "Naver Cloud Platform"],
      duration: "2 개월",
      description: [
        "MyJobCalendar는 세종시 지역에 흩어져 있는 취업 정보를 일정 중심으로 통합 제공하기 위해 개발한 취업 정보 플랫폼입니다. 채용 공고와 기관 정보를 단순히 나열하는 방식이 아닌, 사용자의 취업 준비 흐름에 맞춰 캘린더 기반 UI로 정보를 재구성했습니다.",
        "채용 공고, 기관, 일정 데이터를 분리해 설계하고 날짜 기반 조회를 고려한 데이터 구조를 구성했으며, 선택한 날짜에 따라 필요한 정보만 동적으로 로딩되도록 상태 관리 흐름을 설계했습니다.",
        "프론트엔드에서는 일정과 공고 상태를 일관되게 관리해 UX를 개선했고, 백엔드와의 API 연동 시 프론트에서 바로 활용 가능한 형태로 데이터를 가공해 전달받도록 구조를 정리했습니다. 이를 통해 지역 특화 서비스에서의 도메인 이해와 일정 기반 데이터 처리 경험을 쌓을 수 있었습니다.",
      ],
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
    setCurrentImageIndex(0);
    setEnlargedImage(null);
  };

  const handleNextImage = () => {
    if (selectedProject?.images && selectedProject.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject?.images && selectedProject.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images!.length - 1 : prev - 1
      );
    }
  };

  const handleImageClick = (imageUrl: string) => {
    setEnlargedImage(imageUrl);
  };

  const handleEnlargedImageClose = () => {
    setEnlargedImage(null);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  useEffect(() => {
    if (selectedProject) {
      setCurrentImageIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    if (enlargedImage) {
      document.body.style.overflow = "hidden";
    } else {
      if (selectedProject) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }

    return () => {
      if (!selectedProject && !enlargedImage) {
        document.body.style.overflow = "";
      }
    };
  }, [enlargedImage, selectedProject]);

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
          <div
            className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            style={{
              fontFamily:
                "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
            }}
          >
            <div className="sticky top-0 z-10 bg-background border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
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
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                    팀 규모
                  </h3>
                  <p className="text-lg">{selectedProject.teamSize} 명</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                    개발 기간
                  </h3>
                  <p className="text-lg">{selectedProject.duration}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                  프로젝트 상태
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
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                  기술 스택
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

              {selectedProject.images && selectedProject.images.length > 0 && (
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                    프로젝트 이미지
                  </h3>
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-lg bg-muted aspect-3/2">
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${
                          currentImageIndex + 1
                        }`}
                        className="w-full h-full object-contain cursor-pointer transition-opacity duration-300"
                        onClick={() =>
                          handleImageClick(
                            selectedProject.images![currentImageIndex]
                          )
                        }
                      />
                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePrevImage();
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNextImage();
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
                            aria-label="Next image"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                            {selectedProject.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex(index);
                                }}
                                className={`h-1.5 rounded-full transition-all ${
                                  index === currentImageIndex
                                    ? "w-6 bg-white"
                                    : "w-1.5 bg-white/50 hover:bg-white/75"
                                }`}
                                aria-label={`Go to image ${index + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    <div className="mt-2 text-center text-sm text-muted-foreground">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                  프로젝트 설명
                </h3>
                <div className="space-y-4">
                  {Array.isArray(selectedProject.description) ? (
                    selectedProject.description.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-base leading-relaxed text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {selectedProject.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {enlargedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={handleEnlargedImageClose}
        >
          <button
            onClick={handleEnlargedImageClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors z-10"
            aria-label="Close enlarged image"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={enlargedImage}
            alt="Enlarged project image"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
