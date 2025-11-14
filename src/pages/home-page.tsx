import { useNavigate } from "react-router-dom";
import PageProvider from "@/components/provider/page-provider";

export default function HomePage() {
  const navigate = useNavigate();

  const techStack = [
    { name: "React", version: "19.1.1", description: "UI 라이브러리" },
    { name: "TypeScript", version: "5.9.3", description: "타입 시스템" },
    { name: "Tailwind CSS", version: "4.1.14", description: "스타일링" },
    { name: "Zustand", version: "5.0.8", description: "상태 관리" },
    { name: "TanStack Query", version: "5.90.2", description: "서버 상태 관리" },
  ];

  const features = [
    {
      title: "빠른 개발 환경",
      description: "Vite 기반의 빠른 빌드와 HMR 지원",
      icon: "⚡",
    },
    {
      title: "타입 안정성",
      description: "TypeScript로 안전한 코드 작성",
      icon: "🛡️",
    },
    {
      title: "유틸리티 스타일링",
      description: "Tailwind CSS v4로 빠른 스타일링",
      icon: "🎨",
    },
    {
      title: "상태 관리",
      description: "Zustand로 간단한 전역 상태 관리",
      icon: "📦",
    },
    {
      title: "서버 상태",
      description: "TanStack Query로 효율적인 데이터 페칭",
      icon: "🔄",
    },
    {
      title: "컴포넌트 라이브러리",
      description: "Radix UI 기반의 접근성 있는 컴포넌트",
      icon: "🧩",
    },
  ];

  return (
    <PageProvider>
      <div>
        {/* Hero Section */}
        <div className="container mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              Study Project
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
              React + TypeScript + Tailwind CSS + Zustand + TanStack Query
            </p>
          </div>

          {/* Tech Stack Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
              기술 스택
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-soft dark:shadow-soft-dark"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{tech.name}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      v{tech.version}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
              주요 기능
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-soft dark:shadow-soft-dark"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft dark:shadow-soft-dark  mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">UI 컴포넌트 살펴보기</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Radix UI 기반 컴포넌트 예제
              </p>
              <button
                onClick={() => navigate("/ui")}
                className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all shadow-md hover:shadow-lg"
              >
                UI 컴포넌트 보기 →
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageProvider>
  );
}

