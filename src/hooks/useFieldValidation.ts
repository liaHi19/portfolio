import { useRef, useState } from "react";

import * as z from "zod/mini";

import { contactSchema } from "@/constants/schema";
import type { FieldName } from "@/types";

const FIELD_SCHEMAS: Record<FieldName, z.ZodMiniString> = {
  name: contactSchema.shape.name,
  email: contactSchema.shape.email,
  message: contactSchema.shape.message,
};

export function useFieldValidation(debounceMs = 3000) {
  const [inlineErrors, setInlineErrors] = useState<
    Partial<Record<FieldName, string>>
  >({});

  const timers = useRef<
    Partial<Record<FieldName, ReturnType<typeof setTimeout>>>
  >({});

  const validate = (field: FieldName, value: string) => {
    clearTimeout(timers.current[field]);
    timers.current[field] = setTimeout(() => {
      const result = FIELD_SCHEMAS[field].safeParse(value);

      setInlineErrors((prev) => ({
        ...prev,
        [field]: result.success ? undefined : result.error.issues[0]?.message,
      }));
    }, debounceMs);
  };

  const clearField = (field: FieldName) => {
    clearTimeout(timers.current[field]);
    setInlineErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const clearAll = () => {
    Object.values(timers.current).forEach(clearTimeout);
    setInlineErrors({});
  };

  return { inlineErrors, validate, clearField, clearAll };
}
