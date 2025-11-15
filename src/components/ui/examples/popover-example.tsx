import { useState } from "react";
import CustomPopover from "@/components/ui/popover";
import Button from "@/components/ui/button";

export default function PopoverExample() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white">Popover</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* 기본 Popover */}
        <CustomPopover trigger={<Button variant="outline">기본 Popover</Button>} contentClassName="rounded-lg bg-white p-4 shadow-lg border border-gray-200 min-w-[200px] dark:bg-gray-800 dark:border-gray-700">
          <div className="space-y-2">
            <h3 className="font-semibold dark:text-white">Popover 제목</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">이것은 기본 Popover 예제입니다.</p>
          </div>
        </CustomPopover>

        {/* 다른 위치의 Popover */}
        <CustomPopover side="right" trigger={<Button variant="outline">오른쪽 Popover</Button>} contentClassName="rounded-lg bg-white p-4 shadow-lg border border-gray-200 min-w-[200px] dark:bg-gray-800 dark:border-gray-700">
          <div className="space-y-2">
            <h3 className="font-semibold dark:text-white">오른쪽에 표시</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">side="right"로 설정했습니다.</p>
          </div>
        </CustomPopover>
        {/* 커스텀 스타일 Popover */}
        <CustomPopover
          trigger={
            <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20">
              커스텀 스타일
            </Button>
          }
          contentClassName="rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 p-6 shadow-xl border-2 border-purple-300 min-w-[250px] dark:from-pink-900 dark:to-purple-900 dark:border-purple-600"
        >
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200">커스텀 스타일</h3>
            <p className="text-sm text-purple-700 dark:text-purple-300">그라데이션 배경과 커스텀 스타일을 적용했습니다.</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20">
                확인
              </Button>
              <Button variant="outline" size="sm">
                취소
              </Button>
            </div>
          </div>
        </CustomPopover>
      </div>
    </div>
  );
}
