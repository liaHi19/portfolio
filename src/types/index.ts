import type { ComponentProps } from "react";

type Size = "default" | "sm" | "lg";

export type ButtonProps = {
  className?: string;
  size?: Size;
  children: React.ReactNode;
} & ComponentProps<"button">;

export type ImageSrc = {
  src: string;
  width: number;
};
