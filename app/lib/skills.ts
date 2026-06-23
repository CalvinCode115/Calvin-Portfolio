export type Skill = {
  name: string;
  logo: string; // path under /public/skills/ — empty string shows letter placeholder
};

export type SkillCategory = {
  label: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "UI/UX Design",
    skills: [
      { name: "Figma",       logo: "App Logos/Figma.png" },
      { name: "Canva",       logo: "App Logos/Canva.png" },
      { name: "Miro",        logo: "App Logos/Miro.png" },
    ],
  },
  {
    label: "Web Development",
    skills: [
      { name: "HTML",        logo: "App Logos/HTML.png" },
      { name: "CSS",         logo: "App Logos/CSS.png" },
      { name: "React",       logo: "App Logos/React.png" },
      { name: "Next.js",     logo: "App Logos/Nextjs.png" },
      { name: "Ionic",       logo: "App Logos/Ionic.png" },
    ],
  },
  {
    label: "Programming",
    skills: [
      { name: "Python",      logo: "App Logos/Python.png" },
      { name: "JavaScript",  logo: "App Logos/JS.png" },
      { name: "C/C++",       logo: "App Logos/C_C++.png" },
      { name: "C#",          logo: "App Logos/Csharp.png" },
      { name: "Solidity",    logo: "App Logos/Solidity.png" },
      { name: "MySQL",    logo: "App Logos/MySQL.png" },
    ],
  },
  {
    label: "Frameworks & Tools",
    skills: [
      { name: "Firebase",    logo: "App Logos/Firebase.png" },
      { name: "Git/GitHub",  logo: "App Logos/Github.png" },
      { name: "UiPath (RPA)",logo: "App Logos/Uipath.png" },
    ],
  },
  {
    label: "Data Analytics",
    skills: [
      { name: "Tableau",         logo: "App Logos/Tableau Builder.png" },
      { name: "Data Cleaning",   logo: "App Logos/Tableau Prep Builder.png" },
      { name: "Data Viz",        logo: "App Logos/Plotly Dash.png" },
      // { name: "Trend Analysis",  logo: "" },
    ],
  },
  {
    label: "FinTech",
    skills: [
      { name: "Metmask Wallet", logo: "App Logos/Metamask.png" },
      { name: "Blockchain Remix",       logo: "App Logos/Remix IDE.png" },
    ],
  },
  {
    label: "Cloud Computing & Networking",
    skills: [
      { name: "AWS", logo: "App Logos/AWS.png" },
      { name: "Azure", logo: "App Logos/Azure.png" },
      { name: "Packet Tracer",  logo: "App Logos/Cisco Packet Tracker.png" },
    ],
  },
  {
    label: "Robotics",
    skills: [
      { name: "Spike Prime", logo: "App Logos/Spike Prime.png" },
      { name: "Arduino/ESP32",    logo: "App Logos/Esp32-s3.png" },
      { name: "Arduino",          logo: "App Logos/Arduino.png" },
      { name: "Mindstorms",          logo: "App Logos/Lego Mindstorms.png" },
      { name: "Studio 2.0",          logo: "App Logos/Studio 2.0.png" },
    ],
  },
  {
    label: "3D Design",
    skills: [
      { name: "Cura",  logo: "App Logos/Cura.png" },
      { name: "Tinkercad",   logo: "App Logos/Tinkercad.png" },
      { name: "Bambu Studio", logo: "App Logos/Bambu Lab.png" },
    ],
  },
];
