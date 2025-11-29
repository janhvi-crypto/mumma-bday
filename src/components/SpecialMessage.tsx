import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const SpecialMessage = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-soft-pink to-blush">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft relative overflow-hidden"
        >
          {/* Decorative hearts */}
          <div className="absolute top-4 right-4 opacity-20">
            <Heart className="w-16 h-16 text-primary fill-primary animate-float" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-20">
            <Heart className="w-12 h-12 text-primary fill-primary animate-float" style={{ animationDelay: '1s' }} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <h3 className="font-handwriting text-4xl md:text-5xl text-primary text-center mb-8">
              Mumma ke liye kuch khaas baatein... ❤️
            </h3>

            <div className="space-y-6 font-body text-lg md:text-xl text-foreground/90 leading-relaxed">
              <p className="text-center">
                Mumma, aap itni amazing ho ki words kam pad jaate hain...
              </p>
              
              <p className="text-center">
                Aapke haath idli sambar aur dosa (hint de rhi hu aapko), har zodiac signs ki baatein, har din ka daant –<br />
                yeh sab hi toh hai jo ghar ko ghar banata hai.
              </p>

             

              <p className="text-center font-handwriting text-2xl text-primary mt-8">
                Thank you for being YOU, Mumma.<br />
                Aap ho, toh sab kuch perfect hai ❤️ ✨
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialMessage;
