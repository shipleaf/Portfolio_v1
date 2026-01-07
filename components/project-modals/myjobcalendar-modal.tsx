"use client";

import { X } from "lucide-react";

interface MyJobCalendarModalProps {
  onClose: () => void;
}

const project = {
  title: "취업 지원 플랫폼 - MyJobCalendar",
  tags: ["React.js", "Naver Cloud Platform", "Recoil"],
  image: "/myjobcalendar.png",
  status: "completed" as const,
  teamSize: 5,
  techStack: ["React.js", "Recoil", "Naver Cloud Platform"],
  duration: "2 개월",
  description: [
    "MyJobCalendar는 세종시 지역에 흩어져 있는 취업 정보를 일정 중심으로 통합 제공하기 위해 개발한 취업 정보 플랫폼입니다. 채용 공고와 기관 정보를 단순히 나열하는 방식이 아닌, 사용자의 취업 준비 흐름에 맞춰 캘린더 기반 UI로 정보를 재구성했습니다.",
    "채용 공고, 기관, 일정 데이터를 분리해 설계하고 날짜 기반 조회를 고려한 데이터 구조를 구성했으며, 선택한 날짜에 따라 필요한 정보만 동적으로 로딩되도록 상태 관리 흐름을 설계했습니다.",
    "프론트엔드에서는 일정과 공고 상태를 일관되게 관리해 UX를 개선했고, 백엔드와의 API 연동 시 프론트에서 바로 활용 가능한 형태로 데이터를 가공해 전달받도록 구조를 정리했습니다. 이를 통해 지역 특화 서비스에서의 도메인 이해와 일정 기반 데이터 처리 경험을 쌓을 수 있었습니다.",
  ],
};

export function MyJobCalendarModal({ onClose }: MyJobCalendarModalProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getStatusConfig = (status: string) => {
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
      default:
        return {
          label: "Completed",
          color:
            "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20",
        };
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-background border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        style={{
          fontFamily:
            "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
        }}
      >
        <div className="sticky top-0 z-10 bg-background border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* 메인 이미지 */}
          <div className="relative overflow-hidden rounded-lg bg-muted aspect-3/2">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* 프로젝트 정보 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                팀 규모
              </h3>
              <p className="text-md font-semibold">{project.teamSize} 명</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                개발 기간
              </h3>
              <p className="text-md font-semibold">{project.duration}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
              프로젝트 상태
            </h3>
            <span
              className={`inline-block text-xs px-3 py-1 rounded-full border ${
                getStatusConfig(project.status).color
              } font-medium`}
            >
              {getStatusConfig(project.status).label}
            </span>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
              기술 스택
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1.5 bg-muted text-foreground rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 프로젝트 설명 */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
              프로젝트 설명
            </h3>
            <div className="space-y-4">
              {Array.isArray(project.description) ? (
                project.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              )}
            </div>
          </div>

          {/* 여기에 MyJobCalendar 프로젝트에 특화된 추가 내용을 넣으세요 */}
          {/* 예: 캘린더 UI 스크린샷, 데이터 구조, API 연동 구조 등 */}
        </div>
      </div>
    </div>
  );
}
