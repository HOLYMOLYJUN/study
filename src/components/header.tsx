import { useLocation, useNavigate } from "react-router-dom";
import { useDefaultStore } from "@/store/default-store";
import { useEffect } from "react";
import CustomSwitch from "@/components/ui/switch";

type THeaderRouteData = {
  name: string;
  path: string;
};

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useDefaultStore();

  // 다크모드 적용
  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const headerRouteData: THeaderRouteData[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "UI",
      path: "/ui",
    },
  ];

  return (
    <div className="flex h-[var(--header-height)] w-full items-center justify-between border-b border-gray-300 bg-white px-8 dark:bg-gray-900 dark:text-white dark:border-gray-700">
      {/* 로고 */}
      <div onClick={() => navigate("/")} className="cursor-pointer text-2xl font-bold">
        Study Project
      </div>

      {/* 네비게이션 메뉴 */}
      <div className="flex items-center gap-6">
        {headerRouteData.map((item: THeaderRouteData, index: number) => {
          const isActive = location.pathname === item.path;

          return (
            <div
              onClick={() => navigate(item.path)}
              className={`cursor-pointer font-semibold transition-colors ${
                isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
              key={index}
            >
              {item.name}
            </div>
          );
        })}

        {/* 다크모드 토글 */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {darkMode === "dark" ? "Light" : "Dark"}
          </span>
          <CustomSwitch
            checked={darkMode === "dark"}
            onCheckedChange={(checked) => setDarkMode(checked ? "dark" : "light")}
            className="w-12 h-6 rounded-full bg-gray-300 data-[state=checked]:bg-red-500 dark:bg-gray-600"
            thumbClassName="block w-5 h-5 rounded-full bg-white transition-transform duration-200 translate-x-0.5 data-[state=checked]:translate-x-[25px]"
          />
        </div>
      </div>
    </div>
  );
}

