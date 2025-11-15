import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CustomDropdownMenu, { DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu";

export default function DropdownMenuExample() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white">Dropdown Menu</h2>
      
      <div className="flex flex-wrap items-center gap-4">
        {/* 기본 Dropdown Menu */}
        <CustomDropdownMenu
          trigger={
            <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              기본 메뉴
            </button>
          }
          contentClassName="min-w-[180px]"
        >
          <DropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            프로필
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            설정
          </DropdownMenuItem>
          <DropdownMenuSeparator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
          <DropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            로그아웃
          </DropdownMenuItem>
        </CustomDropdownMenu>

        {/* 제어 가능한 Dropdown Menu */}
        <CustomDropdownMenu
          open={dropdownOpen}
          onOpenChange={setDropdownOpen}
          trigger={
            <button className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 flex items-center gap-2">
              제어 가능한 메뉴 {dropdownOpen ? <ChevronUp/> : <ChevronDown/>}
            </button>
          }
          contentClassName="min-w-[200px]"
        >
          <DropdownMenuLabel className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
            상태: {dropdownOpen ? "열림" : "닫힘"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
          <DropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            항목 1
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            항목 2
          </DropdownMenuItem>
        </CustomDropdownMenu>

        {/* 오른쪽 정렬 Dropdown Menu */}
        <CustomDropdownMenu
          side="right"
          trigger={
            <button className="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600">
              오른쪽 메뉴
            </button>
          }
          contentClassName="min-w-[180px]"
        >
          <DropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            파일
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            편집
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            보기
          </DropdownMenuItem>
        </CustomDropdownMenu>

        {/* 복잡한 Dropdown Menu */}
        <CustomDropdownMenu
          trigger={
            <button className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
              복잡한 메뉴
            </button>
          }
          contentClassName="min-w-[220px]"
        >
          <DropdownMenuLabel className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
            파일 작업
          </DropdownMenuLabel>
          <DropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            새로 만들기
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            열기
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            저장
          </DropdownMenuItem>
          <DropdownMenuSeparator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
          <DropdownMenuLabel className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
            편집 작업
          </DropdownMenuLabel>
          <DropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            복사
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            붙여넣기
          </DropdownMenuItem>
          <DropdownMenuSeparator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
          <DropdownMenuItem className="cursor-pointer rounded px-3 py-2 text-sm text-red-600 outline-none hover:bg-red-50 dark:hover:bg-red-900/20 dark:text-red-400">
            삭제
          </DropdownMenuItem>
        </CustomDropdownMenu>

        {/* 아이콘과 함께 사용하는 Dropdown Menu */}
        <CustomDropdownMenu
          trigger={
            <button className="flex items-center gap-2 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
              <span>☰</span>
              <span>더보기</span>
            </button>
          }
          contentClassName="min-w-[180px]"
        >
          <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            <span>📝</span>
            <span>편집</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            <span>📋</span>
            <span>복사</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            <span>🔗</span>
            <span>공유</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
          <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
            <span>⚙️</span>
            <span>설정</span>
          </DropdownMenuItem>
        </CustomDropdownMenu>
      </div>
    </div>
  );
}

