interface IPageProvider {
    children: React.ReactNode;
    className?: string;
}
  
export default function PageProvider({ children, className = "" }: IPageProvider) {
  return <div className={`
    min-h-[calc(100dvh-var(--header-height))]
    bg-white
    dark:bg-gray-900
    ${className}
  `}>{children}</div>;
}
