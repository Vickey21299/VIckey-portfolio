import "./App.css";
import { Toaster } from 'react-hot-toast'; // Import the Toaster for notifications
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="app loaded">
      {/* Toaster component for pop-up notifications from the contact form */}
      <Toaster 
        position="top-center"
        toastOptions={{
          // Define default options
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />

      <Navbar />
      <Hero />
      <Projects />
      <Contact />

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p> &copy; 2025 Vickey Kumar. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;