import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import profileImage from "../assets/projects/myphoto.jpg"; // Correctly import the image

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  // --- 1. FIXED: Age calculation logic is now correctly inside the Hero component ---
  const [age, setAge] = useState('');
  useEffect(() => {
    const dateOfBirth = new Date('2002-06-17T10:00:00');
    const calculateAge = () => {
      const now = new Date();
      const ageInMs = now.getTime() - dateOfBirth.getTime();
      const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
      setAge(ageInYears.toFixed(9));
    };
    const interval = setInterval(calculateAge, 50);
    return () => clearInterval(interval);
  }, []);

  // This string will now be correctly updated by the age state
  const aboutMeCode = `const VickeyKumar = {
  name: "Vickey Kumar",
  pronouns: "He/Him",
  age: ${age || "23.000000000"},
  location: "Noida, India",
  education: {
    degree: "B.Tech, IIIT Delhi",
    focus: "CS & Applied Mathematics"
  },
  passions: ["AI/ML", "Full-Stack", "Open-Source"]
};`;

  return (
    <motion.section id="home" className="hero">
      <div className="hero-container">
        
        {/* --- LEFT COLUMN: Text Content --- */}
        <motion.div className="hero-content" variants={staggerContainer} initial="initial" animate="animate">
          <motion.div className="hero-badge" variants={fadeInUp}>
            <span>👋 Hello, I'm Vickey Kumar</span>
          </motion.div>
          <motion.h1 className="glitch" variants={fadeInUp}>
            TicVic Tech
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Software Developer & AI/ML Engineer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Passionate about building inclusive technology, I bridge the gap between complex machine learning and accessible full-stack development.
          </motion.p>
          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a href="#projects" className="cta-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View My Work
            </motion.a>
            <motion.a href="#contact" className="cta-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/Vickey21299/" target="_blank" whileHover={{ y: -3 }}><i className="fab fa-github"></i></motion.a>
            <motion.a href="https://www.linkedin.com/in/vickey-kumar-593b7b284/" target="_blank" whileHover={{ y: -3 }}><i className="fab fa-linkedin"></i></motion.a>
            <motion.a href="https://x.com/Vickey21299er" target="_blank" whileHover={{ y: -3 }}><i className="fab fa-twitter"></i></motion.a>
          </motion.div>
        </motion.div>

        {/* --- RIGHT COLUMN: Image and Code Block --- */}
        <motion.div className="hero-image-container" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
          <motion.img
            src={profileImage}
            alt="Vickey Kumar Profile Picture"
            className="hero-profile-image"
            // --- 2. FIXED: Hover effect now zooms in correctly ---
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="code-display">
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} wrapLines={true}>
              {aboutMeCode}
            </SyntaxHighlighter>
          </div>
        </motion.div>
        
      </div>
    </motion.section>
  );
};
