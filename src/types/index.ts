import type { ComponentProps } from "react";
import type { icons } from "lucide-react";
import * as z from "zod/mini";
import type { contactSchema } from "@/constants/schema";

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

export type IconName = keyof typeof icons;
export type Link = { label: string; href: string; icon: IconName };
export type LinkValue = Link & { value: string };

export type ContactFields = z.infer<typeof contactSchema>;
export type FieldName = keyof ContactFields;

export type ActionState = {
  errors: Partial<Record<FieldName, string>>;
  values: ContactFields;
  success?: boolean;
};
