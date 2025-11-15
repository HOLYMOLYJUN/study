import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";

type TVariant = "primary" | "secondary" | "danger" | "outline" | "ghost" | "success";
type TSize = "sm" | "md" | "lg";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TVariant;
  size?: TSize;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ variant = "primary", size = "md", isLoading = false, children, className = "", disabled, ...props }, ref) => {
    const baseStyles = "cursor-pointer inline-flex items-center justify-center rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-default disabled:opacity-50";

    const variantStyles = {
      primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700",
      secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700",
      danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700",
      success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700",
      outline: "border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-700",
    };

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {isLoading && (
          <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

