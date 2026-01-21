import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Game } from "@/data/games";

interface GameCardProps extends Game {
  delay?: number;
  index?: number;
}

const DifficultyStars = ({ difficulty }: { difficulty: 'easy' | 'medium' | 'hard' }) => {
  const count = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3;
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((star) => (
        <span 
          key={star} 
          className={`text-sm transition-all duration-300 ${star <= count ? 'text-mustard' : 'text-muted-foreground/30'}`}
        >
          ✦
        </span>
      ))}
    </div>
  );
};

export const GameCard = ({ 
  id,
  title, 
  description, 
  difficulty,
  playTime,
  icon, 
  gradient,
  patternColor,
  delay = 0,
  index = 0
}: GameCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Alternate slide direction based on index
  const slideDirection = index % 2 === 0 ? 'slide-in-left' : 'slide-in-right';

  return (
    <div 
      className={`group card-rajasthani overflow-hidden cursor-pointer transform transition-all duration-500 ease-out
        opacity-0 animate-${slideDirection}
        hover:scale-[1.03] hover:-translate-y-2 hover:shadow-lifted
        active:scale-[0.98] active:translate-y-0
      `}
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top decorative band with icon */}
      <div className={`${gradient} relative h-32 flex items-center justify-center overflow-hidden transition-all duration-300`}>
        {/* Animated pattern overlay */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ${isHovered ? 'opacity-30 scale-110' : 'opacity-20'}`}
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${patternColor} 1px, transparent 1px)`,
            backgroundSize: '12px 12px',
          }}
        />
        
        {/* Shimmer effect on hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`}
        />
        
        {/* Floating icon with bounce */}
        <div className="relative z-10">
          <span 
            className={`text-5xl drop-shadow-lg block transition-transform duration-500 ${isHovered ? 'scale-125 -rotate-6' : ''}`}
            style={{
              animation: isHovered ? 'bounce-gentle 0.6s ease-in-out' : 'none'
            }}
          >
            {icon}
          </span>
        </div>

        {/* Decorative corners with animation */}
        <div className={`absolute top-2 left-2 text-white/40 text-lg transition-all duration-300 ${isHovered ? 'rotate-45 scale-125 text-white/60' : ''}`}>❋</div>
        <div className={`absolute top-2 right-2 text-white/40 text-lg transition-all duration-300 ${isHovered ? '-rotate-45 scale-125 text-white/60' : ''}`}>❋</div>
        
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Content with slide-up effect */}
      <div className={`p-5 transition-all duration-300 ${isHovered ? 'bg-card/80' : ''}`}>
        <h3 className={`font-display text-xl mb-2 transition-all duration-300 ${isHovered ? 'text-secondary translate-x-1' : 'text-primary'}`}>
          {title}
        </h3>
        
        <p className={`text-muted-foreground text-sm mb-4 line-clamp-2 transition-all duration-300 ${isHovered ? 'text-foreground/80' : ''}`}>
          {description}
        </p>

        {/* Meta info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Difficulty */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-muted-foreground">Difficulty:</span>
              <DifficultyStars difficulty={difficulty} />
            </div>
          </div>
          
          {/* Play time with pulse on hover */}
          <div className={`flex items-center gap-1 text-sm text-muted-foreground transition-all duration-300 ${isHovered ? 'text-peacock scale-105' : ''}`}>
            <span className={isHovered ? 'animate-pulse' : ''}>⏱️</span>
            <span>{playTime} min</span>
          </div>
        </div>

        {/* Play button with enhanced interaction */}
        <Link to={`/game/${id}`}>
          <Button 
            variant="mustard" 
            className={`w-full transition-all duration-300 ${isHovered ? 'shadow-xl scale-[1.02]' : ''}`}
          >
            <span className={`transition-all duration-300 ${isHovered ? 'tracking-wider' : ''}`}>
              Play Now
            </span>
            <span className={`ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}>→</span>
          </Button>
        </Link>
      </div>

      {/* Bottom decorative border with animation */}
      <div 
        className={`h-1.5 transition-all duration-500 ${isHovered ? 'h-2' : ''}`}
        style={{
          background: isHovered 
            ? `linear-gradient(90deg, ${patternColor}, ${patternColor}ee, ${patternColor})`
            : `linear-gradient(90deg, ${patternColor}40, ${patternColor}, ${patternColor}40)`
        }}
      />
      
      {/* Ripple effect container */}
      <div className={`absolute inset-0 pointer-events-none overflow-hidden ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute -inset-1 bg-gradient-to-r from-mustard/0 via-mustard/10 to-mustard/0 animate-shimmer" />
      </div>
    </div>
  );
};
