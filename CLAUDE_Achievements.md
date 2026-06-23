# Achievements Page — build spec for Claude Code

Read this fully before building. It contains (1) the page design, (2) the data type,
(3) the finished content for both achievements, and (4) the build plan.

## Goal

Build the **Achievements page** (the `Achievement` link in the navbar). It shows my
two WRO 2025 achievements as a single scrolling **journey timeline** — a deliberately
different style from the Projects carousel. Both achievements are shown in full on the
page (not hidden behind clicks). Content sits in a **wider column** than the project
pages, with room for a photo gallery and videos per achievement.

Match the existing site: reuse the global design tokens, fonts, accent colour, and
spacing already defined. Do not introduce a new colour system.

## Design — vertical journey timeline (NOT a carousel)

- A vertical timeline line runs down the page (use the accent colour). Each achievement
  is a large **milestone** anchored to a node on that line.
- Each milestone node shows a **rank badge** (e.g. "3rd" / "Top 20"). Make badges feel
  like medals — bold, circular or pill-shaped, accent-coloured.
- Milestone layout, top to bottom:
  1. **Result headline** (large) + event title
  2. **Date . Location** (smaller, muted)
  3. **Story** — the narrative paragraphs (render each item in `story[]` as its own `<p>`)
  4. **Reflection callout** — render `reflection` as a visually distinct block (e.g. a
     left accent border + slightly tinted background + italic), so the personal voice
     stands apart from the factual story
  5. **Highlights** — render `highlights[]` as a row of small stat chips / pills
  6. **Media** — photo gallery grid, then videos (see below)
  7. If `press` exists, show a "Featured on ..." badge linking to `press.url`
- Content column wider than project pages: use `max-w-5xl` (vs the narrower project
  body). Keep it responsive; on mobile the timeline line can sit on the left with
  milestones stacked.
- Add a short page header above the timeline:
  - Heading: "Achievements"
  - Sub-line: "The final chapter of my robotics journey as a competitor — from the
    national stage to representing Singapore at the world finals."

## Photo gallery — REUSE the existing project lightbox

Do **not** build a new gallery. Find the gallery/lightbox component already used on the
project detail pages (the one that opens a photo full-screen and lets you page through
with next / back arrows) and reuse it here, fed by each achievement's `gallery[]`. The
expand -> next -> back behaviour must be identical to projects.

## Videos

Add a videos area per achievement, driven by `video[]`. Reuse whatever video pattern the
project pages already use. Note: GitHub rejects any single file over 100MB, so large clips
should either be compressed MP4s in `/public` or hosted on YouTube (unlisted) and embedded
— I'll supply final sources. Hide the videos area if `video` is empty.

## Data type

Create `data/achievements.ts` (match the project data file's location/conventions):

```ts
export type Achievement = {
  slug: string;
  title: string;        // event name
  result: string;       // full result line
  rank: string;         // short badge text
  date: string;
  location: string;
  blurb: string;        // one-line summary
  story: string[];      // narrative paragraphs (each renders as its own <p>)
  reflection: string;   // personal thoughts — render as a distinct callout
  highlights: string[]; // quick facts — render as chips
  gallery: string[];    // image paths under /public — uses the project lightbox
  video?: string[];     // optional video sources — omit/empty to hide
  press?: { label: string; url: string };
  tags?: string[];
};
```

Insert the two entries below **verbatim** (adjust only to fit TypeScript syntax — escape
quotes, format arrays). Do not paraphrase or invent. Anything marked `// CONFIRM` is for
me to verify; leave it and flag it back.

---

## Achievement 1 — WRO 2025 National Finals

```ts
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
gallery: [], // CONFIRM — add nationals photo paths under /public
video: [],   // optional — add clip(s) if any
tags: ["Robotics", "WRO", "Arduino C++", "ESP32"],
```

---

## Achievement 2 — WRO 2025 International Finals

```ts
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
gallery: [], // CONFIRM — add international finals photo paths under /public
video: [],   // optional — add clip(s) / CNA segment if available
press: { label: "Featured on CNA", url: "" }, // CONFIRM — add CNA interview link
tags: ["Robotics", "WRO", "Arduino C++", "ESP32", "3D Printing"],
```

---

## Build plan (pause after each step so I can preview)

1. Create `data/achievements.ts` with the type + both entries above.
2. Build the Achievements page route with the page header and the vertical timeline shell.
3. Build the milestone block (result, date/location, story paragraphs, reflection callout,
   highlight chips).
4. Wire the photo gallery into each milestone by reusing the existing project lightbox
   component (identical expand / next / back).
5. Add the videos area (reuse the project video pattern; hide if empty).
6. Add the rank badges and the `press` "Featured on CNA" link.
7. Responsive + accessibility pass.

## I (Calvin) still need to supply

- Nationals and International photo paths (drop images in `/public`, then list them in `gallery`). // I will do that later on
- The CNA interview link is `https://www.youtube.com/watch?v=CDZdvSukfDE` 
- Confirm the exact route/folder name matches my existing nav link.