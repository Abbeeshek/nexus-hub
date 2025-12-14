import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo Text */}
          <h3 className="font-display text-2xl font-bold text-foreground mb-2">
            NETWORK GLOBAL
          </h3>
          <p className="text-gold text-sm tracking-widest uppercase mb-8">
            Check Point
          </p>

          {/* Divider */}
          <div className="line-gold max-w-xs mx-auto mb-8" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Network Global. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
