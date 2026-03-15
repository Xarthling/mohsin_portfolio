import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import data from "../utils/data.json";
import ContactIllustration from "../assets/Contact.svg?react";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
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
  
  // --- EmailJS Logic ---
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    emailjs.init('G3ZvQts_et4Qp-nUD');
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = 'default_service';
    const templateID = 'template_8g5rgns';

    emailjs.sendForm(serviceID, templateID, formRef.current)
      .then(() => {
        setIsSending(false);
        // alert('Sent!');
        formRef.current.reset();
      }, (err) => {
        setIsSending(false);
        // alert(JSON.stringify(err));
      });
  };
  // ----------------------

  const contactLinks = [
    { label: "GitHub", href: github },
    { label: "LinkedIn", href: linkedin },
    { label: "Email", href: `mailto:${email}` },
    ...(website && website !== "#" ? [{ label: "Website", href: website }] : []),
  ];

  return (
    <SectionWrapper
      id="contact"
      className="relative min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12 py-20 px-4 md:px-10"
    >
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

        {/* Updated Form with Ref and Submit Handler */}
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 w-full max-w-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              required
              name="name" // Ensure this matches your EmailJS template variable
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                         bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm 
                         placeholder-gray-500 dark:placeholder-gray-400 
                         focus:ring-2 focus:ring-indigo-400 outline-none transition-all w-full"
            />
            <input
              required
              name="email" // Ensure this matches your EmailJS template variable
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                         bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm 
                         placeholder-gray-500 dark:placeholder-gray-400 
                         focus:ring-2 focus:ring-indigo-400 outline-none transition-all w-full"
            />
          </div>
          <textarea
            required
            name="message" // Ensure this matches your EmailJS template variable
            placeholder="How can I help you?"
            rows={5}
            className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                       bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm 
                       placeholder-gray-500 dark:placeholder-gray-400 
                       focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
          />
          <Button 
            type="submit" 
            disabled={isSending}
            className="w-full md:w-max px-8 py-4 shadow-lg shadow-indigo-500/20 disabled:opacity-70"
          >
            {isSending ? "Sending..." : "Send Message"}
          </Button>
        </form>

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

      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <div
          className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full blur-[80px] md:blur-[120px] 
                     bg-indigo-400/20 dark:bg-indigo-600/20 pointer-events-none"
        />

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