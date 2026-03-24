export interface HzFrequency {
  id: string;
  hz: number;
  name: string;
  subtitle: string;
  benefits: string[];
  duration: string;
  color: string;
  isPremium: boolean;
  category: string;
}

export const frequencies: HzFrequency[] = [
  {
    id: "174hz",
    hz: 174,
    name: "Pain Relief",
    subtitle: "Foundation Frequency",
    benefits: [
      "Reduces physical pain",
      "Calms nervous system",
      "Grounds energy",
    ],
    duration: "20 min",
    color: "from-emerald-500/20 to-teal-600/20",
    isPremium: false,
    category: "Healing",
  },
  {
    id: "396hz",
    hz: 396,
    name: "Liberation",
    subtitle: "Solfeggio Frequency",
    benefits: [
      "Releases guilt & fear",
      "Grounds & stabilizes",
      "Builds inner strength",
    ],
    duration: "25 min",
    color: "from-red-500/20 to-orange-600/20",
    isPremium: false,
    category: "Solfeggio",
  },
  {
    id: "432hz",
    hz: 432,
    name: "Nature Harmony",
    subtitle: "Universal Frequency",
    benefits: ["Aligns with nature", "Reduces anxiety", "Promotes clarity"],
    duration: "30 min",
    color: "from-green-500/20 to-emerald-600/20",
    isPremium: false,
    category: "Harmony",
  },
  {
    id: "528hz",
    hz: 528,
    name: "DNA Repair",
    subtitle: "Miracle Frequency",
    benefits: ["Cellular healing", "DNA repair support", "Transformation"],
    duration: "35 min",
    color: "from-yellow-500/20 to-amber-600/20",
    isPremium: true,
    category: "Healing",
  },
  {
    id: "639hz",
    hz: 639,
    name: "Heart Chakra",
    subtitle: "Connection Frequency",
    benefits: [
      "Opens heart center",
      "Enhances relationships",
      "Cultivates love",
    ],
    duration: "30 min",
    color: "from-pink-500/20 to-rose-600/20",
    isPremium: true,
    category: "Chakra",
  },
  {
    id: "741hz",
    hz: 741,
    name: "Spiritual Awakening",
    subtitle: "Intuition Frequency",
    benefits: ["Expands consciousness", "Enhances intuition", "Clears toxins"],
    duration: "25 min",
    color: "from-blue-500/20 to-indigo-600/20",
    isPremium: true,
    category: "Awakening",
  },
  {
    id: "852hz",
    hz: 852,
    name: "Third Eye",
    subtitle: "Awareness Frequency",
    benefits: [
      "Activates third eye",
      "Heightens awareness",
      "Deepens meditation",
    ],
    duration: "30 min",
    color: "from-purple-500/20 to-violet-600/20",
    isPremium: true,
    category: "Chakra",
  },
  {
    id: "963hz",
    hz: 963,
    name: "Crown Chakra",
    subtitle: "Divine Frequency",
    benefits: ["Unity consciousness", "Divine connection", "Pure awareness"],
    duration: "40 min",
    color: "from-violet-500/20 to-purple-700/20",
    isPremium: true,
    category: "Chakra",
  },
];

export interface WellnessArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  isPremium: boolean;
}

export const wellnessArticles: WellnessArticle[] = [
  {
    id: "breathwork",
    title: "4-7-8 Breathwork for Deep Relaxation",
    description:
      "Master the ancient pranayama technique adapted for modern stress relief. This guided breathwork session combines Hz frequencies with structured breathing patterns for profound calm.",
    category: "Breathwork",
    readTime: "8 min read",
    isPremium: false,
  },
  {
    id: "sleep-healing",
    title: "Delta Wave Sleep Healing Protocol",
    description:
      "Delta waves (0.5–4 Hz) dominate deep sleep. Our layered audio protocol guides your brain into restorative delta sleep states for complete physical and mental recovery.",
    category: "Sleep",
    readTime: "12 min read",
    isPremium: true,
  },
  {
    id: "meditation",
    title: "Theta State Meditation with 432Hz",
    description:
      "Theta brainwaves (4–8 Hz) unlock creative insight and deep meditation. Learn to access this powerful state using our curated 432Hz nature frequency tracks.",
    category: "Meditation",
    readTime: "10 min read",
    isPremium: false,
  },
  {
    id: "stress",
    title: "Stress Reduction Through Binaural Beats",
    description:
      "Clinical research shows binaural beats in the alpha range (8–13 Hz) significantly reduce cortisol levels. Explore our science-backed stress reduction program.",
    category: "Stress Relief",
    readTime: "6 min read",
    isPremium: true,
  },
];

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Yoga Instructor",
    avatar: "SM",
    quote:
      "The 528Hz DNA Repair track completely transformed my morning meditation practice. After three weeks, my anxiety levels dropped dramatically. This is the real deal.",
    stars: 5,
  },
  {
    name: "Marcus Chen",
    role: "Software Engineer",
    avatar: "MC",
    quote:
      "I was skeptical at first, but the science behind Hz frequencies is solid. The sleep healing protocol gave me the best sleep I've had in years. Worth every penny.",
    stars: 5,
  },
  {
    name: "Luna Rodriguez",
    role: "Holistic Therapist",
    avatar: "LR",
    quote:
      "I recommend HzHeal to all my clients. The Crown Chakra frequency during deep meditation sessions creates an indescribable sense of unity and peace.",
    stars: 5,
  },
];
