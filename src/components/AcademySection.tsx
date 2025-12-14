import { motion } from "framer-motion";
import { GraduationCap, School, Presentation, Calendar, Users, Rocket } from "lucide-react";

const features = [
  { icon: GraduationCap, text: "VR & AR experiential learning programs" },
  { icon: School, text: "Tie-ups with schools, colleges & institutions" },
  { icon: Presentation, text: "Tech demonstrations & workshops" },
  { icon: Calendar, text: "Innovation events & exhibitions" },
  { icon: Users, text: "Inter-college & inter-school collaborations" },
  { icon: Rocket, text: "Career exposure to XR, gaming, AI & future tech" },
];

const AcademySection = () => {
  return (
    <section className="py-32 bg-surface-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
            Education & Experience Zone
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            NETWORK GLOBAL
            <span className="block text-gradient-gold">ACADEMY</span>
          </h2>
          <div className="line-gold max-w-xs mx-auto mb-8" />
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-secondary-foreground leading-relaxed mb-8">
              The Academy is a hands-on learning and experience zone where Network Global 
              collaborates with schools, colleges, institutions, and youth communities to 
              introduce next-generation technologies.
            </p>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20">
              <p className="text-gold font-display font-semibold text-lg">
                "Not just education — real-world experience of future technologies."
              </p>
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group p-5 rounded-xl bg-secondary/50 border border-border/50 hover:border-gold/30 transition-all duration-300"
              >
                <feature.icon className="w-6 h-6 text-gold mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-secondary-foreground leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;
