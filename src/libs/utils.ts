import type { ImageSrc } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const buildSrcSet = (images: ImageSrc[]) =>
  images.map(({ src, width }) => `${src} ${width}w`).join(", ");
