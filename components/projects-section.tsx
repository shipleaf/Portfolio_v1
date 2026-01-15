"use client";

import { useEffect, useRef, useState } from "react";
import { DineQModal } from "./project-modals/dineq-modal";
import { HonorsParkingModal } from "./project-modals/honorsparking-modal";
import { MoyeobwayoModal } from "./project-modals/moyeobwayo-modal";
import { MyJobCalendarModal } from "./project-modals/myjobcalendar-modal";

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
    description: string | string[];
    images?: string[];
    problemSolving?: string | string[];
  }

  const projects: Project[] = [
    {
      title: "테이블 오더 서비스 - DineQ",
      tags: ["Next.js", "Webview", "Zustand", "React Query"],
      image: "/dineq.png",
      status: "live",
      teamSize: 3,
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
        "ReactNative WebView",
      ],
      duration: "1 개월",
      description: [
        "DineQ는 매장 QR 주문 서비스로, 고객의 주문 편의성을 높이고 점주의 운영 효율을 개선하기 위해 개발되었습니다. 빠른 서비스 도입을 위해 Next.js 기반의 React Native WebView 방식을 채택하여 웹과 앱 환경을 동시에 지원하며 개발 기간을 크게 단축했습니다.",
        '또한 "주문 수신이 늦게 들어온다"는 사용자 피드백을 기반으로 기존의 polling 구조를 WebSocket 기반 실시간 통신으로 전환했습니다. 이를 통해 최악의 경우 약 25배, 평균 12배 이상 빠른 응답 속도 개선을 이루었으며, 서버로 전송되는 불필요한 요청도 약 90% 감소시키는 성과를 얻었습니다.',
        "그 결과 서비스 도입 이후 현재까지 안정적으로 운영되고 있으며, 누적 2000건 이상의 고객 주문을 처리하며 점주와 고객 모두에게 긍정적인 반응을 얻고 있습니다. QR 주문 환경에서의 실시간성·안정성·개발 효율을 동시에 향상시킨 프로젝트였습니다.",
      ],
      problemSolving: [
        "**1. QR 허위 주문에 대한 보안 대책**",
        "DineQ는 매장 테이블에 부착된 QR 코드를 인식해 접속하는 주문 서비스입니다. 설계 초기 단계에서, 이미 매장을 떠난 고객이 과거에 접속했던 URL을 통해 다시 접속하여 허위 주문을 생성할 수 있다는 보안 이슈가 발견되었습니다.",
        "이를 해결하기 위해 **QR 코드 인식 시마다 랜덤 값으로 구성된 토큰을 발급**하고, 해당 토큰을 **쿼리 파라미터로 포함한 URL로 사용자를 리다이렉트**하는 방식을 제안했습니다.",
        "또한 해당 토큰에는 **유효 시간(Time To Live)**을 설정하여 일정 시간이 경과하면 자동으로 만료되도록 설계했고, 이를 통해 **기존 URL 재사용을 통한 허위 주문을 차단**할 수 있었습니다.",

        "**2. 주문 갱신 속도 향상**",
        "기존 Polling 방식의 한계로 인해 ‘주문 수신이 늦게 반영된다’는 사용자 피드백이 지속적으로 발생했습니다. 이에 따라 주문 갱신 구조를 **WebSocket 기반 실시간 통신 방식으로 전환**하기로 결정했습니다.",
        "구현 과정에서는 **STOMP 프로토콜을 사용해 메시지 전송 규칙을 정의**하고, 주문 상태 변경 이벤트를 서버에서 WebSocket 메시지로 전달하도록 설계했습니다. 프론트엔드에서는 해당 메시지를 수신한 후 **변경된 주문 상태에 대해서만 REST API를 재요청**하는 하이브리드 방식을 적용했습니다.",
        "그 결과, **최악의 경우 약 25배**, **평균적으로 약 12배 이상의 주문 반영 속도 개선**을 달성했으며, 불필요한 Polling 요청 제거로 **서버 요청 수를 약 90% 이상 감소**시키는 성과를 얻었습니다.",
      ],
      images: ["/dineq.png", "/dineq-desc-2.png", "/picture.jpg"],
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

  const renderModal = () => {
    if (!selectedProject) return null;

    const projectTitle = selectedProject.title;

    if (projectTitle.includes("DineQ")) {
      return <DineQModal onClose={handleModalClose} />;
    } else if (projectTitle.includes("HonorsParking")) {
      return <HonorsParkingModal onClose={handleModalClose} />;
    } else if (projectTitle.includes("모여봐요")) {
      return <MoyeobwayoModal onClose={handleModalClose} />;
    } else if (projectTitle.includes("MyJobCalendar")) {
      return <MyJobCalendarModal onClose={handleModalClose} />;
    }

    return null;
  };

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
      {renderModal()}
    </>
  );
}
