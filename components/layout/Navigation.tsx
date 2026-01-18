"use client";

import React, { useState, useEffect } from "react";
import { navItems } from "../../lib/config";
import { ThemeToggle } from "../ui/ThemeToggle";

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
        // Update URL hash without triggering scroll
        if (window.location.hash !== `#${currentSection}`) {
          window.history.replaceState(null, "", `#${currentSection}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle initial load hash and hash changes
  useEffect(() => {
    const scrollToHash = (hash: string) => {
      if (hash) {
        const sectionId = hash.substring(1); // Remove #
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionId);
          }
        }, 100);
      }
    };

    // Scroll to hash on initial load
    if (window.location.hash) {
      scrollToHash(window.location.hash);
    }

    // Listen for hash changes (back/forward buttons)
    const handleHashChange = () => {
      scrollToHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL hash
      window.history.pushState(null, "", href);
      setActiveSection(sectionId);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          <div className="flex items-center gap-6 sm:gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-base font-medium transition-all duration-300 hover:text-primary ${
                  activeSection === item.href.substring(1)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="absolute right-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
