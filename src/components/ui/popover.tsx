import * as Popover from "@radix-ui/react-popover";

interface IPopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  className?: string;
  contentClassName?: string;
  triggerClassName?: string;
}

export default function CustomPopover({
  trigger,
  children,
  open,
  onOpenChange,
  side = "bottom",
  align = "center",
  className = "",
  contentClassName = "",
  triggerClassName = "",
}: IPopoverProps) {
  return (
    <Popover.Root open={open} onOpenChange={onOpenChange}>
      <Popover.Trigger asChild className={triggerClassName}>
        {trigger}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side={side}
          align={align}
          className={`${contentClassName} ${className}`}
          sideOffset={5}
        >
          {children}
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

