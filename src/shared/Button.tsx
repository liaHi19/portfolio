import type { ButtonProps } from "@/types";
import { twMerge } from "tailwind-merge";

function Button({
  className = "",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  const sizeClasses = {
    default: "px-6 py-3 text-base",
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-lg",
  };
  const classes = twMerge(
    `${baseClasses} ${sizeClasses[size]}`,
    `${className}`,
  );

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

export default Button;
