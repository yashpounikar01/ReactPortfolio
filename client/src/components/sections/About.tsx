import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a passionate software engineer with expertise in full-stack development.
                With a strong foundation in Java, Python, and JavaScript, I specialize in
                building scalable web applications using modern frameworks and technologies.
                My experience includes working with Flask, Node.js, Express.js, and various
                databases including MySQL and MongoDB.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
