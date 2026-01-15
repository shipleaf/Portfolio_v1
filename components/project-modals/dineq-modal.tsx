"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface DineQModalProps {
  onClose: () => void;
}

const project = {
  title: "테이블 오더 서비스 - DineQ",
  tags: ["Next.js", "Webview", "Zustand", "React Query"],
  image: "/dineq.png",
  status: "live" as const,
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
    "고객과 점주를 연결하는 매장주문 관리 서비스로 , 고객은 웹기반 UI로 주문을 진행하고 점주는 전용 점주 UI 및 앱 을 통해 주문을 실시간으로 확인 및 처리할 수 있는 서비스 입니다 .",
  ],
  problemSolving: [
    "**1. QR 허위 주문에 대한 보안 대책**",
    "DineQ는 매장 테이블에 부착된 QR 코드를 인식해 접속하는 주문 서비스입니다. 설계 초기 단계에서, 이미 매장을 떠난 고객이 과거에 접속했던 URL을 통해 다시 접속하여 허위 주문을 생성할 수 있다는 보안 이슈가 발견되었습니다.",
    "이를 해결하기 위해 **QR 코드 인식 시마다 랜덤 값으로 구성된 토큰을 발급**하고, 해당 토큰을 **쿼리 파라미터로 포함한 URL로 사용자를 리다이렉트**하는 방식을 제안했습니다.",
    "또한 해당 토큰에는 **유효 시간**을 설정하여 일정 시간이 경과하면 **자동으로 만료**되도록 설계했고, 이를 통해 기존 URL 재사용을 통한 허위 주문을 차단할 수 있었습니다.",
    "",
    "**2. 주문 갱신 속도 향상**",
    "**기존 Polling 방식**의 한계로 인해 '주문 수신이 늦게 반영된다'는 사용자 피드백이 지속적으로 발생했습니다. 이에 따라 주문 갱신 구조를 **WebSocket 기반 실시간 통신 방식으로 전환**하기로 결정했습니다.",
    "구현 과정에서는 **STOMP 프로토콜을 사용해 메시지 전송 규칙을 정의**하고, 주문 상태 변경 이벤트를 서버에서 WebSocket 메시지로 전달하도록 설계했습니다. 프론트엔드에서는 해당 메시지를 수신한 후 **변경된 주문 상태에 대해서만 REST API를 재요청**하는 하이브리드 방식을 적용했습니다.",
    "그 결과, **최악의 경우 약 25배**, **평균적으로 약 12배 이상의 주문 반영 속도 개선**을 달성했으며, 불필요한 Polling 요청 제거로 **서버 요청 수를 약 90% 이상 감소**시키는 성과를 얻었습니다.",
  ],
  outcomes: [
    "DineQ는 매장 QR 주문 서비스로, 고객의 주문 편의성을 높이고 점주의 운영 효율을 개선하기 위해 개발되었습니다. 빠른 서비스 도입을 위해 **Next.js 기반의 React Native WebView** 방식을 채택하여 웹과 앱 환경을 동시에 지원하며 **개발 기간을 30% 이상 단축**했습니다.",
    '또한 "주문 수신이 늦게 들어온다"는 사용자 피드백을 기반으로 기존의 polling 구조를 **WebSocket 기반 실시간 통신**으로 전환했습니다. 이를 통해 **최악의 경우 약 25배, 평균 12배 이상의 응답 속도 개선**을 이루었으며, 서버로 전송되는 **불필요한 요청도 약 90% 이상** 줄이는 성과를 얻었습니다.',
    "그 결과 서비스 도입 이후 **월 최대 600회 이상의 트래픽을 안정적으로 처리**하고 있으며, 지금까지 **누적 2,000건 이상의 고객 주문을 정상적으로 처리**했습니다. 해당 프로젝트는 QR 주문 환경에서의 **실시간성**과 **개발 효율**을 동시에 향상시킨 경험으로 이어졌습니다.",
  ],
  images: ["/dineq.png", "/dineq-desc-2.png", "/picture.jpg"],
};

function renderBoldText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function DineQModal({ onClose }: DineQModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleNextImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === project.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images!.length - 1 : prev - 1
      );
    }
  };

  const handleImageClick = (imageUrl: string) => {
    setEnlargedImage(imageUrl);
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
    <>
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
            {/* 메인 이미지 캐러셀 */}
            {project.images && project.images.length > 0 ? (
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg bg-muted aspect-3/2">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain cursor-pointer transition-opacity duration-300"
                    onClick={() =>
                      handleImageClick(project.images![currentImageIndex])
                    }
                  />
                  {project.images.length > 1 && (
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
                        {project.images.map((_, index) => (
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
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-lg bg-muted aspect-3/2">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

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
              <h3 className="text-lg uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                프로젝트 설명
              </h3>
              <div className="space-y-4">
                {Array.isArray(project.description) ? (
                  project.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base leading-relaxed text-muted-foreground"
                    >
                      {renderBoldText(paragraph)}
                    </p>
                  ))
                ) : (
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                )}
              </div>
            </div>

            {project.problemSolving && (
              <div>
                <h3 className="text-lg uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                  문제 해결
                </h3>
                <div className="space-y-4">
                  {Array.isArray(project.problemSolving) ? (
                    project.problemSolving.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-base leading-relaxed text-muted-foreground whitespace-pre-line"
                      >
                        {renderBoldText(paragraph)}
                      </p>
                    ))
                  ) : (
                    <p className="text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                      {renderBoldText(project.problemSolving)}
                    </p>
                  )}
                </div>
              </div>
            )}

            {project.outcomes && (
              <div>
                <h3 className="text-lg uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                  성과
                </h3>
                <div className="space-y-4">
                  {project.outcomes.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base leading-relaxed text-muted-foreground"
                    >
                      {renderBoldText(paragraph)}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 확대된 이미지 모달 */}
      {enlargedImage && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            onClick={() => setEnlargedImage(null)}
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
