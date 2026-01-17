import { Button } from "@/components/ui/button";
import palaceHero from "@/assets/palace-courtyard-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Palace Courtyard Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${palaceHero})` }}
      >
        {/* Warm sunset gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/10 via-transparent to-transparent" />
      </div>

      {/* Decorative Jharokha Arch Frame - Left */}
      <div className="absolute left-0 top-1/4 w-20 md:w-32 h-64 md:h-96 pointer-events-none opacity-40">
        <svg viewBox="0 0 100 200" className="w-full h-full fill-maroon/30">
          <path d="M100,40 Q100,0 60,0 L40,0 Q0,0 0,40 L0,200 L100,200 Z" />
          <path d="M90,45 Q90,15 55,15 L45,15 Q10,15 10,45 L10,190 L90,190 Z" fill="hsl(40 40% 96% / 0.3)" />
        </svg>
      </div>

      {/* Decorative Jharokha Arch Frame - Right */}
      <div className="absolute right-0 top-1/4 w-20 md:w-32 h-64 md:h-96 pointer-events-none opacity-40 scale-x-[-1]">
        <svg viewBox="0 0 100 200" className="w-full h-full fill-maroon/30">
          <path d="M100,40 Q100,0 60,0 L40,0 Q0,0 0,40 L0,200 L100,200 Z" />
          <path d="M90,45 Q90,15 55,15 L45,15 Q10,15 10,45 L10,190 L90,190 Z" fill="hsl(40 40% 96% / 0.3)" />
        </svg>
      </div>

      {/* Flowing Textile Banners */}
      <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none overflow-hidden">
        <div className="absolute top-6 left-[8%] w-16 md:w-20 h-28 md:h-36 bg-gradient-to-b from-mustard to-mustard/70 rotate-6 animate-wave origin-top rounded-b-full opacity-80" />
        <div className="absolute top-4 left-[22%] w-12 md:w-16 h-24 md:h-32 bg-gradient-to-b from-maroon to-maroon/70 -rotate-4 animate-wave origin-top rounded-b-full opacity-80" style={{ animationDelay: "0.4s" }} />
        <div className="absolute top-8 right-[18%] w-14 md:w-18 h-26 md:h-34 bg-gradient-to-b from-pink-city to-dusty-rose rotate-8 animate-wave origin-top rounded-b-full opacity-80" style={{ animationDelay: "0.7s" }} />
        <div className="absolute top-5 right-[32%] w-10 md:w-14 h-22 md:h-28 bg-gradient-to-b from-peacock to-peacock/70 -rotate-6 animate-wave origin-top rounded-b-full opacity-80" style={{ animationDelay: "1s" }} />
      </div>

      {/* Main Hero Content - Palace Courtyard Frame */}
      <div className="relative z-10 text-center px-6 py-16 md:py-24 max-w-4xl mx-auto">
        {/* Decorative Arch Top */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-48 md:w-64">
          <svg viewBox="0 0 200 50" className="w-full h-auto">
            <path 
              d="M0,50 L0,30 Q0,0 50,0 L150,0 Q200,0 200,30 L200,50" 
              fill="none" 
              stroke="hsl(42 85% 55%)" 
              strokeWidth="3"
            />
            <path 
              d="M20,50 L20,35 Q20,10 60,10 L140,10 Q180,10 180,35 L180,50" 
              fill="none" 
              stroke="hsl(42 85% 55% / 0.5)" 
              strokeWidth="2"
            />
            {/* Central lotus motif */}
            <circle cx="100" cy="8" r="6" fill="hsl(42 85% 55%)" />
            <circle cx="100" cy="8" r="3" fill="hsl(350 55% 30%)" />
          </svg>
        </div>

        {/* Decorative diyas */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-3xl md:text-4xl animate-diya">🪔</span>
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-mustard to-transparent" />
          <div className="flex items-center gap-1">
            <span className="text-mustard text-xl">✦</span>
            <span className="text-pink-city text-2xl">❋</span>
            <span className="text-mustard text-xl">✦</span>
          </div>
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-mustard to-transparent" />
          <span className="text-3xl md:text-4xl animate-diya" style={{ animationDelay: "0.5s" }}>🪔</span>
        </div>

        {/* Main Title - Carved Stone Style */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-maroon mb-6 text-shadow-warm animate-fade-in drop-shadow-lg">
          Rangilo Rajasthan
        </h1>

        {/* Tagline on manuscript banner */}
        <div className="manuscript-panel px-6 py-4 mx-auto max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <p className="text-lg md:text-xl text-foreground/90 font-body leading-relaxed">
            Learn the colors, crafts, and stories of Rajasthan through play
          </p>
        </div>

        {/* CTA Button - Ornamental Plaque */}
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="xl" className="group">
            <span>Start Exploring</span>
            <span className="inline-block transition-transform group-hover:translate-x-1 text-xl">→</span>
          </Button>
        </div>

        {/* Stats in carved panel style */}
        <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-12 animate-fade-in" style={{ animationDelay: "0.45s" }}>
          <div className="palace-card corner-ornaments px-6 py-4 min-w-[120px]">
            <p className="text-3xl md:text-4xl font-display text-mustard">25+</p>
            <p className="text-sm text-muted-foreground">Mini Games</p>
          </div>
          <div className="palace-card corner-ornaments px-6 py-4 min-w-[120px]">
            <p className="text-3xl md:text-4xl font-display text-pink-city">6</p>
            <p className="text-sm text-muted-foreground">Categories</p>
          </div>
          <div className="palace-card corner-ornaments px-6 py-4 min-w-[120px]">
            <p className="text-3xl md:text-4xl font-display text-peacock">∞</p>
            <p className="text-sm text-muted-foreground">Fun & Learning</p>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave with lotus pattern */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(40 40% 96% / 0)" />
              <stop offset="100%" stopColor="hsl(40 40% 96%)" />
            </linearGradient>
          </defs>
          <path 
            d="M0,60 C240,90 480,30 720,60 C960,90 1200,30 1440,60 L1440,100 L0,100 Z" 
            fill="url(#waveGradient)"
          />
          <path 
            d="M0,70 C240,95 480,45 720,70 C960,95 1200,45 1440,70 L1440,100 L0,100 Z" 
            fill="hsl(40 40% 96%)"
          />
        </svg>
        {/* Lotus motifs on wave */}
        <div className="absolute bottom-4 left-1/4 text-mustard/40 text-2xl">❋</div>
        <div className="absolute bottom-6 left-1/2 text-pink-city/40 text-3xl">✿</div>
        <div className="absolute bottom-4 right-1/4 text-mustard/40 text-2xl">❋</div>
      </div>
    </section>
  );
};