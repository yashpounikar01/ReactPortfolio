import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeIn } from "@/lib/motion";
import { skills } from "@/data/skills";
import { useState } from "react";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Animation variants for staggered animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-16 px-4">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center glow-text">Skills & Technologies</h2>
        <motion.div 
          className="mb-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.technical.map((skill) => (
              <motion.div 
                key={skill}
                variants={item}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setHoveredSkill(skill)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <Badge 
                  variant={hoveredSkill === skill ? "default" : "outline"} 
                  className="text-md px-3 py-1.5 transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}