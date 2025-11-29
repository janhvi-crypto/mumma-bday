import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import confetti from "canvas-confetti";
import { memories, Memory } from "@/data/memories";

const PhotoGallery = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [audioPlaying, setAudioPlaying] = useState<HTMLAudioElement | null>(null);

  const handlePhotoClick = (memory: Memory) => {
    // Trigger confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFB6C1', '#FFD700', '#FFC1CC', '#FFE4E1'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFB6C1', '#FFD700', '#FFC1CC', '#FFE4E1'],
      });
    }, 250);

    // Play audio if available
    if (memory.audio) {
      const audio = new Audio(memory.audio);
      audio.play().catch(err => console.log("Audio playback failed:", err));
      setAudioPlaying(audio);
    }

    setSelectedMemory(memory);
  };

  const handleClose = () => {
    if (audioPlaying) {
      audioPlaying.pause();
      audioPlaying.currentTime = 0;
      setAudioPlaying(null);
    }
    setSelectedMemory(null);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-soft-pink to-cream relative overflow-hidden">
      {/* Decorative string */}
      <div className="absolute top-10 left-0 right-0 h-1 bg-gold/30" />
      
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-handwriting text-5xl md:text-6xl text-primary text-center mb-16"
        >
          Yaadon ki Dori 🎀
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Hanging string */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-0.5 h-10 bg-gold/40" />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gold rounded-full" />

              <motion.div
                whileHover={{ y: -10, rotate: 2 }}
                animate={{ rotate: index % 2 === 0 ? [-2, 2] : [2, -2] }}
                transition={{
                  rotate: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                }}
                onClick={() => handlePhotoClick(memory)}
                className="bg-white p-3 shadow-card rounded-lg cursor-pointer hover:shadow-soft transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-card rounded overflow-hidden mb-3">
                  <img 
                    src={memory.photo} 
                    alt={`Memory ${memory.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-handwriting text-primary text-sm">
                  Memory {memory.id}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-soft relative"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-square bg-gradient-card rounded-lg overflow-hidden mb-6">
                <img 
                  src={selectedMemory.photo} 
                  alt={`Memory ${selectedMemory.id}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed text-center">
                {selectedMemory.story}
              </p>

              {audioPlaying && (
                <div className="mt-6 text-center">
                  <p className="font-handwriting text-primary text-xl">
                    🎵 Music playing...
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
