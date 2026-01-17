import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-maroon/95 backdrop-blur-md border-b border-mustard/20">
      {/* Carved panel texture overlay */}
      <div className="absolute inset-0 opacity-5 fresco-texture pointer-events-none" />
      
      <nav className="relative container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo in arch-shaped frame */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <span className="text-2xl animate-diya">🪔</span>
          </div>
          <span className="text-xl md:text-2xl font-display text-ivory group-hover:text-mustard transition-colors">
            Rangilo Rajasthan
          </span>
        </Link>

        {/* Navigation Links - Carved plaque style */}
        <div className="hidden md:flex items-center gap-2">
          {[
            { to: "/categories", label: "Explore Games" },
            { to: "/about", label: "About" },
            { to: "/learn", label: "Learn More" },
          ].map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="relative px-4 py-2 text-ivory/90 hover:text-mustard transition-all duration-300 font-medium group"
            >
              {link.label}
              {/* Decorative underline */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-mustard to-transparent transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          {/* Search button - carved style */}
          <button className="w-10 h-10 rounded-lg bg-ivory/10 hover:bg-mustard/20 flex items-center justify-center transition-all text-ivory hover:text-mustard border border-ivory/10 hover:border-mustard/30">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {/* Start button */}
          <Button variant="mustard" size="sm" className="hidden sm:flex">
            Start Learning
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden w-10 h-10 rounded-lg bg-ivory/10 hover:bg-mustard/20 flex items-center justify-center transition-all text-ivory border border-ivory/10">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Decorative bottom border pattern */}
      <div className="h-1 bg-gradient-to-r from-transparent via-mustard/50 to-transparent" />
    </header>
  );
};