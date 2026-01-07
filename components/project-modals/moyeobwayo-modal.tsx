"use client";

import { X } from "lucide-react";

interface MoyeobwayoModalProps {
  onClose: () => void;
}

const project = {
  title: "모임 투표 서비스 - 모여봐요",
  tags: ["Next.js", "Responsive Web", "TailwindCSS", "SEO"],
  image: "/moyeobwayo.png",
  status: "completed" as const,
  teamSize: 5,
  techStack: ["Next.js", "Responsive Web", "TailwindCSS", "SEO"],
  duration: "4 개월",
  description: [
    "모여봐요는 팀 프로젝트나 모임에서 발생하는 의사결정을 빠르고 직관적으로 해결하기 위해 개발한 실시간 투표 서비스입니다. 투표 생성부터 참여, 결과 집계까지의 전 과정을 하나의 사용자 경험으로 설계했으며, 투표·선택지·참여자·응답 데이터를 명확히 분리해 도메인 구조를 구성했습니다.",
    "사용자가 선택을 완료하면 즉시 결과가 반영되도록 상태 흐름을 설계해 실시간성을 강화했고, 중복 투표 방지 및 투표 진행 상태에 따른 접근 제어 로직을 구현해 서비스 신뢰도를 높였습니다.",
    "프론트엔드에서는 선택 비율과 참여 인원을 즉시 시각화해 사용자 이해도를 높였으며, 서버에서는 집계 로직을 처리해 클라이언트의 책임을 최소화했습니다. 이를 통해 실시간 상태 동기화와 도메인 중심 설계의 중요성을 경험할 수 있었습니다.",
  ],
};

export function MoyeobwayoModal({ onClose }: MoyeobwayoModalProps) {
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

          {/* 여기에 모여봐요 프로젝트에 특화된 추가 내용을 넣으세요 */}
          {/* 예: 투표 흐름도, 실시간 상태 동기화 구조, UI/UX 디자인 등 */}
        </div>
      </div>
    </div>
  );
}
