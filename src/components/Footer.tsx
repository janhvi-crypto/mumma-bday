import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-t from-primary/10 to-transparent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-gold/5 to-transparent rounded-tl-full" />
      
      {/* Floating sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-gold drop-shadow-lg" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-8 h-8 text-primary fill-primary drop-shadow-lg" />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Sparkles className="w-6 h-6 text-gold drop-shadow-lg" />
            </motion.div>
          </div>

          <motion.p 
            className="font-handwriting text-3xl md:text-4xl text-primary mb-3 drop-shadow-sm relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative">
              Made with Pyaar by your Agyakaari Putri ❤️
              <motion.div 
                className="absolute -inset-2 bg-primary/5 rounded-2xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.p>
          
          <p className="font-body text-xl text-foreground/80 mb-8">
            🙏 Charan Sparsh
          </p>

          <div className="mt-10 pt-8 border-t-2 border-primary/10 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cream px-4">
              <Sparkles className="w-4 h-4 text-primary/30" />
            </div>
            <p className="font-body text-sm text-muted-foreground">
              Birthday Special {new Date().getFullYear()} • With love and gratitude 💕
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
