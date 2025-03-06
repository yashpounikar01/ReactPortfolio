
import React, { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Save the original scroll behavior
    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    
    // Add smooth scrolling to the document
    html.style.scrollBehavior = 'smooth';
    
    // Set up smooth scrolling for all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    const handleClick = (e: Event) => {
      e.preventDefault();
      const link = e.currentTarget as HTMLAnchorElement;
      const targetId = link.getAttribute('href')?.substring(1);
      
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100, // Add some offset
            behavior: 'smooth'
          });
        }
      }
    };
    
    internalLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });
    
    // Clean up
    return () => {
      html.style.scrollBehavior = originalScrollBehavior;
      internalLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);
  
  return null; // This component doesn't render anything
}
