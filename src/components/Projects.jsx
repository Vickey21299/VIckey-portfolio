import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa"; // Icon for project links
// --- 1. IMPORT YOUR IMAGES HERE ---
import chatmroImg from "../assets/projects/chatmro.png";
import deepLearningImg from "../assets/projects/deep-learning.png";
import federatedLearningImg from "../assets/projects/federated-learning.png";
import irdWebsiteImg from "../assets/projects/ird-website.png";
import wasteClassifierImg from "../assets/projects/waste-classifier.png";
import navchetnaImg from "../assets/projects/navchetna.jpeg";

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
      title: "Generative AI Platform (Chatmro)",
      Position_comapny : "SDE & MLIntern ,  Raptor Supplies",
      description:
        "Developing a generative AI platform for MRO industries using React, Django, and WebSockets, including a custom ML model for MPN extraction.",
      tech: ["React.js", "Django", "WebSockets", "NLU","RAG","LLM", "Python"],
      imageUrl: chatmroImg, // Replace with your image
      link: "https://www.chatmro.com/", // Replace with your link
      type: "Work Experience",
      date: "Jan 2025 – Present",
    },
    {
      title: "Deep Learning for EM Field Estimation",
      Position_comapny: "Academic Research , IIIT Delhi",
      description:
        "Developed deep learning models (UNet, FCN) for EM field image reconstruction, achieving a Mean Absolute Error of 0.002.",
      tech: ["PyTorch", "UNet", "GANs", "Python", "TensorFlow"],
      imageUrl: deepLearningImg, // Replace with your image
      link: "https://docs.google.com/presentation/d/1LZOjxnTgICsM02kUfMr8Ebj32wuvH_X2UsnJ3xIA9w0/edit?slide=id.g2a58532d049_0_0#slide=id.g2a58532d049_0_0", // Replace with your link
      type: "Personal Project",
      date: "Aug 2024 – Present",
    },
    {
      title: "Federated Learning for Crowd Detection",
      Position_comapny: "Research Intern , IIIT Delhi",
      description:
        "Developed privacy-preserving federated learning models for real-time crowd detection, achieving 81.2% accuracy while ensuring data confidentiality.",
      tech: ["Federated Learning", "TensorFlow", "TFLite", "Android"],
      imageUrl: federatedLearningImg, // Replace with your image
      link: "", // Replace with your link
      type: "Research Intern",
      date: "May 2024 – Sept 2024",
    },
    {
      title: "IRD Website Management",
      Position_comapny: "Student Project , IIIT Delhi",
      description:
        "Engineered a high-performance department website using the MEAN stack with RESTful APIs for scalable data and research paper management.",
      tech: ["Node.js", "Express.js", "MongoDB", "React"],
      imageUrl: irdWebsiteImg, // Replace with your image
      link: "https://github.com/Vickey21299/Statistical-Machine-Learning", // Replace with your link
      type: "Personal Project",
      date: "Jan 2024 – May 2024",
    },
    {
      title: "Automated Waste Classifier",
      Position_comapny: "Student Project , IIIT Delhi",
      description:
        "Built a waste classifier using CNNs and VGG16, achieving 90% accuracy through custom architectures and data augmentation.",
      tech: ["CNNs", "VGG16", "Scikit-learn", "TensorFlow"],
      imageUrl: wasteClassifierImg, // Replace with your image
      link: "https://github.com/Vickey21299/Statistical-Machine-Learning", // Replace with your link
      type: "Personal Project",
      date: "Jan 2024 – May 2024",
    },
    {
      title: "Navchetna Trainee Management Platform",
      Position_comapny: "SDE Intern , SPYM (Ministry of social justice and empowerment)",
      description:
        "Developed a bilingual trainee management platform scaling to 10,000+ users and automated CI/CD with Docker and Kubernetes.",
      tech: ["Kotlin", "Django", "Docker", "Kubernetes" , "SQlite" , "Android studio"],
      imageUrl: navchetnaImg, // Replace with your image
      link: "#", // Replace with your link
      type: "Work Experience",
      date: "June 2023 – Aug 2023",
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