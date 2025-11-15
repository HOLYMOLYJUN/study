import * as Select from "@radix-ui/react-select";

// Select.Item, Select.Separator 등을 외부에서 사용할 수 있도록 export
export const SelectItem = Select.Item;
export const SelectSeparator = Select.Separator;
export const SelectLabel = Select.Label;
export const SelectGroup = Select.Group;

interface ISelectProps {
  children: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
}

export default function CustomSelect({
  children,
  value,
  defaultValue,
  onValueChange,
  placeholder = "선택하세요",
  disabled = false,
  open,
  onOpenChange,
  className = "",
  triggerClassName = "",
  contentClassName = "",
}: ISelectProps) {
  return (
    <Select.Root value={value} defaultValue={defaultValue} onValueChange={onValueChange} disabled={disabled} open={open} onOpenChange={onOpenChange}>
      <Select.Trigger
        className={`flex items-center justify-between rounded border border-gray-300 bg-white px-3 py-2 text-sm outline-none hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:border-blue-400 ${triggerClassName} ${className}`}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="text-gray-500 dark:text-gray-400">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor" />
          </svg>
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className={`min-w-[var(--radix-select-trigger-width)] rounded-lg bg-white shadow-lg p-0 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${contentClassName}`}
          position="popper"
          sideOffset={5}
        >
          <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white text-gray-700 cursor-default dark:bg-gray-800 dark:text-gray-300">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 9L7.5 5.5L11 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Select.ScrollUpButton>
          <Select.Viewport className="p-0">
            {children}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white text-gray-700 cursor-default dark:bg-gray-800 dark:text-gray-300">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L7.5 9.5L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

