import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const VisionSection = () => {
  return (
    <section className="py-32 bg-surface-dark relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-[200px] pointer-events-none" />
      </div>

      {/* Top & Bottom Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-gold/10 flex items-center justify-center animate-float">
              <Globe className="w-10 h-10 text-gold" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-6 block"
          >
            Our Vision
          </motion.span>

          {/* Vision Statement */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Quote Marks */}
            <span className="absolute -top-8 -left-4 text-gold/20 text-8xl font-serif">"</span>
            <span className="absolute -bottom-16 -right-4 text-gold/20 text-8xl font-serif">"</span>
            
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed">
              To build future-ready physical hubs where{" "}
              <span className="text-gradient-gold">education</span>,{" "}
              <span className="text-gradient-gold">immersive technology</span>, and{" "}
              <span className="text-gradient-gold">community collaboration</span>{" "}
              come together under one unified Network Global ecosystem.
            </p>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
