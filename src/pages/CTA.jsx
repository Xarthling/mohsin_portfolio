import { motion } from "framer-motion";
import data from "../utils/data.json";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";
import Icon from "../assets/Sign-Logo/minisign.svg?react";
export default function CTA() {
  return (
    <SectionWrapper id="cta">
      <div
        className="py-10 sm:py-16 md:py-20 lg:py-30  my-5 sm:my-10 md:my-15 lg:my-20 border-t border-neutral-800 border rounded-3xl collab-bg grain-overlay relative"
        style={{ backgroundImage: `url(${data.cta.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="max-w-6xl mx-auto px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
             <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 text-emerald-400 font-black uppercase tracking-[0.3em] text-xs mb-6 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <Icon className="w-5 h-5 fill-current" /> Call To Action
            </motion.p>
            <h2 className="heading text-white">
            {data.cta.heading}
            </h2>
          </div>
            <p className=" subtext my-6 text-white max-w-xl">
              {data.cta.description}
            </p>

            <Button
              variant="primary">
              {data.cta.button.label}
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-primary/50 z-0"></div>
      </div>
    </SectionWrapper>
  );
}
<div className="flex flex-col md:flex-row px-8 md:px-16 items-center md:items-end justify-between gap-8 mb-16 relative z-20">
         
        
        </div>