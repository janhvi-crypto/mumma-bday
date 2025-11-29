import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Floating sparkles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -100],
              x: Math.random() * 100 - 50,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="text-primary w-6 h-6" />
          </motion.div>
        ))}
      </div>

      {/* Polka dots pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <Heart className="w-20 h-20 lg:w-24 lg:h-24 text-primary fill-primary mx-auto drop-shadow-lg" />
          </motion.div>

          <motion.h1
            className="font-display text-6xl md:text-8xl lg:text-9xl text-primary mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Happy Birthday
          </motion.h1>
          
          <motion.h2
            className="font-handwriting text-5xl md:text-7xl lg:text-8xl text-primary mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Mumma ❤️
          </motion.h2>

          <motion.p
            className="font-body text-xl md:text-2xl lg:text-3xl text-foreground/80 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Aaj ka din sirf aapke liye…
            <br />
            ek chhota sa surprise, ek chhoti si yaadon ki duniya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16"
          >
            <div className="inline-block px-10 py-5 bg-white/70 backdrop-blur-sm rounded-full shadow-soft hover:shadow-card transition-all duration-300">
              <p className="font-playful text-2xl lg:text-3xl text-primary">
                Scroll down for your surprise ✨
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
