import * as Toast from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { useToastStore, type IToastItem } from "@/store/toast-store";
import { useEffect, useState } from "react";

// Toast 컴포넌트들을 외부에서 사용할 수 있도록 export
export const ToastProvider = Toast.Provider;
export const ToastViewport = Toast.Viewport;
export const ToastRoot = Toast.Root;
export const ToastTitle = Toast.Title;
export const ToastDescription = Toast.Description;
export const ToastClose = Toast.Close;
export const ToastAction = Toast.Action;

// Toast 위치 타입
export type ToastPosition = "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center";

// Toast 위치별 className 반환 함수
export function getToastViewportClassName(position: ToastPosition = "bottom-right", className?: string): string {
  const baseClasses = "fixed z-100 flex max-h-screen w-full flex-col gap-2 p-4 md:max-w-[420px]";

  const positionClasses: Record<ToastPosition, string> = {
    "top-left": "top-0 left-0 flex-col",
    "top-right": "top-0 right-0 flex-col",
    "top-center": "top-0 left-1/2 -translate-x-1/2 flex-col",
    "bottom-left": "bottom-0 left-0 flex-col-reverse",
    "bottom-right": "bottom-0 right-0 flex-col-reverse",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 flex-col-reverse",
  };

  return `${baseClasses} ${positionClasses[position]} ${className || ""}`;
}

// ToastViewport를 position prop으로 쉽게 사용할 수 있는 컴포넌트
interface IToastViewportProps {
  position?: ToastPosition;
  className?: string;
}

export function CustomToastViewport({ position = "bottom-right", className = "" }: IToastViewportProps) {
  return <ToastViewport className={getToastViewportClassName(position, className)} />;
}

interface IToastProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  variant?: "default" | "success" | "error" | "warning" | "info";
  duration?: number;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function CustomToast({ open, onOpenChange, title, description, variant = "default", duration = 5000, actionLabel, onAction, className = "", titleClassName = "", descriptionClassName = "" }: IToastProps) {
  const variantStyles = {
    default: "bg-white text-gray-900 border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700",
    success: "bg-green-50 text-green-900 border-green-200 dark:bg-green-900/20 dark:text-green-200 dark:border-green-800",
    error: "bg-red-50 text-red-900 border-red-200 dark:bg-red-900/20 dark:text-red-200 dark:border-red-800",
    warning: "bg-orange-50 text-orange-900 border-orange-200 dark:bg-orange-900/20 dark:text-orange-200 dark:border-orange-800",
    info: "bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-900/20 dark:text-blue-200 dark:border-blue-800",
  };

  return (
    <ToastRoot open={open} onOpenChange={onOpenChange} duration={duration} className={`toast-item group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x] data-[swipe=move]:translate-x-[--radix-toast-swipe-move-x] data-[swipe=move]:transition-none ${variantStyles[variant]} ${className}`}>
      <div className="flex-1">
        {title && <ToastTitle className={`text-sm font-semibold ${titleClassName}`}>{title}</ToastTitle>}
        {description && <ToastDescription className={`mt-1 text-sm opacity-90 ${descriptionClassName}`}>{description}</ToastDescription>}
      </div>
      <div className="flex items-center gap-2">
        {actionLabel && onAction && (
          <ToastAction asChild altText={actionLabel}>
            <button onClick={onAction} className="rounded-md bg-transparent px-3 py-1.5 text-sm font-medium hover:bg-black/10 focus:outline-none dark:hover:bg-white/10">
              {actionLabel}
            </button>
          </ToastAction>
        )}
        <ToastClose asChild>
          <button className="absolute top-2 right-2 rounded-md p-1 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100 hover:text-gray-500 focus:opacity-100 focus:outline-none dark:text-gray-500 dark:hover:text-gray-400" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </ToastClose>
      </div>
    </ToastRoot>
  );
}

// ToastContainer - 전역 Toast들을 렌더링하는 컴포넌트
interface IToastContainerProps {
  position?: ToastPosition;
  swipeDirection?: "left" | "right" | "up" | "down";
}

export function ToastContainer({ position = "bottom-right", swipeDirection = "right" }: IToastContainerProps) {
  const toasts = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);

  return (
    <ToastProvider swipeDirection={swipeDirection}>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
      <CustomToastViewport position={position} />
    </ToastProvider>
  );
}

// 개별 Toast 아이템 컴포넌트
interface IToastItemProps {
  toast: IToastItem;
  onClose: () => void;
}

function ToastItem({ toast, onClose }: IToastItemProps) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      // CSS 애니메이션이 완료된 후 제거 (200ms + 약간의 여유시간)
      const timer = setTimeout(() => {
        onClose();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  // duration이 만료되면 먼저 setOpen(false)를 호출해서 애니메이션 시작
  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast.duration]);

  const variantStyles = {
    default: "bg-white text-gray-900 border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700",
    success: "bg-green-50 text-green-900 border-green-200 dark:bg-green-900/20 dark:text-green-200 dark:border-green-800",
    error: "bg-red-50 text-red-900 border-red-200 dark:bg-red-900/20 dark:text-red-200 dark:border-red-800",
    warning: "bg-orange-50 text-orange-900 border-orange-200 dark:bg-orange-900/20 dark:text-orange-200 dark:border-orange-800",
    info: "bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-900/20 dark:text-blue-200 dark:border-blue-800",
  };

  const variant = toast.variant || "default";

  return (
    <ToastRoot open={open} onOpenChange={setOpen} duration={toast.duration || 5000} className={`toast-item group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4  data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x] data-[swipe=move]:translate-x-[--radix-toast-swipe-move-x] data-[swipe=move]:transition-none ${variantStyles[variant]} ${toast.className || ""}`}>
      <div className="flex-1">
        {toast.title && <ToastTitle className={`text-sm font-semibold ${toast.titleClassName || ""}`}>{toast.title}</ToastTitle>}
        {toast.description && <ToastDescription className={`mt-1 text-sm opacity-90 ${toast.descriptionClassName || ""}`}>{toast.description}</ToastDescription>}
      </div>
      <div className="flex items-center gap-2">
        {toast.actionLabel && toast.onAction && (
          <ToastAction asChild altText={toast.actionLabel}>
            <button
              onClick={() => {
                toast.onAction?.();
                setOpen(false);
              }}
              className="rounded-md bg-transparent px-3 py-1.5 text-sm font-medium hover:bg-black/10 focus:outline-none dark:hover:bg-white/10"
            >
              {toast.actionLabel}
            </button>
          </ToastAction>
        )}
        <ToastClose asChild>
          <button className="absolute top-2 right-2 rounded-md p-1 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100 hover:text-gray-500 focus:opacity-100 focus:outline-none dark:text-gray-500 dark:hover:text-gray-400" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </ToastClose>
      </div>
    </ToastRoot>
  );
}

// 전역 Toast 함수
export const toast = {
  show: (options: Omit<IToastItem, "id">) => {
    const { addToast } = useToastStore.getState();
    return addToast(options);
  },
  success: (message: string, description?: string, options?: Partial<Omit<IToastItem, "id" | "variant">>) => {
    const { addToast } = useToastStore.getState();
    return addToast({
      title: message,
      description,
      variant: "success",
      ...options,
    });
  },
  error: (message: string, description?: string, options?: Partial<Omit<IToastItem, "id" | "variant">>) => {
    const { addToast } = useToastStore.getState();
    return addToast({
      title: message,
      description,
      variant: "error",
      ...options,
    });
  },
  warning: (message: string, description?: string, options?: Partial<Omit<IToastItem, "id" | "variant">>) => {
    const { addToast } = useToastStore.getState();
    return addToast({
      title: message,
      description,
      variant: "warning",
      ...options,
    });
  },
  info: (message: string, description?: string, options?: Partial<Omit<IToastItem, "id" | "variant">>) => {
    const { addToast } = useToastStore.getState();
    return addToast({
      title: message,
      description,
      variant: "info",
      ...options,
    });
  },
  default: (message: string, description?: string, options?: Partial<Omit<IToastItem, "id" | "variant">>) => {
    const { addToast } = useToastStore.getState();
    return addToast({
      title: message,
      description,
      variant: "default",
      ...options,
    });
  },
  dismiss: (id: string) => {
    const { removeToast } = useToastStore.getState();
    removeToast(id);
  },
  clearAll: () => {
    const { clearAllToasts } = useToastStore.getState();
    clearAllToasts();
  },
};
