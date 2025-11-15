import { useState } from "react";
import CustomDialog, { DialogClose } from "@/components/ui/dialog";
import Button from "@/components/ui/button";

export default function DialogExample() {
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white">Dialog (Modal)</h2>
      
      <div className="flex flex-wrap items-center gap-4">
        {/* 기본 Dialog */}
        <CustomDialog
          trigger={
            <Button variant="outline">
              기본 Dialog
            </Button>
          }
          contentClassName="min-w-[400px]"
          title="기본 Dialog"
          description="Dialog는 모달 형태로 화면 중앙에 표시됩니다. 중요한 정보나 확인이 필요한 경우에 사용합니다."
        >
          <div className="space-y-4">
            <div className="flex justify-center gap-2">
              <DialogClose asChild>
                <Button variant="outline" size="sm">
                  취소
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="primary" size="sm">
                  확인
                </Button>
              </DialogClose>
            </div>
          </div>
        </CustomDialog>

        {/* 확인 Dialog */}
        <CustomDialog
          open={confirmDialogOpen}
          onOpenChange={setConfirmDialogOpen}
          trigger={
            <Button variant="outline">
              확인 Dialog
            </Button>
          }
          title="정말 삭제하시겠습니까?"
          description="이 작업은 되돌릴 수 없습니다."
          contentClassName="min-w-[400px]"
        >
          <div className="space-y-4">
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button variant="outline" size="sm">
                  취소
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => {
                    alert("삭제되었습니다!");
                  }}
                >
                  삭제
                </Button>
              </DialogClose>
            </div>
          </div>
        </CustomDialog>

        {/* 커스텀 스타일 Dialog */}
        <CustomDialog
          trigger={
            <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20">
              커스텀 스타일
            </Button>
          }
          title="커스텀 스타일 다이얼로그"
          contentClassName="min-w-[500px] bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 dark:from-purple-900 dark:to-pink-900 dark:border-purple-600"
          overlayClassName="bg-black/20"
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
                <Button variant="outline" size="sm" className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20">
                  확인
                </Button>
              </DialogClose>
            </div>
          </div>
        </CustomDialog>
      </div>
    </div>
  );
}

