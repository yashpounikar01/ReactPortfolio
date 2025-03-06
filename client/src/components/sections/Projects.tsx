import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    tech: ["Java", "Spring Boot", "React", "MySQL"],
  },
  {
    title: "Task Management System",
    description: "Collaborative task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tech: ["Python", "Flask", "Vue.js", "PostgreSQL"],
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics and engagement",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    tech: ["Node.js", "Express", "D3.js", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-3xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
