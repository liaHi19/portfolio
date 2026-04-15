import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ImageSrc } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildSrcSet(images: ImageSrc[]) {
  return images.map(({ src, width }) => `${src} ${width}w`).join(", ");
}

export function downloadFile(path: string, filename: string): void {
  const link = document.createElement("a");
  link.href = path;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
