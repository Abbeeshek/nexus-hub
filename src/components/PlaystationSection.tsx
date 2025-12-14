import { motion } from "framer-motion";
import { Gamepad2, Glasses, Armchair, Monitor, BrainCircuit, Zap } from "lucide-react";

const features = [
  { icon: Glasses, text: "VR & AR devices" },
  { icon: Gamepad2, text: "Gaming & simulation setups" },
  { icon: Armchair, text: "XR-ready chairs & accessories" },
  { icon: Monitor, text: "Complete PlayStation & immersive room setups" },
  { icon: BrainCircuit, text: "Use-cases beyond gaming: learning, training, simulation & collaboration" },
];

const PlaystationSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

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
            Future Experience & Product Zone
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            NETWORK GLOBAL
            <span className="block text-gradient-gold">PLAYSTATION HUB</span>
          </h2>
          <div className="line-gold max-w-xs mx-auto mb-8" />
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl bg-gradient-to-br from-secondary/80 to-card border border-border/50 overflow-hidden"
        >
          {/* Top Gold Line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          
          <div className="p-8 md:p-12 lg:p-16">
            <p className="text-xl text-secondary-foreground leading-relaxed mb-12 max-w-3xl">
              This zone is designed as a future experience and product hub, where people can explore, 
              purchase, and set up immersive technology environments.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/30 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-secondary-foreground text-sm leading-relaxed pt-2">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Purpose Line */}
            <div className="flex items-center gap-4 p-6 rounded-xl bg-background/50 border border-gold/20">
              <Zap className="w-6 h-6 text-gold flex-shrink-0" />
              <p className="text-gold font-display font-semibold text-lg">
                "Built for the future — not only for games, but for education, work, and immersive experiences."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlaystationSection;
