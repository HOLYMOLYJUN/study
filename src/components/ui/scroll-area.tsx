import * as ScrollArea from "@radix-ui/react-scroll-area";

interface IScrollAreaProps {
  children: React.ReactNode;
  className?: string;
  viewportClassName?: string;
  scrollbarClassName?: string;
  thumbClassName?: string;
}

export default function CustomScrollArea({
  children,
  className = "",
  viewportClassName = "",
  scrollbarClassName = "",
  thumbClassName = "",
}: IScrollAreaProps) {
  return (
    <ScrollArea.Root className={`overflow-hidden ${className}`}>
      <ScrollArea.Viewport className={`h-full w-full rounded ${viewportClassName}`}>
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className={`flex touch-none select-none transition-colors duration-150 ease-out data-[orientation=vertical]:w-1.5 data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col ${scrollbarClassName}`}
        orientation="vertical"
      >
        <ScrollArea.Thumb className={`relative flex-1 rounded-full bg-gray-300 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] dark:bg-gray-600 ${thumbClassName}`} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className={`flex touch-none select-none transition-colors duration-150 ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col ${scrollbarClassName}`}
        orientation="horizontal"
      >
        <ScrollArea.Thumb className={`relative flex-1 rounded-full bg-gray-300 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] dark:bg-gray-600 ${thumbClassName}`} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="bg-gray-200 dark:bg-gray-700" />
    </ScrollArea.Root>
  );
}

