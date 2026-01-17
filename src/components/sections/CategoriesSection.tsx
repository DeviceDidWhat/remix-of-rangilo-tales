import { CategoryCard } from "@/components/cards/CategoryCard";
import { DecorativeDivider } from "@/components/decorative/DecorativeDivider";

const categories = [
  {
    title: "Textiles & Prints",
    description: "Discover the art of Bandhani tie-dye, Ajrakh block printing, and legendary Rajasthani fabrics",
    gameCount: 5,
    icon: "🧵",
    gradient: "bg-gradient-to-br from-maroon to-maroon/80",
    patternColor: "#d4a574"
  },
  {
    title: "Folk Art & Handicrafts",
    description: "Explore Phad paintings, blue pottery, lac bangles, and traditional craftsmanship",
    gameCount: 4,
    icon: "🎨",
    gradient: "bg-gradient-to-br from-pink-city to-dusty-rose",
    patternColor: "#f5c542"
  },
  {
    title: "Desert Life & Nature",
    description: "Journey through the Thar desert, learn about camels, wildlife, and desert survival",
    gameCount: 4,
    icon: "🐪",
    gradient: "bg-gradient-to-br from-terracotta to-terracotta/80",
    patternColor: "#fff5e6"
  },
  {
    title: "Music & Dance",
    description: "Experience Ghoomar, Kalbelia, folk instruments, and the rhythm of Rajasthan",
    gameCount: 4,
    icon: "💃",
    gradient: "bg-gradient-to-br from-peacock to-peacock/80",
    patternColor: "#f5c542"
  },
  {
    title: "Cuisine & Spices",
    description: "Master Dal Baati Churma, Ghewar, and the aromatic spices of royal kitchens",
    gameCount: 4,
    icon: "🍛",
    gradient: "bg-gradient-to-br from-mustard/90 to-terracotta/80",
    patternColor: "#4a3728"
  },
  {
    title: "Festivals & Traditions",
    description: "Celebrate Pushkar Mela, Teej, Gangaur, and vibrant Rajasthani celebrations",
    gameCount: 4,
    icon: "🎉",
    gradient: "bg-gradient-to-br from-maroon to-peacock/80",
    patternColor: "#fff5e6"
  }
];

export const CategoriesSection = () => {
  return (
    <section className="py-20 md:py-28 container mx-auto px-4">
      {/* Section header with palace styling */}
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-mustard">✦</span>
          <span className="text-pink-city text-2xl">❋</span>
          <span className="text-mustard">✦</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display text-maroon mb-5 text-shadow-warm">
          Explore the Colors of Rajasthan
        </h2>
        <div className="manuscript-panel max-w-2xl mx-auto px-6 py-3">
          <p className="text-muted-foreground">
            Dive into six vibrant categories, each filled with interactive games that bring Rajasthani culture to life
          </p>
        </div>
      </div>

      <DecorativeDivider className="mb-14" />

      {/* Categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <CategoryCard
            key={category.title}
            {...category}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};