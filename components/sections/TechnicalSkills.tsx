"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data/skills";
import { TechSkill } from "@/lib/types";
import { Card } from "../ui/Card";
import { SkillCard } from "../ui/SkillCard";
import { SkillDetailModal } from "../ui/SkillDetailModal";
import { Briefcase, Lightbulb } from "lucide-react";

const groupIcons = {
  professional: Briefcase,
  personal: Lightbulb,
};

export const TechnicalSkills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<TechSkill | null>(null);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with professionally and explore personally
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => {
            const IconComponent = groupIcons[group.id];
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent size={28} className="text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">{group.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{group.description}</p>

                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    {group.skills.map((skill, skillIndex) => (
                      <SkillCard
                        key={skill.id}
                        skill={skill}
                        index={skillIndex}
                        onClick={() => setSelectedSkill(skill)}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      <SkillDetailModal
        skill={selectedSkill}
        isOpen={selectedSkill !== null}
        onClose={() => setSelectedSkill(null)}
      />
    </section>
  );
};
