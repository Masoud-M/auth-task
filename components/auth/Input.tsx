import { twMerge } from "tailwind-merge";

export default function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      {...props}
      className={twMerge(
        "bg-white disabled:opacity-50 shadow-xs px-3 py-1 border rounded-md w-full min-w-0 h-9 md:text-sm text-base transition-[color,box-shadow] disabled:cursor-not-allowed disabled:pointer-events-none",
        className
      )}
    />
  );
}
