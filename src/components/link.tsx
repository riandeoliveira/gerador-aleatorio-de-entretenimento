import { type AnchorHTMLAttributes, useState } from "react";
import { cn } from "@/utils/cn";

export const Link = ({
  children,
  href = "#",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "block bg-clip-text hover:animate-pulse font-semibold text-transparent bg-gradient-to-b from-indigo-500 to-purple-500 w-fit",
        className,
      )}
      {...props}
    >
      {children}
      <div
        className={`h-px ${isHovered ? "bg-gradient-to-b from-indigo-500 to-purple-500" : ""}`}
      />
    </a>
  );
};
