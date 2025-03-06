
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  
  useEffect(() => {
    const phrases = [
      'Software Engineer',
      'Full Stack Developer',
      'Backend Developer'
    ];
    
    let currentPhraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let pauseBeforeDelete = 1500;
    let pauseBeforeType = 500;
    
    function typeText() {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting) {
        // Typing
        if (charIndex < currentPhrase.length) {
          setTypedText(currentPhrase.substring(0, charIndex + 1));
          charIndex++;
          setTimeout(typeText, typingSpeed);
        } else {
          // End of typing
          isDeleting = true;
          setTimeout(typeText, pauseBeforeDelete);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setTypedText(currentPhrase.substring(0, charIndex - 1));
          charIndex--;
          setTimeout(typeText, deletingSpeed);
        } else {
          // End of deleting
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          setTimeout(typeText, pauseBeforeType);
        }
      }
    }
    
    // Start the animation
    typeText();
    
    // Cleanup function
    return () => {
      // No explicit cleanup needed for React state
    };
  }, []);
  
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
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text"
        >
          Hi, I'm Yash Pounikar
        </motion.h1>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="w-full flex justify-center mb-6"
        >
          <div className="typing-text">
            {typedText}
            <span className="typing-cursor"></span>
          </div>
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
