import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

// Animation variants (no changes needed here)
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState("");

  const handleCopy = (textToCopy, type, fieldKey) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(fieldKey);
    toast.success(`${type} copied to clipboard!`);
    setTimeout(() => setCopied(""), 1200);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    toast.promise(
      emailjs.send(serviceId, templateId, formData, publicKey),
      {
        loading: 'Sending message...',
        success: () => {
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
          return 'Message sent! I will contact you shortly.';
        },
        error: () => {
          setIsSubmitting(false);
          return 'Failed to send message. Please try again.';
        },
      }
    );
  };

  return (
    <motion.section id="contact" className="contact">
      {/* Add Toaster here for local popups */}
      <Toaster position="bottom-center" reverseOrder={false} />

      <motion.h2 variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
        Get in Touch
      </motion.h2>

      <div className="contact-container">
        <motion.div className="contact-info" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
          
          <motion.div className="info-item" variants={fadeInUp}>
            <FaPhone className="info-icon" />
            <div>
              <h4>Phone</h4>
              <p style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
                +91-9315222516
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleCopy('+91-9315222516', 'Phone', 'phone')}
                  title="Copy Phone"
                >
                  {copied === "phone" ? <FaCheck color="green" /> : <FaRegCopy />}
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div className="info-item" variants={fadeInUp}>
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Personal Email</h4>
              <p style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
                vkkumar1763@gmail.com
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleCopy('vkkumar1763@gmail.com', 'Email', 'personal')}
                  title="Copy Email"
                >
                  {copied === "personal" ? <FaCheck color="green" /> : <FaRegCopy />}
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div className="info-item" variants={fadeInUp}>
            <FaEnvelope className="info-icon" />
            <div>
              <h4>University Email</h4>
              <p style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
                Vickey21299@iiitd.ac.in
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleCopy('Vickey21299@iiitd.ac.in', 'Email', 'university')}
                  title="Copy Email"
                >
                  {copied === "university" ? <FaCheck color="green" /> : <FaRegCopy />}
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div className="contact-socials" variants={fadeInUp}>
              <a href="https://github.com/Vickey21299/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/vickey-kumar-593b7b284/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://x.com/Vickey21299er.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </motion.div>
        </motion.div>

        <motion.form className="contact-form" onSubmit={handleSubmit} variants={fadeInUp}>
            <input type="text" name="name" placeholder="Your Name..." required value={formData.name} onChange={handleInputChange}/>
            <input type="email" name="email" placeholder="Your Email..." required value={formData.email} onChange={handleInputChange}/>
            <textarea name="message" placeholder="Your Message..." required value={formData.message} onChange={handleInputChange}></textarea>
            <motion.button className="submit-btn" type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};