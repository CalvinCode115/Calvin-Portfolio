export type Achievement = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  cover: string;     // path under /public, e.g. "/achievements/wro-2025.jpg"
  featured: boolean;
};

export const achievements: Achievement[] = [
  {
    slug: "wro-nationals-2025",
    title: "WRO 2025 Nationals Singapore — 2nd Runner-Up",
    subtitle: "Senior Category · World Robotics Olympiad",
    tags: ["Arduino", "C/C++", "Robotics"],
    cover: "/WRO Nationals.jpg",
    featured: true,
  },
  {
    slug: "wro-internationals-2025",
    title: "WRO 2025 Internationals — 18th Place out of 96",
    subtitle: "Senior Category · World Robotics Olympiad",
    tags: ["Arduino", "C/C++", "Robotics"],
    cover: "/WRO Internationals.jpg",
    featured: true,
  },
];

export const featuredAchievements = achievements.filter((a) => a.featured);
