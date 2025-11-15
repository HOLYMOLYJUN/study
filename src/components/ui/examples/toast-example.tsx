import { toast } from "@/components/ui/toast";
import Button from "@/components/ui/button";

export default function ToastExample() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white">Toast (알림)</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* 기본 Toast */}
        <Button
          variant="outline"
          onClick={() => {
            toast.default("기본 알림", "이것은 기본 Toast 알림입니다.");
          }}
        >
          기본 Toast
        </Button>
        {/* 액션이 있는 Toast */}
        <Button
          variant="outline"
          onClick={() => {
            toast.error("파일이 삭제되었습니다", "실수로 삭제하셨나요?", {
              actionLabel: "실행 취소",
              onAction: () => {
                toast.success("파일이 복구되었습니다!");
              },
            });
          }}
        >
          액션 Toast
        </Button>

        {/* 모든 Toast 제거 */}
        <Button
          variant="outline"
          className="border-red-500 text-red-500 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-900/20"
          onClick={() => {
            toast.clearAll();
          }}
        >
          모든 Toast 제거
        </Button>
      </div>
    </div>
  );
}
