import { create } from "zustand";

export type ToastVariant = "default" | "success" | "error" | "warning" | "info";

export interface IToastItem {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

interface IToastStore {
  toasts: IToastItem[];
  maxToasts?: number;
  addToast: (toast: Omit<IToastItem, "id">) => string;
  removeToast: (id: string) => void;
  clearAllToasts: () => void;
}

const MAX_TOASTS = 5; // 최대 Toast 개수

export const useToastStore = create<IToastStore>((set, get) => ({
  toasts: [],
  maxToasts: MAX_TOASTS,
  addToast: (toast) => {
    const state = get();
    
    // 최대 개수 제한: 초과하면 가장 오래된 Toast 제거
    let toasts = [...state.toasts];
    if (toasts.length >= MAX_TOASTS) {
      toasts = toasts.slice(1); // 가장 오래된 것 제거
    }
    
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: IToastItem = {
      ...toast,
      id,
      duration: toast.duration ?? 3000,
    };
    
    set({ toasts: [...toasts, newToast] });

    // 자동 제거는 ToastItem 컴포넌트에서 애니메이션과 함께 처리

    return id;
  },
  removeToast: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
  clearAllToasts: () => set({ toasts: [] }),
}));
