"use client";

import React from "react";
import { motion } from "framer-motion";
import { education, certifications, languages, softSkills, aboutBio } from "../../lib/data/about";
import { Card } from "../ui/Card";
import { GraduationCap, Award, Languages, Users } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
              About Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack engineer, lifelong learner, and problem solver
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <p className="text-foreground leading-relaxed whitespace-pre-line">{aboutBio}</p>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap size={28} className="text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Education</h3>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg">{education.degree}</p>
                  <p className="text-muted-foreground">{education.field}</p>
                  <p className="text-primary font-medium mt-2">{education.institution}</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <Award size={28} className="text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index}>
                      <p className="font-semibold text-foreground">{cert.name}</p>
                      <p className="text-muted-foreground text-sm">
                        {cert.issuer} - {cert.status}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <Languages size={28} className="text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Languages</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-primary/10  border border-primary/20"
                    >
                      <p className="font-semibold text-foreground">{lang.name}</p>
                      <p className="text-muted-foreground text-sm">{lang.level}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <Users size={28} className="text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm  border border-accent/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
