import * as Dialog from "@radix-ui/react-dialog";

// Dialog.Close를 외부에서 사용할 수 있도록 export
export const DialogClose = Dialog.Close;

interface IDialogProps {
  trigger?: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  className?: string;
  overlayClassName?: string;
  contentClassName?: string;
  triggerClassName?: string;
}

export default function CustomDialog({
  trigger,
  children,
  open,
  onOpenChange,
  title,
  description,
  className = "",
  overlayClassName = "",
  contentClassName = "",
  triggerClassName = "",
}: IDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && (
        <Dialog.Trigger asChild className={triggerClassName}>
          {trigger}
        </Dialog.Trigger>
      )}
      <Dialog.Portal>
        <Dialog.Overlay
          className={`fixed inset-0 bg-black/50 z-51 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ${overlayClassName}`}
        />
        <Dialog.Content
          className={`fixed z-52 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:bg-gray-800 ${contentClassName} ${className}`}
        >
          {title && (
            <Dialog.Title className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </Dialog.Title>
          )}
          {description && (
            <Dialog.Description className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              {description}
            </Dialog.Description>
          )}
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

