import { motion } from "framer-motion";
import { GraduationCap, Gamepad2, Users } from "lucide-react";

const activities = [
  {
    icon: GraduationCap,
    title: "Academy",
    subtitle: "Knowledge & Exposure",
    color: "from-gold/20 to-gold/5",
  },
  {
    icon: Gamepad2,
    title: "PlayStation Hub",
    subtitle: "Experience & Technology",
    color: "from-gold/15 to-gold/5",
  },
  {
    icon: Users,
    title: "Utility Space",
    subtitle: "Operations & Community",
    color: "from-gold/20 to-gold/5",
  },
];

const CheckPointSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(43 74% 49% / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(43 74% 49% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="section-container relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            ONE CHECK POINT
            <span className="block text-gradient-gold mt-2">THREE ACTIVITIES</span>
          </h2>
          <div className="line-gold max-w-lg mx-auto mb-10" />
          <p className="text-xl text-secondary-foreground leading-relaxed max-w-3xl mx-auto">
            At every Network Global Check Point, these three activities operate together — 
            creating a powerful ecosystem of learning, experience, collaboration, and growth.
          </p>
        </motion.div>

        {/* Activity Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="group"
            >
              <div className={`relative h-full p-8 rounded-2xl bg-gradient-to-br ${activity.color} border border-gold/20 hover:border-gold/40 transition-all duration-500 text-center`}>
                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-2xl bg-secondary/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <activity.icon className="w-10 h-10 text-gold" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-gold font-medium">
                  {activity.subtitle}
                </p>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold group-hover:w-1/2 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CheckPointSection;
