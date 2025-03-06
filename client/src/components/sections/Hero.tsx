import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

// Make sure we cleanup any existing animation on unmount

export default function Hero() {
  useEffect(() => {
    // No need to redefine the animation logic here
    // It's handled globally in main.tsx
    const typingContainer = document.getElementById('typing-container');
    
    // Trigger the global animation
    const event = new Event('app-mounted');
    document.dispatchEvent(event);
    
    return () => {
      // Cleanup on unmount
      if (window.typingIntervalId) {
        clearInterval(window.typingIntervalId);
        window.typingIntervalId = null;
      }
      
      if (window.deletingIntervalId) {
        clearInterval(window.deletingIntervalId);
        window.deletingIntervalId = null;
      }
      
      // Clear the container text
      if (typingContainer) {
        typingContainer.textContent = '';
      }
    };
  }, []);

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
          <div id="typing-container" className="typing-text">
            {/* Typing effect will be rendered here */}
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