"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TechLogoProps {
  logo: string;
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { container: "w-8 h-8", pixels: 32 },
  md: { container: "w-12 h-12", pixels: 48 },
  lg: { container: "w-16 h-16", pixels: 64 },
};

export const TechLogo: React.FC<TechLogoProps> = ({ logo, name, size = "md", className = "" }) => {
  const [hasError, setHasError] = useState(false);
  const { container, pixels } = sizeMap[size];

  const getInitials = (name: string) => {
    if (name.length <= 2) return name;
    const words = name.split(/[\s/.]+/);
    if (words.length > 1) {
      return words
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  if (hasError || !logo) {
    return (
      <div
        className={`${container} rounded-lg bg-primary/10 flex items-center justify-center text-primary font-semibold ${className}`}
        style={{ fontSize: pixels * 0.35 }}
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <div className={`${container} relative ${className}`}>
      <Image
        src={logo}
        alt={`${name} logo`}
        width={pixels}
        height={pixels}
        className="object-contain w-full h-full"
        onError={() => setHasError(true)}
      />
    </div>
  );
};
