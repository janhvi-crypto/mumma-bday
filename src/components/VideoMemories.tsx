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
              {/* Hanging string */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-0.5 h-10 bg-gold/40" />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gold rounded-full" />

              <motion.div
                whileHover={{ y: -10 }}
                onClick={() => handleVideoClick(video)}
                className="bg-white p-3 shadow-card rounded-lg cursor-pointer hover:shadow-soft transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-card rounded overflow-hidden mb-3 relative group">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    🎥
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <p className="text-center font-handwriting text-primary text-sm">
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
              className="bg-white rounded-2xl p-6 md:p-8 max-w-4xl w-full shadow-soft relative"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
                <video
                  controls
                  autoPlay
                  className="w-full h-full"
                  src={selectedVideo.video}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed text-center">
                {selectedVideo.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoMemories;
