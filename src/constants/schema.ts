import * as z from "zod/mini";

export const contactSchema = z.object({
  name: z
    .string()
    .check(z.minLength(2, "Name must be at least 2 characters"), z.trim()),
  email: z
    .string()
    .check(z.email("Please enter a valid email address"), z.trim()),
  message: z
    .string()
    .check(
      z.minLength(10, "Message must be at least 10 characters"),
      z.maxLength(500, "Message must be less than 10 characters"),
      z.trim(),
    ),
});
