import { motion } from "framer-motion";
import { Coffee, Gift, Heart, Star } from "lucide-react";
import { timelineMemories } from "@/data/memories";

const iconMap = {
  Coffee,
  Gift,
  Heart,
  Star,
};

const Timeline = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cream to-soft-pink">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-handwriting text-5xl md:text-6xl text-primary text-center mb-16"
        >
          Chain of Memories ✨
        </motion.h2>

        <div className="relative">
          {/* Central line with decorative elements */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/30 via-primary/20 to-primary/30 hidden md:block" />
          {/* Decorative dots along the timeline */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gold rounded-full hidden md:block"
              style={{ top: `${(i + 1) * 12}%` }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}

          {timelineMemories.map((memory, index) => {
            const Icon = iconMap[memory.icon as keyof typeof iconMap];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${isEven ? "md:text-right" : "md:text-left"} text-center`}>
                  <motion.div 
                    className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300 border border-primary/10 relative overflow-hidden group"
                    whileHover={{ y: -5 }}
                  >
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl" />
                    <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-gold/10 to-transparent rounded-tr-3xl" />
                    
                    <p className="font-body text-lg text-foreground/90 relative z-10">
                      {memory.text}
                    </p>
                  </motion.div>
                </div>

                {/* Icon with glow */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-soft relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg animate-pulse" />
                  <Icon className="w-8 h-8 text-white relative z-10 drop-shadow-lg" />
                </div>

                {/* Mobile icon */}
                <div className="md:hidden flex items-center justify-center w-16 h-16 bg-primary rounded-full shadow-soft my-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Spacer */}
                <div className="w-full md:w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
