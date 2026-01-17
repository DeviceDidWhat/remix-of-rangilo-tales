import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative bg-maroon text-ivory overflow-hidden">
      {/* Decorative paisley border band at top */}
      <div className="h-3 bg-gradient-to-r from-mustard via-pink-city to-peacock opacity-90" />
      <div className="paisley-border h-6 opacity-40" />
      
      {/* Fresco texture overlay */}
      <div className="absolute inset-0 fresco-texture opacity-5 pointer-events-none" />

      <div className="relative container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column - Palace frame style */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <span className="text-3xl animate-diya">🪔</span>
              <span className="text-2xl font-display text-ivory">
                Rangilo Rajasthan
              </span>
            </Link>
            <div className="manuscript-panel p-4 bg-maroon/50">
              <p className="text-ivory/80 text-sm leading-relaxed">
                A joyful journey through the vibrant culture, traditions, and artistry of Rajasthan.
              </p>
            </div>
          </div>

          {/* Categories - Carved panel style */}
          <div>
            <h4 className="font-display text-xl text-mustard mb-5 flex items-center gap-2">
              <span className="text-sm">❋</span>
              Categories
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/category/textiles", label: "Textiles & Prints" },
                { to: "/category/folk-art", label: "Folk Art & Handicrafts" },
                { to: "/category/desert-life", label: "Desert Life & Nature" },
                { to: "/category/music-dance", label: "Music & Dance" },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-ivory/70 hover:text-mustard transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="text-mustard/50 group-hover:text-mustard text-xs">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-mustard mb-5 flex items-center gap-2">
              <span className="text-sm">❋</span>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/about", label: "About Us" },
                { to: "/how-to-play", label: "How to Play" },
                { to: "/achievements", label: "Achievements" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-ivory/70 hover:text-mustard transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="text-mustard/50 group-hover:text-mustard text-xs">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cultural Note - Palace hospitality */}
          <div>
            <h4 className="font-display text-xl text-mustard mb-5 flex items-center gap-2">
              <span className="text-sm">❋</span>
              Padharo Mhare Desh
            </h4>
            <p className="text-ivory/70 text-sm leading-relaxed mb-5">
              "Welcome to our land" — Experience the warmth and hospitality of Rajasthan through interactive learning.
            </p>
            {/* Cultural icons in carved frames */}
            <div className="flex gap-3">
              {["🐪", "🏛️", "🎨", "🎵"].map((emoji, i) => (
                <span 
                  key={i}
                  className="w-10 h-10 rounded-lg bg-ivory/10 flex items-center justify-center text-xl hover:bg-mustard/20 hover:scale-110 transition-all cursor-pointer border border-ivory/10"
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar with ornamental divider */}
        <div className="mt-14 pt-8 border-t border-ivory/15">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ivory/50 text-sm">
              © 2024 Rangilo Rajasthan. Made with ❤️ for Rajasthani culture.
            </p>
            {/* Ornamental motifs */}
            <div className="flex items-center gap-4">
              <span className="text-mustard text-xl">✦</span>
              <span className="text-pink-city text-2xl">❋</span>
              <span className="text-peacock text-xl">✦</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom lotus border */}
      <div className="lotus-border opacity-30" />
    </footer>
  );
};