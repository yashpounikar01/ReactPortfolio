import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectModel from "./ProjectModel";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((centerX - x) / centerX) * 10;

      setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
      setIsHovered(false);
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      animate={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        scale: isHovered ? 1.02 : 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      <Card className="overflow-hidden h-full">
        <CardHeader className="p-0">
          <ProjectModel />
        </CardHeader>
        <CardContent className="p-6">
          <motion.h3 
            className="text-xl font-semibold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {project.description}
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}