import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { staggerContainer } from "@/lib/motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleBackground />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
}
