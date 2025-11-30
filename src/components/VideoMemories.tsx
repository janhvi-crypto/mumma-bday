import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import confetti from "canvas-confetti";
import { videoMemories, VideoMemory } from "@/data/memories";

const VideoMemories = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoMemory | null>(null);

  const handleVideoClick = (video: VideoMemory) => {
    // Trigger confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

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

    setSelectedVideo(video);
  };

  const handleClose = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cream to-soft-pink relative overflow-hidden">
      {/* Decorative string */}
      <div className="absolute top-10 left-0 right-0 h-1 bg-gold/30" />
      
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-handwriting text-5xl md:text-6xl text-primary text-center mb-16"
        >
          Video Yaadon Ka Khazana 🎬
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoMemories.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Hanging string with decorative elements */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-0.5 h-12 bg-gradient-to-b from-gold/60 to-gold/30" />
                <motion.div 
                  className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full shadow-sm"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-1 bg-gold/50 rounded-full" />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ y: -10, rotate: 1 }}
                onClick={() => handleVideoClick(video)}
                className="bg-white p-4 shadow-card rounded-2xl cursor-pointer hover:shadow-soft transition-all duration-300 border-2 border-primary/10 relative overflow-hidden group"
              >
                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-2xl" />
                <div className="absolute bottom-0 left-0 w-10 h-10 bg-gradient-to-tr from-gold/5 to-transparent rounded-tr-2xl" />
                
                <div className="aspect-video bg-gradient-card rounded-lg overflow-hidden mb-3 relative group">
                  <video 
                    src={video.video}
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="bg-white/90 rounded-full p-4 backdrop-blur-sm"
                    >
                      <Play className="w-10 h-10 text-primary fill-primary" />
                    </motion.div>
                  </div>
                </div>
                <p className="text-center font-handwriting text-primary text-base relative z-10">
                  {video.title}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl w-full shadow-soft relative border-4 border-white/50 overflow-hidden"
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-gold/20 to-transparent rounded-tl-full" />
              
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-3 hover:bg-muted rounded-full transition-all z-10 bg-white/80 backdrop-blur-sm shadow-sm hover:scale-110 hover:rotate-90 duration-300"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>

              <div className="aspect-video bg-black rounded-2xl overflow-hidden mb-6 shadow-card border-4 border-white/30">
                <video
                  controls
                  autoPlay
                  className="w-full h-full"
                  src={selectedVideo.video}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="relative">
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed text-center px-4 relative z-10">
                  {selectedVideo.caption}
                </p>
                
                {/* Decorative underline */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoMemories;
