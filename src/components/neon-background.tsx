import type { Transition, Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/utils/cn";

type NeonBackgroundProps = {
  animate?: boolean;
  children?: ReactNode;
  className?: string;
  neonEffect?: boolean;
  style?: CSSProperties;
};

export const NeonBackground = ({
  animate = true,
  children,
  className,
  neonEffect = true,
  style,
}: NeonBackgroundProps) => {
  const variants: Variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  const springOptions: Transition = {
    duration: 5,
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "reverse",
  };

  return (
    <div
      className={cn(
        "[transform-style:preserve-3d] p-1",
        "rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500",
        className,
      )}
      style={style}
    >
      {neonEffect && (
        <motion.div
          variants={animate ? variants : undefined}
          initial={animate ? "initial" : undefined}
          animate={animate ? "animate" : undefined}
          transition={animate ? springOptions : undefined}
          style={{
            backgroundSize: animate ? "400% 400%" : undefined,
          }}
          className={cn(
            "absolute inset-0 -z-50 opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
            "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] rounded-xl",
            className,
          )}
        />
      )}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={animate ? springOptions : undefined}
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 -z-50 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] rounded-xl",
          className,
        )}
      />
      {children}
    </div>
  );
};
