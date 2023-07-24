import { useEffect } from "react";
import { toast, Zoom } from "react-toastify";

export const notifications = (text: string) => {
  toast.success(`${text}`, {
    theme: "colored",
    autoClose: 2000,
    position: "bottom-right",
    transition: Zoom,
  });
};
export const notificationError = (text: string) => {
  toast.error(`${text}`, {
    position: "bottom-right",
    autoClose: 2000,
    theme: "colored",
    transition: Zoom,
  });
};
