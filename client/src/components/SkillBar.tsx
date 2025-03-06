import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
}

export default function SkillBar({ name, level, delay }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
      >
        <Progress value={level} className="h-2" />
      </motion.div>
    </div>
  );
}
