import CustomScrollArea from "@/components/ui/scroll-area";
import CustomDialog, { DialogClose } from "@/components/ui/dialog";

export default function ScrollAreaExample() {
  const longContent = Array.from({ length: 50 }, (_, i) => (
    <div key={i} className="mb-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
      <h3 className="mb-2 font-semibold dark:text-white">항목 {i + 1}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        이것은 스크롤 가능한 긴 콘텐츠입니다. ScrollArea를 사용하면 커스텀 스크롤바를 적용할 수 있습니다.
      </p>
    </div>
  ));

  const tableRows = Array.from({ length: 30 }, (_, i) => (
    <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
      <td className="px-4 py-3 text-sm dark:text-white">행 {i + 1}</td>
      <td className="px-4 py-3 text-sm dark:text-white">데이터 {i + 1}</td>
      <td className="px-4 py-3 text-sm dark:text-white">값 {i + 1}</td>
    </tr>
  ));

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white">Scroll Area</h2>
      
      <div className="flex flex-wrap items-start gap-4">
        {/* 기본 ScrollArea */}
        <div className="w-[300px]">
          <h3 className="mb-2 text-sm font-semibold dark:text-white">기본 ScrollArea</h3>
          <CustomScrollArea className="h-[300px] rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            {longContent.slice(0, 20)}
          </CustomScrollArea>
        </div>

        {/* 테이블이 있는 ScrollArea */}
        <div className="w-[400px]">
          <h3 className="mb-2 text-sm font-semibold dark:text-white">테이블 ScrollArea</h3>
          <CustomScrollArea className="h-[300px] rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
            <table className="w-full">
              <thead className="sticky top-0 bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold dark:text-white">번호</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold dark:text-white">이름</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold dark:text-white">값</th>
                </tr>
              </thead>
              <tbody>{tableRows}</tbody>
            </table>
          </CustomScrollArea>
        </div>


        {/* 커스텀 스타일 ScrollArea */}
        <div className="w-[300px]">
          <h3 className="mb-2 text-sm font-semibold dark:text-white">커스텀 스타일</h3>
          <CustomScrollArea
            className="h-[300px] rounded-lg border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 p-4 dark:from-purple-900 dark:to-pink-900 dark:border-purple-600"
            scrollbarClassName="data-[orientation=vertical]:w-1 bg-purple-200 dark:bg-purple-800"
            thumbClassName="bg-purple-500 dark:bg-purple-400"
          >
            {longContent.slice(0, 15)}
          </CustomScrollArea>
        </div>
        
        {/* Dialog와 함께 사용하는 ScrollArea */}
        <div>
          <h3 className="mb-2 text-sm font-semibold dark:text-white">Dialog + ScrollArea</h3>
          <CustomDialog
            trigger={
              <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                긴 콘텐츠 Dialog 열기
              </button>
            }
            title="스크롤 가능한 Dialog"
            description="Dialog 내부에 ScrollArea를 사용했습니다."
            contentClassName="min-w-[500px] max-h-[600px]"
          >
            <div className="space-y-4">
              <CustomScrollArea className="h-[400px] rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
                {longContent}
              </CustomScrollArea>
              <div className="flex justify-end gap-2">
                <DialogClose asChild>
                  <button className="rounded bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
                    닫기
                  </button>
                </DialogClose>
              </div>
            </div>
          </CustomDialog>
        </div>
      </div>
    </div>
  );
}

