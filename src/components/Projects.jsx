import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa"; // Icon for project links
// --- 1. IMPORT YOUR IMAGES HERE ---
import chatmroImg from "../assets/projects/chatmro.png";
import deepLearningImg from "../assets/projects/deep-learning.png";
import federatedLearningImg from "../assets/projects/federated-learning.png";
import wasteClassifierImg from "../assets/projects/waste-classifier.png";
import placeholderImg from "../assets/projects/unnamed.jpg";
import hcl_software_logo from "../assets/projects/hcl_software.jpg";
import bank_logo from "../assets/projects/download.jpg";
import calender from "../assets/projects/calender.png";

// Animation variants for Framer Motion
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

export const Projects = () => {
  const myProjects = [
    {
      title: "Enterprise Multi-Agent AI Platform",
      Position_comapny: "Software Engineer II , HCL Software",
      description:
        "Architected a multi-agent AI orchestration system for enterprise IT automation using RAG, GPT-4, and Llama-2-70B, enabling autonomous workflows across 500+ enterprise clients.",
      tech: ["RAG", "GPT-4", "Llama-2", "Vector Search", "Python", "Agentic AI"],
      imageUrl: hcl_software_logo,
      type: "Work Experience",
      date: "Sept 2025 – Present",
    },
    {
      title: "ChatMRO – Industrial RAG Search Platform",
      Position_comapny: "SDE & ML Intern , Raptor Supplies",
      description:
        "Developing a generative AI platform for MRO industries using React, Django, and WebSockets, including a custom ML model for MPN extraction.",
      tech: ["React.js", "Django", "WebSockets", "NLU", "RAG", "LLM", "Python"],
      imageUrl: chatmroImg,
      link: "https://www.chatmro.com/",
      type: "Work Experience",
      date: "Jan 2025 – Present",
    },
    {
      title: "Multilingual Voice Banking AI Agent",
      Position_comapny: "Open Source Contributor , C4GT - Mifos",
      description:
        "Built a multilingual voice AI banking assistant supporting 22+ languages using ASR, RAG, and LangGraph for transfers, loans, and banking workflows with sub-2s latency.",
      tech: ["LangGraph", "RAG", "ASR", "LLM", "Python", "Voice AI"],
      imageUrl: bank_logo,
      link: "https://github.com/openMF/community-ai/tree/main/Voice-Driven_banking-Lam",
      type: "Open Source",
      date: "July 2025 – Sept 2025",
    },
    {
      title: "Real-Time Voice Scheduler AI Agent",
      Position_comapny: "Agentic AI Project",
      description:
        "Built a real-time voice and text AI scheduling agent using LangGraph and Google Calendar APIs for context-aware meeting automation.",
      tech: ["LangGraph", "Google Calendar API", "LLM", "React", "Python"],
      imageUrl: calender,
      link: "https://github.com/Vickey21299/Google-Calendar-Schedular-Ai-Agent",
      type: "Personal Project",
      date: "Jan 2026 – March 2026",
    },
    {
      title: "EM Field Reconstruction via Generative Models",
      Position_comapny: "Academic Research , IIIT Delhi",
      description:
        "Developed deep learning models (UNet, FCN) for EM field image reconstruction, achieving a Mean Absolute Error of 0.002.",
      tech: ["PyTorch", "UNet", "GANs", "Python", "TensorFlow"],
      imageUrl: deepLearningImg,
      link: "https://docs.google.com/presentation/d/1LZOjxnTgICsM02kUfMr8Ebj32wuvH_X2UsnJ3xIA9w0/edit?slide=id.g2a58532d049_0_0#slide=id.g2a58532d049_0_0",
      type: "Personal Project",
      date: "Aug 2024 – Present",
    },
    {
      title: "NIFTY50 IV Forecasting System",
      Position_comapny: "Financial ML Project",
      description:
        "Developed a machine learning system for implied volatility prediction on NIFTY50 options using XGBoost, Neural Networks, and statistical feature engineering.",
      tech: ["XGBoost", "Neural Networks", "Finance ML", "Python", "Pandas"],
      imageUrl: placeholderImg,
      link: "#",
      type: "Personal Project",
      date: "May 2025 – June 2025",
    },
    {
      title: "Privacy-Preserving Crowd Detection System",
      Position_comapny: "Research Intern , IIIT Delhi",
      description:
        "Developed privacy-preserving federated learning models for real-time crowd detection, achieving 81.2% accuracy while ensuring data confidentiality.",
      tech: ["Federated Learning", "TensorFlow", "TFLite", "Android"],
      imageUrl: federatedLearningImg,
      link: "#",
      type: "Research Intern",
      date: "May 2024 – Sept 2024",
    },
    {
      title: "Smart Waste Classification using CNNs",
      Position_comapny: "Student Project , IIIT Delhi",
      description:
        "Built a waste classifier using CNNs and VGG16, achieving 90% accuracy through custom architectures and data augmentation.",
      tech: ["CNNs", "VGG16", "Scikit-learn", "TensorFlow"],
      imageUrl: wasteClassifierImg,
      link: "https://github.com/Vickey21299/Statistical-Machine-Learning",
      type: "Personal Project",
      date: "Jan 2024 – May 2024",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Projects & Experience
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {myProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: `url('${project.imageUrl}')` }}
              whileHover={{ scale: 1, transition: { duration: 0.2 } }}
            >
              <span className="project-type-badge">{project.type}</span>
            </motion.div>
            <div className="project-card-content">
              <h3>
                {project.title}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`Link to ${project.title}`}
                >
                  <FaLink />
                </a>
              </h3>
               <p className="project-date">{project.Position_comapny}</p>
              <p className="project-date">{project.date}</p>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="more-projects"
        style={{ marginTop: "2rem", textAlign: "center" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>
          If you want to see more projects, please visit this{" "}
          <a
            href="https://github.com/Vickey21299/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4078c0", textDecoration: "underline", fontWeight: "bold" }}
          >
            <i className="fab fa-github" style={{ marginRight: "0.5em" }}></i>
            GitHub
          </a>
        </span>
      </motion.div>
    </motion.section>
  );
};