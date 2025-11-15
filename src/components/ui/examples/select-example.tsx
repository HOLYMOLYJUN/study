import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import CustomSelect, { SelectItem, SelectSeparator, SelectLabel, SelectGroup } from "@/components/ui/select";

export default function SelectExample() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [controlledValue, setControlledValue] = useState<string>("");

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white">Select</h2>
      
      <div className="flex flex-wrap items-center gap-4">
          <CustomSelect placeholder="옵션을 선택하세요" >
            <SelectItem value="option1" className="relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:text-white">
              <Select.ItemText>옵션 1</Select.ItemText>
            </SelectItem>
            <SelectItem value="option2" className="relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:text-white">
              <Select.ItemText>옵션 2</Select.ItemText>
            </SelectItem>
            <SelectItem value="option3" className="relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:text-white">
              <Select.ItemText>옵션 3</Select.ItemText>
            </SelectItem>
          </CustomSelect>


        {/* 기본값이 있는 Select */}
          <CustomSelect defaultValue="react" placeholder="프레임워크 선택">
            <SelectItem value="react" className="relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:text-white">
              <Select.ItemText>React</Select.ItemText>
            </SelectItem>
            <SelectItem value="vue" className="relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:text-white">
              <Select.ItemText>Vue</Select.ItemText>
            </SelectItem>
            <SelectItem value="angular" className="relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:text-white">
              <Select.ItemText>Angular</Select.ItemText>
            </SelectItem>
          </CustomSelect>

        {/* 비활성화된 Select */}
          <CustomSelect disabled placeholder="비활성화됨" defaultValue="disabled">
            <SelectItem value="disabled" className="relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:text-white">
              <Select.ItemText>비활성화</Select.ItemText>
            </SelectItem>
          </CustomSelect>
        {/* 그룹이 있는 Select */}
          <CustomSelect
            value={controlledValue}
            onValueChange={setControlledValue}
            placeholder="카테고리 선택"
          >
            <SelectGroup>
              <SelectLabel className="px-3 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                프론트엔드
              </SelectLabel>
              <SelectItem value="react" className="relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:text-white">
                <Select.ItemText>React</Select.ItemText>
              </SelectItem>
              <SelectItem value="vue" className="relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:text-white">
                <Select.ItemText>Vue</Select.ItemText>
              </SelectItem>
            </SelectGroup>
            <SelectSeparator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
            <SelectGroup>
              <SelectLabel className="px-3 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                백엔드
              </SelectLabel>
              <SelectItem value="node" className="relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:text-white">
                <Select.ItemText>Node.js</Select.ItemText>
              </SelectItem>
              <SelectItem value="python" className="relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:text-white">
                <Select.ItemText>Python</Select.ItemText>
              </SelectItem>
            </SelectGroup>
          </CustomSelect>
        {/* 제어 가능한 Select */}
          <CustomSelect
            value={selectedValue}
            onValueChange={setSelectedValue}
            placeholder="값을 선택하세요"
          >
            <SelectItem value="apple" className="relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:text-white">
              <Select.ItemText>사과</Select.ItemText>
            </SelectItem>
            <SelectItem value="banana" className="relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:text-white">
              <Select.ItemText>바나나</Select.ItemText>
            </SelectItem>
            <SelectItem value="orange" className="relative flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:text-white">
              <Select.ItemText>오렌지</Select.ItemText>
            </SelectItem>
          </CustomSelect>
          {selectedValue && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">선택된 값: {selectedValue}</p>
          )}
      </div>
    </div>
  );
}

