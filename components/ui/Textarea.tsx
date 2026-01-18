import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2 text-foreground">{label}</label>
        )}
        <textarea
          ref={ref}
          className={`w-full px-4 py-3 bg-card text-foreground border focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none ${
            error ? "border-red-500 focus:ring-red-500" : "border-border"
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
