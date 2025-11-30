import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-t from-primary/10 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary animate-sparkle" />
            <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
            <Sparkles className="w-5 h-5 text-primary animate-sparkle" style={{ animationDelay: '1s' }} />
          </div>

          <p className="font-handwriting text-2xl md:text-3xl text-primary mb-2">
            Made with Pyaar by your Agyakaari Putri ❤️
          </p>
          
          <p className="font-body text-lg text-foreground/70">
            🙏 Charan Sparsh
          </p>

          <div className="mt-8 pt-8 border-t border-primary/20">
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
