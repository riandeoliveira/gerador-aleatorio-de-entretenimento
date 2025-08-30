import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { NeonBackground } from "@/components/neon-background";
import type {
  EntertainmentSelectorType,
  EntertainmentType,
} from "@/types/entertainment";
import { cn } from "@/utils/cn";
import { Button } from "./button";

type EntertainmentSelectorProps = EntertainmentSelectorType & {
  onSelect: (type: EntertainmentType) => void;
  onGenerate: (type: EntertainmentType) => void;
  onClose: (type: EntertainmentType) => void;
};

export const EntertainmentSelector = ({
  title,
  type,
  isOpen,
  imageSrc,
  onSelect,
  onGenerate,
  isHidden,
  onClose,
}: EntertainmentSelectorProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleVisibility = (isVisible: boolean) => {
      timeout = setTimeout(() => {
        setIsVisible(isVisible);
      }, 1000);
    };

    handleVisibility(!isHidden);

    return () => clearTimeout(timeout);
  }, [isHidden]);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth <= 840);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isVisible && isSmallScreen) {
    return null;
  }

  if (!isVisible) {
    return (
      <div className="w-96 h-[452px] max-s-1320:w-[264px] max-s-1320:h-[322px]" />
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-8 max-s-840:gap-4",
        isHidden ? "animate-fade-out" : "animate-fade-in",
      )}
    >
      <h2 className="text-3xl font-semibold max-s-840:text-2xl">{title}</h2>

      <div
        role="button"
        tabIndex={0}
        onClick={() => (isHidden || isOpen ? null : onSelect(type))}
        className={cn(
          isOpen === true ? "animate-rotate-primary" : "",
          isOpen === false ? "animate-rotate-secondary" : "",
          isHidden ? "cursor-not-allowed" : "animate-grow cursor-pointer",
        )}
      >
        <NeonBackground className="rounded-full p-0 w-96 h-96 hover:animate-pulse max-s-1320:w-[264px] max-s-1320:h-[264px]">
          <div
            style={{ transform: "rotateY(180deg)" }}
            className={cn(
              "bg-zinc-900 gap-2 flex items-center justify-center w-[376px] h-[376px] rounded-full absolute translate-x-1 translate-y-1 max-s-1320:w-64 max-s-1320:h-64",
              isOpen === true ? "animate-toggle-secondary" : "",
              isOpen === false ? "animate-toggle-primary" : "",
            )}
          >
            <Button onClick={() => onClose(type)}>
              <ArrowLeft />
            </Button>

            <Button
              onClick={() => onGenerate(type)}
              className="px-12 max-s-840:px-6"
            >
              Gerar
            </Button>
          </div>
          <img
            src={imageSrc}
            alt="Imagem de uma série, filme ou anime"
            width={376}
            height={376}
            className="rounded-full absolute translate-x-1 translate-y-1 z-10 w-[376px] h-[376px] object-cover max-s-1320:w-64 max-s-1320:h-64"
          />
        </NeonBackground>
      </div>
    </div>
  );
};
