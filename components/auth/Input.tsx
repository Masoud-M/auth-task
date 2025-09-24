import { twMerge } from "tailwind-merge";
import React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        {...props}
        className={twMerge(
          "bg-white disabled:opacity-50 shadow-xs px-3 py-1 border rounded-md w-full min-w-0 h-9 md:text-sm text-base transition-[color,box-shadow] disabled:cursor-not-allowed disabled:pointer-events-none",
          className
        )}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
