
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  useEffect(() => {
    const phrases = [
      'Software Engineer',
      'Full Stack Developer',
      'Backend Developer'
    ];
    
    const typingContainer = document.getElementById('typing-container');
    let currentPhraseIndex = 0;
    
    function startTypingAnimation() {
      if (!typingContainer) return;
      
      const currentPhrase = phrases[currentPhraseIndex];
      let charIndex = 0;
      typingContainer.textContent = '';
      
      // Typing phase
      const typingInterval = setInterval(() => {
        if (charIndex < currentPhrase.length) {
          typingContainer.textContent += currentPhrase.charAt(charIndex);
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(startDeletingAnimation, 1500); // Wait before starting delete
        }
      }, 100);
    }
    
    function startDeletingAnimation() {
      if (!typingContainer) return;
      
      let text = typingContainer.textContent || '';
      
      // Deleting phase
      const deletingInterval = setInterval(() => {
        if (text.length > 0) {
          text = text.substring(0, text.length - 1);
          typingContainer.textContent = text;
        } else {
          clearInterval(deletingInterval);
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          setTimeout(startTypingAnimation, 500); // Wait before typing next phrase
        }
      }, 50);
    }
    
    // Start the animation
    startTypingAnimation();
    
    // Cleanup on component unmount
    return () => {
      const typingContainer = document.getElementById('typing-container');
      if (typingContainer) {
        typingContainer.textContent = '';
      }
    };
  }, []);
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.img
          variants={fadeIn("up", "tween", 0.2, 1)}
          src="https://avatars.githubusercontent.com/u/79402434?s=400&u=503086fd7fecd8cc3817f79fe51fddc990aae5ed&v=4"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
        />
        <motion.h1
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text"
        >
          Hi, I'm Yash Pounikar
        </motion.h1>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="w-full flex justify-center mb-6"
        >
          <div className="typing-text" id="typing-container"></div>
        </motion.div>
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="text-lg md:text-xl text-muted-foreground mb-8"
        >
          I'm a 3rd-year undergraduate student at PJLCE pursuing my Bachelor's in Technology in AI.
          Building innovative solutions with modern technologies.
        </motion.p>
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)}>
          <Button
            size="lg"
            className="animate-bounce"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ArrowDown className="mr-2 h-4 w-4" />
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
