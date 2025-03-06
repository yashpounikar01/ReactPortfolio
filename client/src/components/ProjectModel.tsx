import { motion } from "framer-motion";

export default function ProjectModel() {
  return (
    <div className="w-full h-[300px] flex items-center justify-center perspective-[1000px]">
      <motion.div
        className="w-32 h-32 relative transform-style-preserve-3d"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Front face */}
        <div className="absolute w-full h-full bg-primary/80 transform-translate-z-[64px]" />
        {/* Back face */}
        <div className="absolute w-full h-full bg-primary/80 transform-translate-z-[-64px] rotate-y-180" />
        {/* Right face */}
        <div className="absolute w-full h-full bg-primary/60 transform-translate-x-[64px] rotate-y-90" />
        {/* Left face */}
        <div className="absolute w-full h-full bg-primary/60 transform-translate-x-[-64px] rotate-y-[-90deg]" />
        {/* Top face */}
        <div className="absolute w-full h-full bg-primary/70 transform-translate-y-[-64px] rotate-x-90" />
        {/* Bottom face */}
        <div className="absolute w-full h-full bg-primary/70 transform-translate-y-[64px] rotate-x-[-90deg]" />
      </motion.div>
    </div>
  );
}