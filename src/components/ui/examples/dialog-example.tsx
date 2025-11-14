import { useState } from "react";
import CustomDialog, { DialogClose } from "@/components/ui/dialog";

export default function DialogExample() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white">Dialog (Modal)</h2>
      
      <div className="flex flex-wrap items-center gap-4">
        {/* 기본 Dialog */}
        <CustomDialog
          trigger={
            <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              기본 Dialog
            </button>
          }
          title="기본 다이얼로그"
          description="이것은 기본 Dialog 예제입니다."
          contentClassName="min-w-[400px]"
        >
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              Dialog는 모달 형태로 화면 중앙에 표시됩니다. 중요한 정보나 확인이 필요한 경우에 사용합니다.
            </p>
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <button className="rounded bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
                  취소
                </button>
              </DialogClose>
              <DialogClose asChild>
                <button className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">
                  확인
                </button>
              </DialogClose>
            </div>
          </div>
        </CustomDialog>

        {/* 제어 가능한 Dialog */}
        <CustomDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          trigger={
            <button className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
              제어 가능한 Dialog
            </button>
          }
          title="제어 가능한 다이얼로그"
          description="상태를 직접 제어할 수 있습니다."
          contentClassName="min-w-[400px]"
        >
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              현재 상태: {dialogOpen ? "열림" : "닫힘"}
            </p>
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <button className="rounded bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
                  닫기
                </button>
              </DialogClose>
            </div>
          </div>
        </CustomDialog>

        {/* 확인 Dialog */}
        <CustomDialog
          open={confirmDialogOpen}
          onOpenChange={setConfirmDialogOpen}
          trigger={
            <button className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
              확인 Dialog
            </button>
          }
          title="정말 삭제하시겠습니까?"
          description="이 작업은 되돌릴 수 없습니다."
          contentClassName="min-w-[400px]"
        >
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              삭제된 데이터는 복구할 수 없습니다. 계속하시겠습니까?
            </p>
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <button className="rounded bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
                  취소
                </button>
              </DialogClose>
              <DialogClose asChild>
                <button
                  onClick={() => {
                    alert("삭제되었습니다!");
                  }}
                  className="rounded bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
                >
                  삭제
                </button>
              </DialogClose>
            </div>
          </div>
        </CustomDialog>

        {/* 커스텀 스타일 Dialog */}
        <CustomDialog
          trigger={
            <button className="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600">
              커스텀 스타일
            </button>
          }
          title="커스텀 스타일 다이얼로그"
          contentClassName="min-w-[500px] bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 dark:from-purple-900 dark:to-pink-900 dark:border-purple-600"
          overlayClassName="bg-black/70"
        >
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-200">
              그라데이션 배경과 커스텀 스타일을 적용한 Dialog입니다.
            </p>
            <div className="rounded-lg bg-white/50 dark:bg-gray-800/50 p-4">
              <h4 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">특별한 내용</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                이 Dialog는 커스텀 스타일이 적용되어 있습니다.
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <button className="rounded bg-purple-500 px-4 py-2 text-sm text-white hover:bg-purple-600">
                  확인
                </button>
              </DialogClose>
            </div>
          </div>
        </CustomDialog>
      </div>
    </div>
  );
}

