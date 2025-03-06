import { motion } from "framer-motion";
import { fadeIn, revealVariant, containerVariant } from "@/lib/motion";
import SkillBar from "@/components/SkillBar";

const skills = [
  { name: "Java", level: 90 },
  { name: "Python", level: 85 },
  { name: "Node.js", level: 88 },
  { name: "Express.js", level: 85 },
  { name: "Flask", level: 82 },
  { name: "MySQL", level: 87 },
  { name: "MongoDB", level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariant}
      >
        <motion.h2
          variants={revealVariant}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        <motion.div
          variants={containerVariant}
          className="grid gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={revealVariant}
              custom={index}
            >
              <SkillBar
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}