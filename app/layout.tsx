import type { Metadata } from "next";
import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "김선엽 | 프론트엔드 포트폴리오",
  description: "프론트엔드 개발자 김선엽의 포트폴리오입니다.",
  applicationName: "김선엽 포트폴리오",
  authors: [{ name: "김선엽" }],
  generator: "v0.app",
  metadataBase: new URL("https://shipleaf-portfolio.vercel.app/"),

  // 검색결과에서 사이트명처럼 뜨는 부분
  keywords: [
    "김선엽",
    "프론트엔드 개발자",
    "프론트엔드 포트폴리오",
    "React",
    "Next.js",
    "TypeScript",
  ],
  creator: "김선엽",
  publisher: "김선엽",

  // open graph (카톡/슬랙 공유 썸네일 등)
  openGraph: {
    title: "김선엽 | 프론트엔드 포트폴리오",
    description:
      "프론트엔드 개발자 김선엽의 프로젝트와 기술 스택을 확인해보세요.",
    url: "https://shipleaf-portfolio.vercel.app/",
    siteName: "김선엽 포트폴리오",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png", // public/og-image.png 준비해두면 좋음
        width: 1200,
        height: 630,
        alt: "김선엽 포트폴리오 미리보기",
      },
    ],
  },

  // 트위터 카드
  twitter: {
    card: "summary_large_image",
    title: "김선엽 | 프론트엔드 포트폴리오",
    description:
      "Next.js, React, TypeScript 기반 프론트엔드 개발자 김선엽의 포트폴리오.",
    images: ["/og-image.png"],
  },

  // 파비콘/아이콘
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  // 언어/지역
  alternates: {
    canonical: "https://shipleaf-portfolio.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
