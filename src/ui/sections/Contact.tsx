"use client";

import { startTransition, useActionState, useEffect, useRef } from "react";

import { Send } from "lucide-react";
import { toast } from "sonner";
import { flattenError } from "zod/mini";
import emailjs from "@emailjs/browser";

import { contactInfo, ISAVAILABLE } from "@/constants";
import { contactSchema } from "@/constants/schema";
import { useFieldValidation } from "@/hooks/useFieldValidation";
import type { ActionState, FieldName } from "@/types";

import Button from "../shared/Button";
import FieldError from "../shared/FieldError";

const initialState: ActionState = {
  errors: {},
  values: { name: "", email: "", message: "" },
  success: false,
};

async function sendMessageAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const raw = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors = flattenError(result.error).fieldErrors;
    return {
      errors: {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      },
      values: raw,
      success: false,
    };
  }

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS configuration is missing. Please check your environment variables.",
    );
  }

  await emailjs.send(serviceId, templateId, result.data, publicKey);

  return {
    errors: {},
    values: { name: "", email: "", message: "" },
    success: true,
  };
}

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const { inlineErrors, validate, clearField, clearAll } =
    useFieldValidation(600);

  const [state, dispatch, isPending] = useActionState(
    async (prev: ActionState, formData: FormData) => {
      try {
        const next = await sendMessageAction(prev, formData);

        const hasErrors = Object.values(next.errors).some(Boolean);

        if (!hasErrors) {
          toast.success("Message sent!", {
            description: "I'll get back to you as soon as possible.",
          });
        }
        return next;
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Something went wrong.";
        toast.error("Failed to send message", { description: message });
        return { ...prev, success: false };
      }
    },
    initialState,
  );

  // Reset form + inline errors after successful send
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      clearAll();
    }
  }, [state.success, clearAll]);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => dispatch(formData));
  };

  const errors: Partial<Record<FieldName, string>> = {
    name: inlineErrors.name ?? state.errors.name,
    email: inlineErrors.email ?? state.errors.email,
    message: inlineErrors.message ?? state.errors.message,
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form
              ref={formRef}
              className="space-y-6"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  defaultValue={state.values.name}
                  aria-describedby="name-error"
                  aria-invalid={!!errors.name}
                  onChange={(e) => validate("name", e.target.value)}
                  onFocus={() => clearField("name")}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
                <FieldError id="name-error" message={errors.name} />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  defaultValue={state.values.email}
                  aria-describedby="email-error"
                  aria-invalid={!!errors.email}
                  onChange={(e) => validate("email", e.target.value)}
                  onFocus={() => clearField("email")}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
                <FieldError id="email-error" message={errors.email} />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message..."
                  defaultValue={state.values.message}
                  aria-describedby="message-error"
                  aria-invalid={!!errors.message}
                  onChange={(e) => validate("message", e.target.value)}
                  onFocus={() => clearField("message")}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
                <FieldError id="message-error" message={errors.message} />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isPending}
              >
                {isPending ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="size-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    target="_blank"
                    rel="noreferrer"
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            {ISAVAILABLE && (
              <div className="glass rounded-3xl p-8 border border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-medium">Currently Available</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  I'm currently open to new opportunities and exciting projects.
                  Whether you need a full-time engineer or a freelance
                  consultant, let's talk!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
