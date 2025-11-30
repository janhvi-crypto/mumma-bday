import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import confetti from "canvas-confetti";
import { memories, Memory } from "@/data/memories";
import { Button } from "@/components/ui/button";

const PhotoGallery = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [audioPlaying, setAudioPlaying] = useState<HTMLAudioElement | null>(null);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideshowAudio, setSlideshowAudio] = useState<HTMLAudioElement | null>(null);
  const slideshowTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handlePhotoClick = (memory: Memory, skipAudio = false) => {
    // Stop previous audio if playing (but not during slideshow)
    if (audioPlaying && !isSlideshow) {
      audioPlaying.pause();
      audioPlaying.currentTime = 0;
    }

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

    // Play audio if available (but not during slideshow)
    if (memory.audio && !skipAudio && !isSlideshow) {
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
    if (slideshowAudio) {
      slideshowAudio.pause();
      slideshowAudio.currentTime = 0;
      setSlideshowAudio(null);
    }
    setSelectedMemory(null);
    setIsSlideshow(false);
  };

  const startSlideshow = () => {
    setIsSlideshow(true);
    setCurrentIndex(0);
    
    // Play memory3 audio for the entire slideshow
    const audio = new Audio('/audios/memory3.mp3');
    audio.loop = true;
    audio.play().catch(err => console.log("Slideshow audio playback failed:", err));
    setSlideshowAudio(audio);
    
    handlePhotoClick(memories[0], true);
  };

  const stopSlideshow = () => {
    setIsSlideshow(false);
    if (slideshowTimerRef.current) {
      clearTimeout(slideshowTimerRef.current);
    }
    if (slideshowAudio) {
      slideshowAudio.pause();
      slideshowAudio.currentTime = 0;
      setSlideshowAudio(null);
    }
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % memories.length;
    setCurrentIndex(nextIndex);
    handlePhotoClick(memories[nextIndex], true);
  };

  const goToPrevious = () => {
    const prevIndex = currentIndex === 0 ? memories.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    handlePhotoClick(memories[prevIndex], true);
  };

  // Auto-advance slideshow
  useEffect(() => {
    if (isSlideshow && selectedMemory) {
      slideshowTimerRef.current = setTimeout(() => {
        goToNext();
      }, 10000); // 10 seconds per slide
    }

    return () => {
      if (slideshowTimerRef.current) {
        clearTimeout(slideshowTimerRef.current);
      }
    };
  }, [isSlideshow, currentIndex, selectedMemory]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-soft-pink to-cream relative overflow-hidden">
      {/* Floating sparkles decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Decorative string */}
      <div className="absolute top-10 left-0 right-0 h-1 bg-gold/30 shadow-sm" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-handwriting text-5xl md:text-6xl text-primary mb-6 drop-shadow-sm">
            Yaadon ki Dori 🎀
          </h2>
          <Button
            onClick={startSlideshow}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-card font-body text-base px-8 py-6 rounded-full transition-all hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Slideshow
          </Button>
        </motion.div>

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
                whileHover={{ y: -10, rotate: 2, scale: 1.05 }}
                animate={{ rotate: index % 2 === 0 ? [-2, 2] : [2, -2] }}
                transition={{
                  rotate: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                }}
                onClick={() => handlePhotoClick(memory)}
                className="group bg-white p-3 shadow-card rounded-xl cursor-pointer hover:shadow-soft transition-all duration-300 border border-primary/10"
              >
                <div className="aspect-square bg-gradient-card rounded-lg overflow-hidden mb-3 relative">
                  <img 
                    src={memory.photo} 
                    alt={`Memory ${memory.id}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-center font-handwriting text-primary text-sm group-hover:text-primary/80 transition-colors">
                  Memory {memory.id}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal with Slideshow */}
      <AnimatePresence mode="wait">
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={!isSlideshow ? handleClose : undefined}
          >
            <motion.div
              key={selectedMemory.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-4 md:p-6 max-w-2xl w-full shadow-soft relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-gold/20 to-transparent rounded-tl-full" />

              {/* Header with controls */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-2">
                  {isSlideshow && (
                    <Button
                      onClick={stopSlideshow}
                      variant="outline"
                      size="sm"
                      className="rounded-full border-primary/30 hover:bg-primary/10"
                    >
                      <Pause className="w-4 h-4 mr-1" />
                      Stop
                    </Button>
                  )}
                  <span className="font-handwriting text-primary text-lg">
                    Memory {selectedMemory.id} / {memories.length}
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-muted rounded-full transition-all hover:rotate-90 duration-300"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>

              {/* Image */}
              <motion.div
                key={`img-${selectedMemory.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="aspect-square max-h-[40vh] bg-gradient-card rounded-xl overflow-hidden mb-4 shadow-card relative"
              >
                <img 
                  src={selectedMemory.photo} 
                  alt={`Memory ${selectedMemory.id}`}
                  className="w-full h-full object-cover"
                />
                {/* Decorative frame overlay */}
                <div className="absolute inset-0 border-4 border-white/40 rounded-xl pointer-events-none" />
              </motion.div>

              {/* Story */}
              <motion.div
                key={`story-${selectedMemory.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10"
              >
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed text-center px-4">
                  {selectedMemory.story}
                </p>

                {audioPlaying && (
                  <div className="mt-6 text-center">
                    <motion.p
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="font-handwriting text-primary text-2xl"
                    >
                      🎵 Music playing...
                    </motion.p>
                  </div>
                )}
              </motion.div>

              {/* Navigation buttons for slideshow */}
              {isSlideshow && (
                <div className="flex items-center justify-center gap-4 mt-8">
                  <Button
                    onClick={goToPrevious}
                    variant="outline"
                    size="lg"
                    className="rounded-full border-primary/30 hover:bg-primary/10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <div className="flex gap-2">
                    {memories.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentIndex ? "bg-primary w-8" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <Button
                    onClick={goToNext}
                    variant="outline"
                    size="lg"
                    className="rounded-full border-primary/30 hover:bg-primary/10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
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
