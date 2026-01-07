"use client";

import { X } from "lucide-react";

interface HonorsParkingModalProps {
  onClose: () => void;
}

const project = {
  title: "주차 관리 서비스 - HonorsParking",
  tags: ["Next.js", "React Native", "Firebase Cloud Messaging"],
  image: "/honorsparking.png",
  status: "completed" as const,
  teamSize: 6,
  techStack: ["React Native", "TypeScript", "Firebase", "WebSocket"],
  duration: "8 개월",
  description: [
    "HonorsParking은 실제 주차장의 이용 흐름을 그대로 반영하여 주차 조회, 관리, 정산 전 과정을 설계하고 구현한 스마트 주차 관리 서비스입니다. 단순한 CRUD 구현이 아닌, 입차부터 출차, 요금 정산까지의 실사용 시나리오를 기준으로 도메인을 설계하였으며, 차량·주차 기록·요금 정책을 분리하여 데이터 구조를 구성했습니다.",
    "차량 번호 기반 조회 방식을 도입해 사용자 진입 장벽을 낮추고, 관리자 페이지에서는 실시간 주차 현황과 이용 이력을 한눈에 확인할 수 있도록 구성했습니다. 프론트엔드에서는 주차 상태와 선택된 차량 정보를 상태로 관리해 UI와 데이터의 일관성을 유지했고, 백엔드에서는 시간 기반 요금 계산과 정산 로직을 서버 중심으로 처리하여 책임을 명확히 분리했습니다.",
    "이를 통해 실제 서비스 수준의 흐름을 고려한 도메인 설계와 프론트엔드–백엔드 협업 구조에 대한 이해를 높일 수 있었습니다.",
  ],
};

export function HonorsParkingModal({ onClose }: HonorsParkingModalProps) {
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

          {/* 여기에 HonorsParking 프로젝트에 특화된 추가 내용을 넣으세요 */}
          {/* 예: 주차장 흐름도, 도메인 설계 다이어그램, 데이터 구조 설명 등 */}
        </div>
      </div>
    </div>
  );
}
