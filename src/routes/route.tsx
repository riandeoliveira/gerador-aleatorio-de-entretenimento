import type { ReactElement } from "react";
import { Toaster } from "react-hot-toast";
import { ScreenLoader } from "@/components/screen-loader";

type RouteProps = {
  page: () => ReactElement;
};

export const Route = ({ page: Page }: RouteProps) => {
  return (
    <>
      <Toaster />
      <ScreenLoader />
      <Page />
    </>
  );
};
