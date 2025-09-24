import { twMerge } from "tailwind-merge";

export default function Label({
  className,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      {...props}
      className={twMerge(
        "flex items-center gap-2 group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 font-medium text-sm leading-none peer-disabled:cursor-not-allowed group-data-[disabled=true]:pointer-events-none select-none",
        className
      )}
    />
  );
}
