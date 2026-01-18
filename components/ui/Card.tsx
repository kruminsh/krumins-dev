import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", hover = false }) => {
  const hoverStyles = hover
    ? "hover:shadow-2xl hover:-translate-y-1 hover:border-accent cursor-pointer"
    : "";

  return (
    <div
      className={`bg-card text-card-foreground border border-border p-6 shadow-lg transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};
