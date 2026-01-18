"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, XCircle } from "lucide-react";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        reset();
      } else {
        setStatus("error");
        setStatusMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Failed to send message. Please try again later.");
    }

    setTimeout(() => {
      setStatus("idle");
      setStatusMessage("");
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Input
                  label="Name"
                  placeholder="Your name"
                  {...register("name")}
                  error={errors.name?.message}
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register("email")}
                  error={errors.email?.message}
                />

                <Textarea
                  label="Message"
                  placeholder="Your message..."
                  rows={5}
                  {...register("message")}
                  error={errors.message?.message}
                />

                <Button type="submit" variant="primary" disabled={status === "loading"} className="w-full">
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-4 ">
                    <CheckCircle size={20} />
                    <p>{statusMessage}</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 ">
                    <XCircle size={20} />
                    <p>{statusMessage}</p>
                  </div>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
