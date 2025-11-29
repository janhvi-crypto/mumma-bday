import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 lg:py-20 bg-gradient-to-t from-primary/10 to-transparent">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 lg:gap-4 mb-6">
            <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-primary animate-sparkle" />
            <Heart className="w-8 h-8 lg:w-10 lg:h-10 text-primary fill-primary animate-pulse" />
            <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-primary animate-sparkle" style={{ animationDelay: '1s' }} />
          </div>

          <p className="font-playful text-2xl md:text-3xl lg:text-4xl text-primary mb-3">
            Made with pyaar by your agyakaari putri ❤️
          </p>
          
          <p className="font-body text-lg lg:text-xl text-foreground/70">
            🙏 Charan Sparsh
          </p>

          <div className="mt-10 pt-8 border-t border-primary/20">
            <p className="font-body text-sm lg:text-base text-muted-foreground">
              Birthday Special {new Date().getFullYear()} • With love and gratitude 💕
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
