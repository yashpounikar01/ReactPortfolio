import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { projects } from "@/data/projects"; // Assumed structure: array of objects with {id, image, title, subtitle, description}
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 px-4">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="overflow-hidden shadow-lg h-full flex flex-col relative group">
                <div className="h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                    initial={{ scale: 1 }}
                    animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="bg-background/80 backdrop-blur-sm p-3 rounded-md">
                      <h3 className="font-bold text-lg">{project.title}</h3>
                      <p className="text-sm">Click to view details</p>
                    </div>
                  </motion.div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {project.title}
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: hoveredIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-primary">●</span>
                    </motion.div>
                  </CardTitle>
                  <CardDescription>{project.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.description}</p>
                  <CardFooter>
                    {/* Add tech stack display here if needed */}
                  </CardFooter>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}