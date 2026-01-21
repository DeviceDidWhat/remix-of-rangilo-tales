export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  playTime: number; // in minutes
  icon: string;
  gradient: string;
  patternColor: string;
}

export const games: Game[] = [
  // Textiles & Prints
  {
    id: "bandhani-matching",
    title: "Bandhani Pattern Match",
    description: "Match the traditional tie-dye patterns to their region of origin",
    category: "textiles",
    difficulty: "easy",
    playTime: 5,
    icon: "🎯",
    gradient: "bg-gradient-to-br from-primary to-primary/80",
    patternColor: "#d4a574"
  },
  {
    id: "ajrakh-puzzle",
    title: "Ajrakh Block Puzzle",
    description: "Arrange the block print stamps to complete the traditional pattern",
    category: "textiles",
    difficulty: "medium",
    playTime: 10,
    icon: "🧩",
    gradient: "bg-gradient-to-br from-primary via-primary/90 to-secondary/60",
    patternColor: "#e8d5c4"
  },
  {
    id: "fabric-quiz",
    title: "Fabric Detective",
    description: "Identify Rajasthani fabrics by their texture, color, and weave",
    category: "textiles",
    difficulty: "hard",
    playTime: 8,
    icon: "🔍",
    gradient: "bg-gradient-to-br from-secondary to-secondary/80",
    patternColor: "#f5c542"
  },
  {
    id: "dye-mixing",
    title: "Natural Dye Lab",
    description: "Learn to mix natural dyes to create traditional Rajasthani colors",
    category: "textiles",
    difficulty: "medium",
    playTime: 7,
    icon: "🧪",
    gradient: "bg-gradient-to-br from-peacock to-peacock/80",
    patternColor: "#fff5e6"
  },
  {
    id: "weaving-rhythm",
    title: "Weaving Rhythm",
    description: "Follow the loom patterns in this rhythmic weaving challenge",
    category: "textiles",
    difficulty: "easy",
    playTime: 5,
    icon: "🧵",
    gradient: "bg-gradient-to-br from-terracotta to-terracotta/80",
    patternColor: "#d4a574"
  },

  // Folk Art & Handicrafts
  {
    id: "phad-story",
    title: "Phad Painting Story",
    description: "Arrange the story panels of this traditional scroll painting",
    category: "folk-art",
    difficulty: "medium",
    playTime: 12,
    icon: "🎨",
    gradient: "bg-gradient-to-br from-secondary to-secondary/80",
    patternColor: "#f5c542"
  },
  {
    id: "blue-pottery",
    title: "Blue Pottery Designer",
    description: "Design your own Jaipur blue pottery with traditional motifs",
    category: "folk-art",
    difficulty: "easy",
    playTime: 8,
    icon: "🏺",
    gradient: "bg-gradient-to-br from-peacock to-primary/80",
    patternColor: "#fff5e6"
  },
  {
    id: "lac-bangles",
    title: "Lac Bangle Creator",
    description: "Craft colorful lac bangles using traditional techniques",
    category: "folk-art",
    difficulty: "medium",
    playTime: 10,
    icon: "💎",
    gradient: "bg-gradient-to-br from-terracotta to-mustard/80",
    patternColor: "#4a3728"
  },
  {
    id: "puppet-maker",
    title: "Kathputli Puppet Maker",
    description: "Create your own Rajasthani string puppet character",
    category: "folk-art",
    difficulty: "hard",
    playTime: 15,
    icon: "🎭",
    gradient: "bg-gradient-to-br from-secondary via-terracotta to-mustard/60",
    patternColor: "#d4a574"
  },

  // Desert Life & Nature
  {
    id: "camel-trek",
    title: "Camel Caravan",
    description: "Navigate a camel caravan through the Thar desert",
    category: "desert-life",
    difficulty: "easy",
    playTime: 6,
    icon: "🐪",
    gradient: "bg-gradient-to-br from-terracotta to-terracotta/80",
    patternColor: "#fff5e6"
  },
  {
    id: "desert-wildlife",
    title: "Desert Wildlife Spotter",
    description: "Identify animals and plants that survive in the Thar",
    category: "desert-life",
    difficulty: "medium",
    playTime: 8,
    icon: "🦎",
    gradient: "bg-gradient-to-br from-mustard/90 to-terracotta/80",
    patternColor: "#4a3728"
  },
  {
    id: "water-harvest",
    title: "Water Wisdom",
    description: "Learn traditional water harvesting methods of Rajasthan",
    category: "desert-life",
    difficulty: "hard",
    playTime: 12,
    icon: "💧",
    gradient: "bg-gradient-to-br from-peacock to-primary/80",
    patternColor: "#fff5e6"
  },
  {
    id: "stepwell-explore",
    title: "Stepwell Explorer",
    description: "Explore the architectural wonders of Rajasthani stepwells",
    category: "desert-life",
    difficulty: "medium",
    playTime: 10,
    icon: "🏛️",
    gradient: "bg-gradient-to-br from-primary to-peacock/80",
    patternColor: "#d4a574"
  },

  // Music & Dance
  {
    id: "ghoomar-steps",
    title: "Ghoomar Dance",
    description: "Learn the graceful spinning movements of Ghoomar",
    category: "music-dance",
    difficulty: "medium",
    playTime: 8,
    icon: "💃",
    gradient: "bg-gradient-to-br from-peacock to-peacock/80",
    patternColor: "#f5c542"
  },
  {
    id: "folk-instruments",
    title: "Instrument Orchestra",
    description: "Identify and play traditional Rajasthani instruments",
    category: "music-dance",
    difficulty: "easy",
    playTime: 6,
    icon: "🎵",
    gradient: "bg-gradient-to-br from-secondary to-terracotta/80",
    patternColor: "#fff5e6"
  },
  {
    id: "kalbelia-rhythm",
    title: "Kalbelia Rhythm",
    description: "Master the snake-like movements of Kalbelia dance",
    category: "music-dance",
    difficulty: "hard",
    playTime: 10,
    icon: "🐍",
    gradient: "bg-gradient-to-br from-primary to-secondary/80",
    patternColor: "#f5c542"
  },
  {
    id: "folk-song-quiz",
    title: "Folk Song Stories",
    description: "Discover the stories behind traditional Rajasthani songs",
    category: "music-dance",
    difficulty: "medium",
    playTime: 7,
    icon: "🎤",
    gradient: "bg-gradient-to-br from-terracotta via-secondary to-primary/60",
    patternColor: "#d4a574"
  },

  // Cuisine & Spices
  {
    id: "dal-baati",
    title: "Dal Baati Master",
    description: "Cook the perfect Dal Baati Churma step by step",
    category: "cuisine",
    difficulty: "medium",
    playTime: 12,
    icon: "🍛",
    gradient: "bg-gradient-to-br from-mustard/90 to-terracotta/80",
    patternColor: "#4a3728"
  },
  {
    id: "spice-detective",
    title: "Spice Detective",
    description: "Identify spices by color, shape, and use in Rajasthani cooking",
    category: "cuisine",
    difficulty: "easy",
    playTime: 5,
    icon: "🌶️",
    gradient: "bg-gradient-to-br from-terracotta to-secondary/80",
    patternColor: "#f5c542"
  },
  {
    id: "ghewar-challenge",
    title: "Ghewar Challenge",
    description: "Create the intricate honeycomb sweet of Rajasthan",
    category: "cuisine",
    difficulty: "hard",
    playTime: 15,
    icon: "🍯",
    gradient: "bg-gradient-to-br from-mustard to-terracotta/80",
    patternColor: "#4a3728"
  },
  {
    id: "thali-builder",
    title: "Royal Thali Builder",
    description: "Arrange a traditional Rajasthani thali with all courses",
    category: "cuisine",
    difficulty: "medium",
    playTime: 8,
    icon: "🍽️",
    gradient: "bg-gradient-to-br from-secondary to-mustard/80",
    patternColor: "#fff5e6"
  },

  // Festivals & Traditions
  {
    id: "pushkar-mela",
    title: "Pushkar Mela Adventure",
    description: "Experience the famous Pushkar camel fair",
    category: "festivals",
    difficulty: "easy",
    playTime: 8,
    icon: "🎪",
    gradient: "bg-gradient-to-br from-secondary to-peacock/80",
    patternColor: "#fff5e6"
  },
  {
    id: "teej-celebration",
    title: "Teej Traditions",
    description: "Learn the customs and songs of the Teej festival",
    category: "festivals",
    difficulty: "medium",
    playTime: 10,
    icon: "🌙",
    gradient: "bg-gradient-to-br from-peacock to-secondary/80",
    patternColor: "#f5c542"
  },
  {
    id: "gangaur-procession",
    title: "Gangaur Celebration",
    description: "Join the colorful Gangaur festival procession",
    category: "festivals",
    difficulty: "easy",
    playTime: 6,
    icon: "👑",
    gradient: "bg-gradient-to-br from-terracotta to-mustard/80",
    patternColor: "#4a3728"
  },
  {
    id: "holi-colors",
    title: "Holi Color Splash",
    description: "Mix and throw colors in this Holi celebration game",
    category: "festivals",
    difficulty: "easy",
    playTime: 5,
    icon: "🎨",
    gradient: "bg-gradient-to-br from-peacock via-terracotta to-secondary",
    patternColor: "#fff5e6"
  }
];

export const categories = {
  textiles: {
    id: "textiles",
    title: "Textiles & Prints",
    description: "Discover the art of Bandhani tie-dye, Ajrakh block printing, and legendary Rajasthani fabrics",
    icon: "🧵",
    gradient: "bg-gradient-to-br from-primary to-primary/80",
  },
  "folk-art": {
    id: "folk-art",
    title: "Folk Art & Handicrafts",
    description: "Explore Phad paintings, blue pottery, lac bangles, and traditional craftsmanship",
    icon: "🎨",
    gradient: "bg-gradient-to-br from-secondary to-secondary/80",
  },
  "desert-life": {
    id: "desert-life",
    title: "Desert Life & Nature",
    description: "Journey through the Thar desert, learn about camels, wildlife, and desert survival",
    icon: "🐪",
    gradient: "bg-gradient-to-br from-terracotta to-terracotta/80",
  },
  "music-dance": {
    id: "music-dance",
    title: "Music & Dance",
    description: "Experience Ghoomar, Kalbelia, folk instruments, and the rhythm of Rajasthan",
    icon: "💃",
    gradient: "bg-gradient-to-br from-peacock to-peacock/80",
  },
  cuisine: {
    id: "cuisine",
    title: "Cuisine & Spices",
    description: "Master Dal Baati Churma, Ghewar, and the aromatic spices of royal kitchens",
    icon: "🍛",
    gradient: "bg-gradient-to-br from-mustard/90 to-terracotta/80",
  },
  festivals: {
    id: "festivals",
    title: "Festivals & Traditions",
    description: "Celebrate Pushkar Mela, Teej, Gangaur, and vibrant Rajasthani celebrations",
    icon: "🎉",
    gradient: "bg-gradient-to-br from-secondary to-peacock/80",
  },
};

export type CategoryId = keyof typeof categories;

export const getGamesByCategory = (categoryId: string): Game[] => {
  return games.filter(game => game.category === categoryId);
};

export const getCategoryInfo = (categoryId: string) => {
  return categories[categoryId as CategoryId] || null;
};
