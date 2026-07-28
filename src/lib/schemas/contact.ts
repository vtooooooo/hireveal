import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Enter your name").max(120),
  email: z.string().trim().min(1, "Enter your email").email("Enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(2000, "Message is too long"),
});

export type ContactInput = z.infer<typeof contactSchema>;
