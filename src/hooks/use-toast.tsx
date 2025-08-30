import { CircleCheck, CircleX, X } from "lucide-react";
import toast, { type Toast, type ToastOptions } from "react-hot-toast";

const toastOptions: ToastOptions = {
  id: crypto.randomUUID(),
  position: "top-right",
  className: "!bg-zinc-900 !text-white w-96",
};

type ToastContainerProps = {
  t: Toast;
  message: string;
  type: "success" | "error";
};

const ToastContainer = ({ type, message, t }: ToastContainerProps) => (
  <div
    className="w-full flex items-center justify-between"
    style={{ zIndex: 99999999 }}
  >
    {type === "success" && <CircleCheck className="text-green-400" />}
    {type === "error" && <CircleX className="text-red-400" />}

    <span className="w-full mx-2">{message}</span>

    <button
      type="button"
      onClick={() => toast.dismiss(t.id)}
      className="cursor-pointer"
    >
      <X className="text-zinc-500 w-5 h-5" />
    </button>
  </div>
);

export const useToast = () => {
  const success = (message: string) => {
    toast(
      (t) => <ToastContainer type="success" message={message} t={t} />,
      toastOptions,
    );
  };

  const error = (message: string) => {
    toast(
      (t) => <ToastContainer type="error" message={message} t={t} />,
      toastOptions,
    );
  };

  return {
    success,
    error,
  };
};
