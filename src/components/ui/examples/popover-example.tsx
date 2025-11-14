import { useState } from "react";
import CustomPopover from "@/components/ui/popover";

export default function PopoverExample() {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white">Popover</h2>
      
      <div className="flex flex-wrap items-center gap-4">
        {/* 기본 Popover */}
        <CustomPopover
          trigger={
            <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              기본 Popover
            </button>
          }
          contentClassName="rounded-lg bg-white p-4 shadow-lg border border-gray-200 min-w-[200px] dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="space-y-2">
            <h3 className="font-semibold dark:text-white">Popover 제목</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">이것은 기본 Popover 예제입니다.</p>
          </div>
        </CustomPopover>

        {/* 제어 가능한 Popover */}
        <CustomPopover
          open={popoverOpen}
          onOpenChange={setPopoverOpen}
          trigger={
            <button className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
              제어 가능한 Popover
            </button>
          }
          contentClassName="rounded-lg bg-white p-4 shadow-lg border border-gray-200 min-w-[200px] dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="space-y-2">
            <h3 className="font-semibold dark:text-white">제어 가능한 Popover</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">상태: {popoverOpen ? "열림" : "닫힘"}</p>
            <button
              onClick={() => setPopoverOpen(false)}
              className="mt-2 rounded bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
            >
              닫기
            </button>
          </div>
        </CustomPopover>

        {/* 다른 위치의 Popover */}
        <CustomPopover
          side="right"
          trigger={
            <button className="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600">
              오른쪽 Popover
            </button>
          }
          contentClassName="rounded-lg bg-white p-4 shadow-lg border border-gray-200 min-w-[200px] dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="space-y-2">
            <h3 className="font-semibold dark:text-white">오른쪽에 표시</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">side="right"로 설정했습니다.</p>
          </div>
        </CustomPopover>

        {/* 커스텀 스타일 Popover */}
        <CustomPopover
          trigger={
            <button className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
              커스텀 스타일
            </button>
          }
          contentClassName="rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 p-6 shadow-xl border-2 border-purple-300 min-w-[250px] dark:from-pink-900 dark:to-purple-900 dark:border-purple-600"
        >
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200">커스텀 스타일</h3>
            <p className="text-sm text-purple-700 dark:text-purple-300">그라데이션 배경과 커스텀 스타일을 적용했습니다.</p>
            <div className="flex gap-2">
              <button className="rounded bg-purple-500 px-3 py-1 text-sm text-white hover:bg-purple-600">
                확인
              </button>
              <button className="rounded bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
                취소
              </button>
            </div>
          </div>
        </CustomPopover>
      </div>
    </div>
  );
}

