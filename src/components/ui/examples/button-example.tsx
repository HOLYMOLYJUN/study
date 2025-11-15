import { useState } from "react";
import Button from "@/components/ui/button";

export default function ButtonExample() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white">Button</h2>
      
      <div className="space-y-6">
        {/* Variant 예제 */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Variants</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        {/* Size 예제 */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Sizes</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* 상태 예제 */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">States</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button isLoading={isLoading} onClick={() => {
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 2000);
            }}>
              {isLoading ? "Loading..." : "Click to Load"}
            </Button>
          </div>
        </div>

        {/* 조합 예제 */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Combinations</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline" size="sm">Small</Button>
            <Button variant="outline" size="md">Medium</Button>
            <Button variant="outline" size="lg">Large</Button>
          </div>
        </div>

        {/* 커스텀 스타일 예제 */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Custom Styles</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" className="rounded-full px-6">Rounded Full</Button>
            <Button variant="outline" className="border-2 border-purple-500 text-purple-500 hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-900/20">
              Custom Color
            </Button>
            <Button variant="ghost" className="shadow-lg">With Shadow</Button>
          </div>
        </div>

        {/* 이벤트 핸들러 예제 */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Event Handlers</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              onClick={() => alert("Button clicked!")}
            >
              Click Me
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                if (confirm("정말 삭제하시겠습니까?")) {
                  alert("삭제되었습니다!");
                }
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

