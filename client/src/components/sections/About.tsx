import { motion } from "framer-motion";
import { fadeIn, revealVariant, containerVariant } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
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
          About Me
        </motion.h2>
        <motion.div variants={revealVariant}>
          <Card>
            <CardContent className="p-8 space-y-6">
              <motion.p 
                className="text-lg leading-relaxed text-muted-foreground"
                variants={fadeIn("up", "tween", 0.3, 1)}
              >
                I am a passionate full-stack software engineer with a deep understanding of both backend and frontend technologies. My expertise spans across multiple programming languages and frameworks, allowing me to build comprehensive solutions for complex problems.
              </motion.p>

              <motion.div 
                variants={fadeIn("up", "tween", 0.4, 1)}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold">Backend Development</h3>
                <p className="text-muted-foreground">
                  Proficient in Java and Python for robust backend systems. I specialize in building RESTful APIs and microservices using Flask and Express.js frameworks. My experience with both SQL (MySQL) and NoSQL (MongoDB) databases enables me to design efficient and scalable data solutions.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeIn("up", "tween", 0.5, 1)}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold">Full-Stack Integration</h3>
                <p className="text-muted-foreground">
                  With extensive experience in Node.js and Express.js, I excel at creating seamless integrations between frontend and backend systems. I focus on building performant, secure, and maintainable applications that deliver exceptional user experiences.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeIn("up", "tween", 0.6, 1)}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold">Development Philosophy</h3>
                <p className="text-muted-foreground">
                  I believe in writing clean, maintainable code and following best practices in software development. My approach combines technical excellence with practical problem-solving to deliver solutions that not only work well but are also sustainable in the long term.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}