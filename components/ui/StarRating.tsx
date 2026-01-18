import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: 1 | 2 | 3 | 4 | 5;
  maxRating?: number;
  size?: number;
  showLabel?: boolean;
}

const ratingLabels: Record<number, string> = {
  1: "Beginner",
  2: "Familiar",
  3: "Intermediate",
  4: "Advanced",
  5: "Expert",
};

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 20,
  showLabel = false,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[...Array(maxRating)].map((_, index) => {
          const isFilled = index < rating;
          return (
            <Star
              key={index}
              size={size}
              className={`transition-all duration-300 ${
                isFilled
                  ? "fill-accent text-accent"
                  : "fill-none text-muted-foreground opacity-40"
              }`}
            />
          );
        })}
      </div>
      {showLabel && (
        <span className="text-sm font-medium text-muted-foreground">{ratingLabels[rating]}</span>
      )}
    </div>
  );
};
