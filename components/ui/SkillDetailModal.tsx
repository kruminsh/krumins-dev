"use client";

import React from "react";
import { TechSkill } from "@/lib/types";
import { Modal } from "./Modal";
import { TechLogo } from "./TechLogo";
import { experiences } from "@/lib/data/experience";
import { Briefcase } from "lucide-react";

interface SkillDetailModalProps {
  skill: TechSkill | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SkillDetailModal: React.FC<SkillDetailModalProps> = ({ skill, isOpen, onClose }) => {
  if (!skill) return null;

  const relatedJobs = skill.relatedExperience
    ?.map((id) => experiences.find((exp) => exp.id === id))
    .filter(Boolean);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6 pr-6">
        <div className="flex items-center gap-4">
          <TechLogo logo={skill.logo} name={skill.name} size="lg" />
          <div>
            <h3 className="text-2xl font-bold text-foreground">{skill.name}</h3>
            <span className="text-sm text-muted-foreground">
              {skill.type === "professional" ? "Professional Toolkit" : "Personal Projects"}
            </span>
          </div>
        </div>

        <p className="text-foreground leading-relaxed">{skill.description}</p>

        {skill.highlights && skill.highlights.length > 0 && (
          <div>
            <h4 className="font-semibold text-foreground mb-2">Key Highlights</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {skill.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        {relatedJobs && relatedJobs.length > 0 && (
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Briefcase size={18} className="text-primary" />
              Used At
            </h4>
            <div className="flex flex-wrap gap-2">
              {relatedJobs.map((job, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                >
                  {job!.company}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
