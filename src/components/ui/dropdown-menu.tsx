import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

// DropdownMenu.Item, DropdownMenu.Separator 등을 외부에서 사용할 수 있도록 export
export const DropdownMenuItem = DropdownMenu.Item;
export const DropdownMenuSeparator = DropdownMenu.Separator;
export const DropdownMenuLabel = DropdownMenu.Label;

interface IDropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  className?: string;
  contentClassName?: string;
  triggerClassName?: string;
}

export default function CustomDropdownMenu({
  trigger,
  children,
  open,
  onOpenChange,
  align = "start",
  side = "bottom",
  className = "",
  contentClassName = "",
  triggerClassName = "",
}: IDropdownMenuProps) {
  return (
    <DropdownMenu.Root open={open} onOpenChange={onOpenChange}>
      <DropdownMenu.Trigger asChild className={triggerClassName}>
        {trigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side={side}
          align={align}
          sideOffset={5}
          className={`min-w-[200px] rounded-lg bg-white p-1 shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${contentClassName} ${className}`}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

