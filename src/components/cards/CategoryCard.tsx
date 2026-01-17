import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  description: string;
  gameCount: number;
  icon: string;
  gradient: string;
  patternColor: string;
  delay?: number;
}

export const CategoryCard = ({
  title,
  description,
  gameCount,
  icon,
  gradient,
  patternColor,
  delay = 0
}: CategoryCardProps) => {
  return (
    <article 
      className="group relative overflow-hidden rounded-xl hover-lift cursor-pointer animate-slide-up ornamental-frame"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Background with gradient */}
      <div className={cn(
        "absolute inset-0 transition-transform duration-500 group-hover:scale-105",
        gradient
      )} />
      
      {/* Fresco texture overlay */}
      <div className="absolute inset-0 fresco-texture opacity-20" />
      
      {/* Decorative pattern overlay */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle, ${patternColor} 1.5px, transparent 1.5px)`,
          backgroundSize: "18px 18px"
        }}
      />

      {/* Ornamental corner brackets */}
      <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-ivory/40 rounded-tl-sm" />
      <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-ivory/40 rounded-tr-sm" />
      <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-ivory/40 rounded-bl-sm" />
      <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-ivory/40 rounded-br-sm" />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 text-ivory min-h-[300px] flex flex-col">
        {/* Icon in decorative frame */}
        <div className="mb-5">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-ivory/15 backdrop-blur-sm border border-ivory/20 animate-float" style={{ animationDelay: `${delay * 0.5}s` }}>
            <span className="text-4xl">{icon}</span>
          </div>
        </div>

        {/* Title in decorative cartouche style */}
        <h3 className="text-2xl md:text-3xl font-display mb-3 group-hover:text-mustard transition-colors text-shadow-warm">
          {title}
        </h3>

        {/* Description */}
        <p className="text-ivory/80 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Game count badge and action */}
        <div className="flex items-center justify-between pt-4 border-t border-ivory/20">
          <span className="inline-flex items-center gap-2 bg-ivory/15 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium border border-ivory/10">
            <span className="text-mustard">🎮</span>
            {gameCount} Games
          </span>
          
          {/* Arrow button - carved plaque style */}
          <span className="w-11 h-11 rounded-lg bg-ivory/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-mustard group-hover:text-foreground transition-all duration-300 group-hover:translate-x-1 border border-ivory/20 group-hover:border-mustard text-lg">
            →
          </span>
        </div>
      </div>

      {/* Hover illumination effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial from-mustard/10 via-transparent to-transparent" />
      </div>
    </article>
  );
};