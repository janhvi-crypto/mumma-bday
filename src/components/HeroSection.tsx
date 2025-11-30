import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Floating sparkles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -120],
              x: Math.random() * 100 - 50,
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="text-primary w-4 h-4 md:w-6 md:h-6 drop-shadow-lg" />
          </motion.div>
        ))}
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-gold/10 to-transparent rounded-tl-full" />
      <div className="absolute top-0 right-0 w-32 h-32 border-8 border-primary/5 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-8 border-gold/5 rounded-tr-full" />

      {/* Polka dots pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 2px, transparent 2px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6 relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
            <Heart className="w-20 h-20 text-primary fill-primary mx-auto drop-shadow-2xl relative" />
          </motion.div>

          <motion.h1
            className="font-handwriting text-5xl md:text-7xl text-primary mb-6 drop-shadow-lg relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="relative inline-block">
              Happy Birthday Mumma ❤️
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-primary/5 via-gold/5 to-primary/5 rounded-2xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="font-body text-xl md:text-2xl text-foreground/80 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Aaj ka din sirf aapke liye…
            <br />
            ek chhota sa surprise, ek chhoti si yaadon ki duniya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12"
          >
            <motion.div 
              className="inline-block px-8 py-4 bg-white/70 backdrop-blur-md rounded-full shadow-soft border-2 border-primary/10 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <p className="font-handwriting text-2xl text-primary relative z-10">
                Scroll down for your surprise ✨
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
