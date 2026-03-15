import SectionWrapper from "../components/SectionWrapper";
import Card from "../components/Card";
import data from "../utils/data.json";
import Icon from "../assets/Sign-Logo/minisign.svg?react";
import { motion } from "framer-motion";

const Achievements = () => {
  const testimonials = data.testimonials;

  return (
    <SectionWrapper id="achievements">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-16 md:py-24 my-10 border-t border-neutral-800 border rounded-[3rem] collab-bg grain-overlay relative overflow-hidden shadow-2xl"
        style={{ 
          backgroundImage: `url(${data.cta.image})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row px-8 md:px-16 items-center md:items-end justify-between gap-8 mb-16 relative z-20">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 text-emerald-400 font-black uppercase tracking-[0.3em] text-xs mb-6 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <Icon className="w-5 h-5 fill-current" /> Testimonials
            </motion.p>
            <h2 className="heading text-white ">
              Success leaves clues.
            </h2>
          </div>
        
        </div>

        {/* Marquee Section */}
        <div className="relative w-full cursor-grab active:cursor-grabbing">
          {/* Enhanced Edge Fades */}
          {/* <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/40 via-black/10 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/40 via-black/10 to-transparent z-10 pointer-events-none" /> */}

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-10 py-6 px-4 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }} // Essential for infinite loop with 2x array
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              whileHover={{ animationPlayState: "paused" }} // Interaction: pause on hover
            >
              {/* Duplicate the array for a seamless loop */}
              {[...testimonials, ...testimonials].map((item, idx) => (
                <Card
                  key={idx}
                  className="w-[320px] md:w-[500px] p-8 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] flex-shrink-0 whitespace-normal group hover:border-indigo-500/50 transition-colors duration-500"
                >
                  <div className="relative">
                    {/* Quotation Mark Decoration */}
                    <span className="absolute -top-4 -left-4 text-6xl text-gray-200/50 font-serif leading-none select-none">“</span>
                    
                    <p className="text-lg md:text-xl text-neutral-100 font-medium italic mb-8 leading-relaxed relative z-10">
                      {item.text}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-10 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
                    <div className="flex flex-col">
                      <span className="text-sm md:text-base text-white font-bold tracking-wide uppercase">
                        {item.author}
                      </span>
                      <span className="text-xs text-emerald-400/80 font-medium uppercase tracking-widest">
                        Collaborator
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Achievements;