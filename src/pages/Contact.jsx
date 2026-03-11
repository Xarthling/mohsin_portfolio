import { motion } from "framer-motion";
import data from "../utils/data.json";
import ContactIllustration from "../assets/Contact.svg?react";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 }, // Changed to whileInView for better UX
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay: 0.2 },
};

const Contact = () => {
  const { github, linkedin, email, website } = data.contact;

  const contactLinks = [
    { label: "GitHub", href: github },
    { label: "LinkedIn", href: linkedin },
    { label: "Email", href: `mailto:${email}` },
    ...(website && website !== "#" ? [{ label: "Website", href: website }] : []),
  ];

  return (
    <SectionWrapper
      id="contact"
      // Changed h-screen to min-h-screen and added padding for mobile
      className="relative min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12 py-20 px-4 md:px-10"
    >
      {/* Left Side: Text + Form + Links */}
      <motion.div
        className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/2 z-10"
        {...fadeUp}
      >
        <div className="text-center md:text-left">
          <h2 className="heading">Get In Touch</h2>
          <p className="max-w-md text-gray-600 dark:text-gray-300">
            Feel free to reach out for collaboration, questions, or just to say hi! 
            I'm currently open to new opportunities.
          </p>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4 w-full max-w-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Your Name", "Your Email"].map((placeholder, i) => (
              <input
                key={i}
                type={placeholder.includes("Email") ? "email" : "text"}
                placeholder={placeholder}
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                           bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm 
                           placeholder-gray-500 dark:placeholder-gray-400 
                           focus:ring-2 focus:ring-indigo-400 outline-none transition-all w-full"
              />
            ))}
          </div>
          <textarea
            placeholder="How can I help you?"
            rows={5}
            className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                       bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm 
                       placeholder-gray-500 dark:placeholder-gray-400 
                       focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
          />
          <Button type="submit" className="w-full md:w-max px-8 py-4 shadow-lg shadow-indigo-500/20">
            Send Message
          </Button>
        </form>

        {/* Contact Links */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm font-medium text-gray-500 dark:text-gray-400">
          {contactLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border-b border-transparent hover:border-indigo-400"
            >
              {label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Right Side: Illustration */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        {/* Optimized Background Glow */}
        <div
          className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full blur-[80px] md:blur-[120px] 
                     bg-indigo-400/20 dark:bg-indigo-600/20 pointer-events-none"
        />

        {/* Illustration - Responsive sizing using clamp or percentages */}
        <motion.div 
          {...fadeInRight}
          className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] z-10"
        >
          <ContactIllustration className="w-full h-auto drop-shadow-2xl text-gray-800 dark:text-gray-50" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;