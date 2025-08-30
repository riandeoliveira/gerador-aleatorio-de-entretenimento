import { LoaderCircle } from "lucide-react";
import { useLoaderStore } from "@/stores/loader-store";

export const ScreenLoader = () => {
  const { isLoading } = useLoaderStore();

  return (
    <>
      {isLoading && (
        <div className="items-center flex h-full justify-center left-0 fixed top-0 w-full z-50 bg-zinc-950/50">
          <LoaderCircle className="w-12 h-12 text-white animate-spin" />
        </div>
      )}
    </>
  );
};
