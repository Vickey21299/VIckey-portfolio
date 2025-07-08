import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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
// --- DynamicAge Component ---
const DynamicAge = () => {
  const [age, setAge] = useState('');
  // --- IMPORTANT: Set your exact date of birth here ---
  const dateOfBirth = new Date('2002-01-15T10:00:00');

  useEffect(() => {
    const calculateAge = () => {
      const now = new Date();
      const ageInMs = now.getTime() - dateOfBirth.getTime();
      const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
      setAge(ageInYears.toFixed(9));
    };
    const interval = setInterval(calculateAge, 50);
    return () => clearInterval(interval);
  }, []);

  return age;
};

// --- Splitting the 'About Me' code for dynamic rendering ---
const aboutMeCodeBeforeAge = `const VickeyKumar = {
  name: "Vickey Kumar",
  pronouns: "He/Him",
  age: `;

const aboutMeCodeAfterAge = `,
  location: "New Delhi, India",
  education: {
    degree: "B.Tech in Computer Science & Applied Mathematics",
    institution: "IIIT Delhi",
    status: "Final Year Student"
  },
  passions: [
    "AI/ML Engineering", 
    "Full-Stack Development", 
    "Open-Source"
  ],
  mission: "To build inclusive and intelligent systems that solve meaningful problems."
};`;


export const Hero = () => {
  const age = DynamicAge(); // Call as a function to get the age string

  // Combine the code as a string for SyntaxHighlighter
  const aboutMeCode = `const VickeyKumar = {
  name: "Vickey Kumar",
  pronouns: "He/Him",
  age: ${age},
  location: "New Delhi, India",
  education: {
    degree: "B.Tech in Computer Science & Applied Mathematics",
    institution: "IIIT Delhi",
    status: "Final Year Student"
  },
  passions: [
    "AI/ML Engineering", 
    "Full-Stack Development", 
    "Open-Source"
  ],
  mission: "To build inclusive and intelligent systems that solve meaningful problems."
};`;

  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
           <motion.img
            src={"src/assets/myphoto.jpg"}
            alt="Vickey Kumar Profile Picture"
            className="hero-profile-image"
            whileHover={{ scale: -1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm Vickey Kumar Welcome you in </span>
          </motion.div>
          
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
          TicVic Tech
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Software Developer & AI/ML Engineer
          </motion.h2>
          
          {/* --- EDITED: Updated hero description to match --- */}
         <motion.p className="hero-description" variants={fadeInUp}>
          Passionate about building inclusive technology, I bridge the gap between complex machine learning and accessible full-stack development.
          I leverage tools like{" "}
          <span className="tech-tool">Django</span>,{" "}
          <span className="tech-tool">React</span>,{" "}
          <span className="tech-tool">Machine Learning </span>,{" "}
          <span className="tech-tool">Deep Learning Models</span>,{" "}
          <span className="tech-tool">Gemini</span>, and{" "}
          <span className="tech-tool">OpenAI</span> to architect intelligent systems
          that create meaningful, real-world impact.
        </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#contacts"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {""}
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/Vickey21299/" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/vickey-kumar-593b7b284/" target="_blank">
              <i className="fab fa-linkedin"> </i>
            </motion.a>
            <motion.a href="https://x.com/Vickey21299er.com" target="_blank">
              <i className="fab fa-twitter"> </i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          
          <div
            className="code-display"
            style={{
              overflow: "auto",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE 10+
            }}
          >
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                  margin: 0,
                  padding: "2rem",
                  borderRadius: "25px",
                  background: "rgba(30, 41, 59, 0.8)",
                  backdropFilter: "blur(10px)",
                  width: "100%",
                  overflow: "auto",
                  scrollbarWidth: "none", // Firefox
                  msOverflowStyle: "none", // IE 10+
                }}
              wrapLines={true}
            >
              {aboutMeCode}
            </SyntaxHighlighter>
            <style>
              {`
                .code-display::-webkit-scrollbar {
                  display: none;
                }
                .code-display {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
                .code-display pre::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
          </div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                Currently working on something awesome  at C4GT'25!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
