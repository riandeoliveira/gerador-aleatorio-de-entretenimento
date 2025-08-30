import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";
import { NeonBackground } from "./neon-background";

export const Button = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <NeonBackground neonEffect={false} className="rounded-md p-0.5">
      <button
        type="button"
        className={cn(
          "px-3 py-2 text-center rounded-md items-center w-full font-semibold text-base hover:bg-zinc-800 transition-colors cursor-pointer text-white",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </NeonBackground>
  );
};
