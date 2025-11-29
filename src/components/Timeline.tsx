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
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-b from-cream to-soft-pink">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-6xl lg:text-7xl text-primary text-center mb-16 lg:mb-20 font-semibold"
        >
          Chain of Memories
        </motion.h2>

        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 hidden md:block rounded-full" />

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
                className={`relative flex items-center mb-16 lg:mb-20 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${isEven ? "md:text-right md:pr-8 lg:pr-12" : "md:text-left md:pl-8 lg:pl-12"} text-center`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105">
                    <p className="font-body text-lg lg:text-xl text-foreground/90 leading-relaxed">
                      {memory.text}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-soft border-4 border-white">
                  <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                </div>

                {/* Mobile icon */}
                <div className="md:hidden flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-soft my-4 border-4 border-white">
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
