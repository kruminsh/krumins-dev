import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-8 py-6 font-semibold text-base transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center";

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-accent hover:-translate-y-0.5 focus:ring-primary shadow-lg hover:shadow-xl",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-primary hover:-translate-y-0.5 focus:ring-secondary shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 focus:ring-primary shadow-md hover:shadow-lg",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
