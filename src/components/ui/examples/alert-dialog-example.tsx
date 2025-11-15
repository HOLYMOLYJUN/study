import { useState } from "react";
import CustomAlertDialog, { AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import Button from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export default function AlertDialogExample() {
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleDelete = () => {
    toast.default("삭제되었습니다!");
  };

  const handleLogout = () => {
    toast.success("로그아웃되었습니다!");
    setLogoutDialogOpen(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white">Alert Dialog</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* 기본 Alert Dialog - 삭제 확인 */}
        <CustomAlertDialog trigger={<Button variant="danger">삭제 확인</Button>} title="정말 삭제하시겠습니까?" description="이 작업은 되돌릴 수 없습니다. 삭제된 데이터는 복구할 수 없습니다." contentClassName="min-w-[400px]">
          <div className="flex justify-end gap-2">
            <AlertDialogCancel asChild>
              <Button variant="outline" size="sm">
                취소
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button variant="danger" size="sm" onClick={handleDelete}>
                삭제
              </Button>
            </AlertDialogAction>
          </div>
        </CustomAlertDialog>

        {/* 로그아웃 확인 Alert Dialog */}
        <CustomAlertDialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen} trigger={<Button variant="secondary">로그아웃</Button>} title="로그아웃하시겠습니까?" description="다시 로그인하려면 계정 정보가 필요합니다." contentClassName="min-w-[400px]">
          <div className="flex justify-end gap-2">
            <AlertDialogCancel asChild>
              <Button variant="outline" size="sm">
                취소
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button variant="secondary" size="sm" onClick={handleLogout}>
                로그아웃
              </Button>
            </AlertDialogAction>
          </div>
        </CustomAlertDialog>

        {/* 커스텀 스타일 Alert Dialog */}
        <CustomAlertDialog
          trigger={
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-900/20">
              커스텀 스타일
            </Button>
          }
          title="경고"
          description="이 작업은 중요합니다. 신중하게 결정해주세요."
          contentClassName="min-w-[450px] bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 dark:from-orange-900 dark:to-red-900 dark:border-orange-600"
          overlayClassName="bg-black/30"
        >
          <div className="space-y-4">
            <div className="rounded-lg bg-white/50 p-4 dark:bg-gray-800/50">
              <h4 className="mb-2 font-semibold text-orange-800 dark:text-orange-200">주의 사항</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">이 작업을 수행하기 전에 모든 데이터가 백업되었는지 확인하세요.</p>
            </div>
            <div className="flex justify-end gap-2">
              <AlertDialogCancel asChild>
                <Button variant="outline" size="sm" className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-900/20">
                  취소
                </Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button variant="danger" size="sm" onClick={() => toast.success("작업이 완료되었습니다!")}>
                  계속 진행
                </Button>
              </AlertDialogAction>
            </div>
          </div>
        </CustomAlertDialog>

      </div>
    </div>
  );
}
