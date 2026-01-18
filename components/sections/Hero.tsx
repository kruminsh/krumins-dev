"use client";

import React from "react";
import Image from "next/image";
import { Download, Github, Linkedin, ChevronDown, MapPin } from "lucide-react";
import { personalInfo } from "../../lib/config";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL hash
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">Hi, I'm </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-4">
              {personalInfo.title}
            </h2>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8">
              <MapPin size={20} className="text-primary" />
              <span className="text-lg">{personalInfo.location}</span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-20">
              <Button
                variant="primary"
                onClick={() => window.open(personalInfo.resumeUrl, "_blank")}
                className="min-w-[200px]"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="min-w-[200px]"
              >
                Get in Touch
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6">
              {personalInfo.social.github && (
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={28} />
                </a>
              )}
              {personalInfo.social.linkedin && (
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
        onClick={() => scrollToSection("experience")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-accent transition-colors duration-300"
        aria-label="Scroll to experience"
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
};
