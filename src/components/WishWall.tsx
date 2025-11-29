import { motion } from "framer-motion";
import { Heart, Sparkles, MessageCircle } from "lucide-react";

interface Wish {
  id: number;
  name: string;
  message: string;
  color: string;
}

const wishes: Wish[] = [
  {
    id: 1,
    name: "Papa",
    message: "Happy Birthday my dear! You make our house a home with your love and warmth. ❤️",
    color: "from-pink-100 to-pink-200"
  },
  {
    id: 2,
    name: "Bhaiya",
    message: "Mumma, you're the best! Thanks for everything you do for us. Love you tons! 🎂",
    color: "from-purple-100 to-purple-200"
  },
  {
    id: 3,
    name: "Dadi",
    message: "Janamdin mubarak ho beta! Hamesha khush raho. Bahut pyaar karte hain tumhe. 🌟",
    color: "from-yellow-100 to-yellow-200"
  },
  {
    id: 4,
    name: "Mausi",
    message: "Happy Birthday didi! You inspire us all with your strength and kindness. 💕",
    color: "from-blue-100 to-blue-200"
  },
  {
    id: 5,
    name: "Chacha",
    message: "Many many happy returns of the day! Aap hamesha aise hi muskurati rahein. 🎉",
    color: "from-green-100 to-green-200"
  },
  {
    id: 6,
    name: "Beta",
    message: "Mumma, you're my superhero! Thank you for all the love and sacrifices. I love you so much! 💝",
    color: "from-rose-100 to-rose-200"
  }
];

const WishWall = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-gradient-to-b from-cream to-soft-pink relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Heart className="w-12 h-12 text-primary fill-primary" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-10 h-10 text-primary" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <MessageCircle className="w-14 h-14 text-primary" />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-display text-4xl lg:text-6xl text-primary mb-4">
            Wish Wall
          </h2>
          <p className="font-body text-lg lg:text-xl text-foreground/70">
            Sabki taraf se dher saari shubhkamnaayein ✨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -8, 
                rotate: Math.random() * 4 - 2,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${wish.color} p-6 lg:p-8 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 relative overflow-hidden`}>
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-bl-full opacity-50" />
                
                {/* Heart icon */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center shadow-sm">
                      <span className="font-display text-xl text-primary font-semibold">
                        {wish.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-display text-xl lg:text-2xl text-foreground font-semibold">
                      {wish.name}
                    </h3>
                  </div>

                  <p className="font-body text-base lg:text-lg text-foreground/80 leading-relaxed">
                    {wish.message}
                  </p>
                </div>

                {/* Bottom sparkle */}
                <div className="absolute bottom-4 right-4 opacity-20">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add your own wish CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="inline-block bg-white/70 backdrop-blur-sm rounded-full px-8 py-4 shadow-soft">
            <p className="font-playful text-xl lg:text-2xl text-primary">
              Aur bhi bahut saari duaaein aapke liye... 💝
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WishWall;
