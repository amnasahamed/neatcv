import type { PropsWithChildren } from "react";

export function Container({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-5 sm:px-7 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
