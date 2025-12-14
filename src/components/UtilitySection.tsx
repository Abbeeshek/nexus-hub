import { motion } from "framer-motion";
import { Package, Truck, Users, MessageCircle, CalendarCheck, Lightbulb } from "lucide-react";

const features = [
  { icon: Package, text: "Storage & management of all essential equipment" },
  { icon: Truck, text: "Distribution point for academy & PlayStation setups" },
  { icon: Users, text: "Official meet-up place for members" },
  { icon: MessageCircle, text: "Association-wise discussions & planning" },
  { icon: CalendarCheck, text: "Activity coordination & execution hub" },
  { icon: Lightbulb, text: "Idea-sharing, strategy meets & collaboration sessions" },
];

const UtilitySection = () => {
  return (
    <section className="py-32 bg-surface-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-[60%] line-gold-vertical" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-[60%] line-gold-vertical" />

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
            Operations & Community
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            NETWORK GLOBAL
            <span className="block text-gradient-gold">UTILITY & MEMBERSHIP HUB</span>
          </h2>
          <div className="line-gold max-w-xs mx-auto mb-8" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-secondary-foreground leading-relaxed text-center max-w-3xl mx-auto mb-16"
        >
          This space acts as the operational backbone of the checkpoint and a community 
          meet-up center for Network Global members.
        </motion.p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-gold/30 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <p className="text-secondary-foreground leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Purpose Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 max-w-2xl mx-auto"
        >
          <p className="text-gold font-display font-semibold text-xl">
            "Where ideas meet execution and community turns into action."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UtilitySection;
