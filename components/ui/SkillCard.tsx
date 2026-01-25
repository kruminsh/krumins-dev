"use client";

import React from "react";
import { motion } from "framer-motion";
import { TechSkill } from "@/lib/types";
import { TechLogo } from "./TechLogo";

interface SkillCardProps {
  skill: TechSkill;
  onClick: () => void;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, onClick, index }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
        <TechLogo logo={skill.logo} name={skill.name} size="md" />
      </div>
      <span className="text-sm font-medium text-foreground text-center leading-tight">
        {skill.name}
      </span>
    </motion.button>
  );
};
