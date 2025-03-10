
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Ensure we have a single instance of React
window.React = React;

// Get the root element
const container = document.getElementById('root');

// Function to handle the typing animation
function setupTypingAnimation() {
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
}

// Set up the animation after page load
window.addEventListener('DOMContentLoaded', setupTypingAnimation);

// Also try to set up animation when app mounts (React hydration)
document.addEventListener('app-mounted', setupTypingAnimation);

// Make sure it exists
if (!container) {
  throw new Error('Root element not found in the document');
}

// Create root and render
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
