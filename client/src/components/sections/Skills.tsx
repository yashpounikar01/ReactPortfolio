import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
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
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="grid gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillBar
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}