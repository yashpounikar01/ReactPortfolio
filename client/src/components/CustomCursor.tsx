
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseDown = () => setCursorVariant("click");
    const handleMouseUp = () => setCursorVariant("default");
    
    // Add hover effect for clickable elements
    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Add hover effects to buttons and links
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(element => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      
      interactiveElements.forEach(element => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "rgba(100, 150, 255, 0.5)",
      mixBlendMode: "difference" as "difference",
    },
    hover: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      height: 30,
      width: 30,
      backgroundColor: "rgba(100, 150, 255, 0.2)",
      mixBlendMode: "difference" as "difference",
    },
    click: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      height: 10,
      width: 10,
      backgroundColor: "rgba(255, 100, 100, 0.6)",
      mixBlendMode: "difference" as "difference",
    }
  };

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    />
  );
}
