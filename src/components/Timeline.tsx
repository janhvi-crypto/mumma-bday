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
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block" />

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
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300">
                    <p className="font-body text-lg text-foreground/90">
                      {memory.text}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center w-16 h-16 bg-primary rounded-full shadow-soft">
                  <Icon className="w-8 h-8 text-white" />
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
