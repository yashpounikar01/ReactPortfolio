import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.img
          variants={fadeIn("up", "tween", 0.2, 1)}
          src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
        />
        <motion.h1
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text"
        >
          Software Engineer
        </motion.h1>
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="text-lg md:text-xl text-muted-foreground mb-8"
        >
          Building innovative solutions with modern technologies
        </motion.p>
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)}>
          <Button
            size="lg"
            className="animate-bounce"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ArrowDown className="mr-2" /> Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
