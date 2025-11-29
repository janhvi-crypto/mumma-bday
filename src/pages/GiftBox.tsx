import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gift, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

const GiftBox = () => {
  const [isOpening, setIsOpening] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isOpening) return;
    
    setIsOpening(true);
    
    // Trigger confetti
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeout(() => navigate("/dashboard"), 500);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FFD700', '#FFC0CB', '#FF69B4', '#FFB6C1']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FFD700', '#FFC0CB', '#FF69B4', '#FFB6C1']
      });
    }, 250);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-cream-50 to-gold-50 relative overflow-hidden">
      {/* Floating sparkles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-gold-200 opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
            size={16 + Math.random() * 16}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-8 animate-fade-in">
          A Special Surprise Awaits ✨
        </h1>
        
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Open this box by clicking on it
        </p>

        <button
          onClick={handleClick}
          disabled={isOpening}
          className={`group relative transition-all duration-500 ${
            isOpening ? 'scale-110 animate-pulse' : 'hover:scale-110'
          }`}
        >
          <div className="relative">
            {/* Gift box glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-gold-300 to-pink-300 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
            
            {/* Main gift box */}
            <div className="relative bg-gradient-to-br from-pink-100 to-gold-100 p-12 md:p-16 rounded-3xl shadow-2xl border-4 border-gold-200 group-hover:border-gold-300 transition-all duration-300">
              <Gift 
                className="text-primary mx-auto animate-bounce" 
                size={120}
                strokeWidth={1.5}
              />
              
              {/* Ribbon effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full opacity-80 flex items-center justify-center shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full flex items-center justify-center">
                  <Sparkles className="text-white" size={32} />
                </div>
              </div>
            </div>
          </div>
          
          <p className="mt-6 font-body text-muted-foreground group-hover:text-primary transition-colors text-sm md:text-base">
            {isOpening ? "Opening..." : "Click to open 🎁"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default GiftBox;
