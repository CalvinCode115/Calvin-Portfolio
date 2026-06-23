export type Achievement = {
  slug: string;
  title: string;
  result: string;       // full result line
  rank: string;         // short badge text shown in the timeline node
  date: string;
  location: string;
  blurb: string;        // one-line summary (also used as subtitle on the home teaser)
  story: string[];      // narrative paragraphs — each renders as its own <p>
  reflection: string;   // personal voice callout — rendered with accent border
  highlights: string[]; // quick-fact chips
  gallery: string[];    // image paths under /public — fed into GalleryLightbox
  video?: string[];     // optional video paths/URLs — hidden when empty
  press?: { label: string; url: string };
  tags?: string[];
  // ── kept for the home-page teaser ──────────────────────
  cover: string;
  featured: boolean;
};

export const achievements: Achievement[] = [
  {
    slug: "wro-2025-nationals",
    title: "World Robotics Olympiad 2025 — National Finals (RoboMission, Senior)",
    result: "2nd Runner-Up (3rd Place) — Senior Category",
    rank: "3rd",
    date: "10–13 September 2025",
    location: "Ngee Ann Polytechnic, Singapore",
    blurb: "Placed 3rd in the Senior category and qualified to represent Singapore at the World Finals.",
    story: [
      "WRO 2025 marked my return to competing — and the final robotics competition I'll ever take part in as a competitor. My journey started back in secondary school: in 2021 (Secondary 2) my team won 1st Runner-Up in the Championship category and earned a spot to represent Singapore in Germany, but COVID restrictions meant we never made the trip. In 2022, as president of the robotics club, I failed to qualify for the top-20 finals, and stepping down in Secondary 4 seemed to close that chapter. In my first year of poly I volunteered as a Chief Judge for the Senior RoboMission category — and that was when I realised how much I missed being a competitor: the building, the programming, the trial and error. That feeling drove me to compete again in 2025.",
      "I teamed up with Nicholas, the next robotics club president after me, and we competed under Tribal Studioz, our coach company, who provided the resources we needed. In return, we became early beta testers of EVO — their newly developed controller hub with its own sensors and programming — and ultimately used it to compete and win. That year's WRO theme was 'The Future of Robots,' and our RoboMission field was a rocket-ship-themed mat where a fully autonomous robot had to solve multiple missions in under two minutes: scanning and sorting four coloured blocks, collecting and depositing them, line tracking, flicking levers, and pushing objects.",
      "The missions were hard, but the competition was harder. Many of the strongest teams were grouped at our table on the day — people we knew, many of whom had come up through RoboMission Junior and whom we'd already faced back in secondary school, now matched against us in the Senior category with the same determination and skill. It was a battle of the centuries. Against all that, we placed 3rd with the most points on qualifying day, one of only 14 teams out of 40 to reach the finals, where we held onto 3rd. We'd had our eyes on 1st, but the real goal was always the podium — and the chance it earned us: to represent Singapore at the International Finals, hosted in Singapore from 26–28 November.",
    ],
    reflection:
      "Honestly, the journey from February to September had as many lows as highs. Both Nicholas and I are also WRO coaches for 9–11 year-olds competing in RoboMission Elementary on weekends, so on top of school and CCA we each had our own teams to guide. Juggling all of it alongside the competition was tough — but I'm glad we pushed through and qualified for internationals.",
    highlights: [
      "2nd Runner-Up (3rd Place) — Senior Category",
      "Top points on qualifying day",
      "14 of 40 teams reached the finals",
      "Qualified to represent Singapore at the World Finals",
      "Competed on EVO as an early beta tester for Tribal Studioz",
    ],
    gallery: ["/WRO Nationals.jpg",
              "/Achievement Gallery/2nd Runner Up.jpg",
              "/Achievement Gallery/Nationals Robot Design 1.jpg",
              "/Achievement Gallery/Nationals Robot Design 1-2.jpg",
              "/Achievement Gallery/Nationals Robot Design 2.jpg",
              "/Achievement Gallery/Group Photo.jpg",
              "/Achievement Gallery/Bronze Medal.JPEG",
              "/Achievement Gallery/Presidents Photo.jpg",
              "/Achievement Gallery/With Team ASK.jpg",
    ], 
    video: ["/Achievement Gallery/Robot Design 1 Video.mp4",
            "/Achievement Gallery/Qualifying Run.mp4",
    ],   // optional — add clip(s) if any
    tags: ["Robotics", "WRO", "Arduino C++", "ESP32"],
    cover: "/WRO Nationals.jpg",
    featured: true,
  },
  {
    slug: "wro-2025-international",
    title: "World Robotics Olympiad 2025 — International Finals (RoboMission, Senior)",
    result: "18th of 96 Teams — Senior Category",
    rank: "Top 20",
    date: "26–28 November 2025",
    location: "Marina Bay Sands Expo & Convention Centre, Singapore",
    blurb: "Represented Singapore and placed 18th of 96 teams at the World Finals after a full robot redesign.",
    story: [
      "Qualifying for the International Finals led to the proudest chapter of all. These weren't ordinary teams — they were the best from each of their countries, past champions and legends, all gathered in Singapore. We knew our nationals robot wouldn't cut it: it often needed close to the full two minutes just to sort, while the top international teams were finishing their worst-case sorting runs under 1 minute 30 seconds, leaving time for surprise missions. So we made a bold call — a full 360 redesign of the robot, its mechanism, and its entire approach to solving missions.",
      "I took on a one-month sprint to prototype a brand-new robot. We also moved to new hardware — a faster motor with higher RPM and torque, though it was heavy. I handed the prototype (still on regular motors) to my teammate for first-phase coding and testing, while I built the final robot with one aim: strip out parts, make it compact and stable, and keep the core mechanism intact. The hardest part of the whole journey was exactly this — shrinking the prototype into something smaller and lighter to offset the weight of the hub, motors, camera, sensors, and servos. Through the school holidays I was in the office almost every day from 10am to 6pm, often until 9 or 10pm, frequently the last one left — but I didn't give up, and pushed through with the support of my coaches and teammates.",
      "After nationals we earned one more slot to become a team of three, and added Hayn Nie, a programmer from the 4th-place team. With international experience from her secondary school and a standout way of tackling missions, she was a valuable addition who helped Nicholas with coding and troubleshooting. Our goal was top 10, even the podium. The finals ran over three days: the 26th was practice and calibration; the 27th was three scored rounds (best of three) with a surprise mission, where we secured our regular-mission points and nearly completed the surprise addition, putting us 13th; and the 28th — the real test — threw out six months of familiar missions for an entirely new build, with different collection and depositing zones and no sorting at all, testing how fast we could read the robot's capabilities, plan its route, and strategise on the fly. We fell short of top 10, but finished 18th out of 96 — and I was happy with that.",
    ],
    reflection:
      "This whole WRO journey has been nothing but fulfilling — from a goal in my head, to qualifying for finals, to placing 3rd, to representing Singapore, to finishing 18th in the world. We competed as TRD, and more than proud, I was happy to have built an international robot that turned heads at the event — multiple teams recognised us, and we were even featured on CNA live (I did an interview!). It marked the final chapter of my robotics journey as a competitor. I worked hard, stayed disciplined, and stayed true to myself — and I'm proud to have had robotics in my life.",
    highlights: [
      "18th of 96 teams — Senior Category",
      "Represented Singapore on home ground",
      "Full robot redesign in a one-month sprint",
      "Team 'TRD' — added programmer Hayn Nie as a 3rd member",
      "Featured on CNA live with an on-camera interview",
      "3-day finals at Marina Bay Sands Expo",
    ],
    gallery: ["/WRO Internationals.jpg",
              "/Achievement Gallery/IF Robot 1.jpg",
              "/Achievement Gallery/IF Robot 1-2.jpg",
              "/Achievement Gallery/IF Robot 1-3.jpg",
              "/Achievement Gallery/IF Robot 2.jpg",
              "/Achievement Gallery/IF Robot 2-2.jpg",
              "/Achievement Gallery/IF Robot 2-3.jpg",
              "/Achievement Gallery/IF Full Robot.jpg",
              "/Achievement Gallery/IF Media Interview 1.JPG",
              "/Achievement Gallery/IF Media Interview 1-2.JPG",
              "/Achievement Gallery/IF Media Interview 2.jpg",
              "/Achievement Gallery/IF Preparation Mode.JPG",
              "/Achievement Gallery/IF Preparation.JPG",
              "/Achievement Gallery/IF Team Photo.jpg",
              "/Achievement Gallery/IF Table Photo.JPG",
              "/Achievement Gallery/IF Team EVO.jpg",
              "/Achievement Gallery/IF Final Day Photo.jpg",
              "/Achievement Gallery/IF ADSSFUHUA.jpg",
              "/Achievement Gallery/IF Chile Team.jpg",
              "/Achievement Gallery/IF Friendship Night.jpg",
              "/Achievement Gallery/IF Ceremony.jpg",
              "/Achievement Gallery/IF Results.png",
    ], 
    video: ["/Achievement Gallery/IF Prep Run.mp4",
              "/Achievement Gallery/IF Prep Run 2.mp4",
              "/Achievement Gallery/IF Prep Run 3.mp4",
              "/Achievement Gallery/IF Day 1 - Best Run.mp4",
              "/Achievement Gallery/IF Day 2 - Best Run.mp4",
    ],
    press: { label: "Featured on CNA", url: "https://www.youtube.com/watch?v=CDZdvSukfDE" },
    tags: ["Robotics", "WRO", "Arduino C++", "ESP32", "3D Printing"],
    cover: "/WRO Internationals.jpg",
    featured: true,
  },
];

export const featuredAchievements = achievements.filter((a) => a.featured);
