import React from "react";
import toast from "react-hot-toast";
import { Toaster as ToastContainer } from "react-hot-toast";
import Button from "./Button";
import { IoCloseCircle, IoWarningSharp } from "react-icons/io5";
import { cn } from "../../libs/utils";
import { FaCircleCheck } from "react-icons/fa6";

const Toaster = ({ t }) => {
  const TOAST_STYLES = {
    success: {
      container:
        "bg-success/60 backdrop-blur-xs border border-success/10 shadow-success/30",
      icon: <FaCircleCheck size={25} className="mt-2" />,
    },
    error: {
      container:
        "bg-danger/60 backdrop-blur-xs border border-danger/10 shadow-danger/30",
      icon: <IoWarningSharp size={25} className="mt-2" />,
    },
  };
  return (
    <ToastContainer position="top-right">
      {(t) => (
        <div
          className={cn(
            TOAST_STYLES[t.type].container,
            t.visible ? "animate-custom-enter" : "animate-custom-leave",
            "w-full xs:w-100 relative  shadow-md rounded-lg pointer-events-auto",
          )}
        >
          <div className="py-2 px-3 flex gap-4 text-white">
            {TOAST_STYLES[t.type].icon}
            <div className="flex flex-col flex-1">
              <p className="font-medium w-full  ">{t.message.title}</p>
              <p className="mt-0.5 text-sm w-full">{t.message.content}</p>
            </div>
          </div>
          <div className="absolute top-2 right-2">
            <Button
              size="icon"
              colorMode="default"
              className="p-0 hover:bg-transparent"
              variant="surface"
              onClick={() => toast.dismiss(t.id)}
            >
              <IoCloseCircle size={25} />
            </Button>
          </div>
        </div>
      )}
    </ToastContainer>
  );
};

export default Toaster;
