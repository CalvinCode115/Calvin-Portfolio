@AGENTS.md
# Calvin Lee — Portfolio Website

This file briefs Claude Code on what to build. Read it fully before starting.

# Projects Content — for populating the `projects` data file

## Task for Claude Code

Populate the `detail` fields for each project in my projects data file using the
content below. For every project:

- Set `description`, `challenges`, and `learned` to the exact text provided.
- Also set `role`, `isTeam`, `teamSize`, `software`, and `timeline` where given.
- Leave `slug`, `cover`, `gallery`, `featured`, and `video` as they already are
  (placeholders are fine).
- Match each block to the existing project by **slug or title**. If a project
  doesn't exist in the data file yet, create it following the type definitions.

**Do not paraphrase, embellish, shorten, or invent any content.** The text is
final. Your only job is to insert it and make it valid TypeScript (escape quotes,
format the `learned` arrays, etc.).

Anything marked `// CONFIRM` is a value I (Calvin) still need to verify — leave it
as written and flag it back to me; do not guess.

## Type reference

```ts
export type ProjectDetail = {
  description: string;
  isTeam: boolean;
  teamSize?: number;
  role?: string;
  software: string[];
  learned: string[];
  challenges: string;
  gallery: string[];
  timeline?: string;
  video?: string[];
};
```

`description` and `challenges` are single strings (prose is fine).
`learned` is an array of separate strings, each one a distinct takeaway.

---

## 1. Pocket Store  (slug: `pocket-store-app`)

```ts
isTeam: false, // CONFIRM
role: "Mobile App Developer",
software: ["Ionic"], // CONFIRM — add Angular / Firebase 
timeline: "In progress", // CONFIRM
description:
  "A module assignment to build 'Pocket Store,' a mobile loan-store application using Ionic. This project is currently in progress — full write-up coming soon.",
challenges: "Updating soon.",
learned: ["Updating soon."],
```

---

## 2. NETS Payogotchi  (slug: `payogotchi`)

```ts
isTeam: true,
teamSize: 4, // confirm
role: "Feature Owner & Product Designer (Payogotchi)",
software: ["Figma"],
timeline: "In progress", // CONFIRM
description:
  "Payogotchi is my contribution to a team project tackling NETS's problem statement: how to redefine the NETS app into the preferred payment companion for Gen Z and Millennials. Inspired by the Tamagotchi — the handheld egg-shaped virtual pet that many Gen Zs and Millennials grew up with — I designed a digital companion that lives inside the NETS app. Much like Pokémon GO gave everyone their own creature, Payogotchi gives every user a personal pet they nurture through everyday spending: each transaction lets them feed, play with, and care for their pet, turning routine payments into a habit of engagement and small acts of self-care. The goal is retention — keeping users coming back and emotionally invested in the app. It is currently a fully designed Figma prototype, with coded implementation planned as the next phase.",
challenges:
  "The biggest challenge is the build itself — turning the whole Payogotchi system into working code is ambitious for one person to own end to end. At this prototype stage, the work has been about getting the design and logic completely right before any code is written.",
learned: [
  "How to break a complex gamified system down process by process and design it thoroughly before building",
  "Designing game mechanics (feeding, playing, caring) that map cleanly onto real payment behaviour",
  "Stress-testing my own design to make sure there are no loopholes in the system",
],
```

---

## 3. GSM Gaming Store  (slug: `gsm-gaming-store`)

```ts
isTeam: true,
role: "Admin Dashboard & Analytics Developer; System Integrator",
software: ["Python (OOP)", "HTML", "CSS", "Plotly Dash"],
description:
  "A team project to digitalise a traditional physical gaming store by giving it an online presence — a full web application where customers can browse and buy console games, place orders, arrange deliveries, and book gaming rooms. My responsibility was the admin-only analytics dashboard for store owners and staff: bar charts of the top 5 best- and least-selling games, total revenue, and a sales line chart, with data updating as customers made purchases. This was my first ever large Python project built with object-oriented programming.",
challenges:
  "This was my first big OOP project, and it taught me the reality of continuous learning, applying, and improving all at once. To build interactive charts I had to self-learn Plotly Dash, an extension beyond what the course covered, which I struggled with and leaned on AI to understand and apply. On top of that, integrating my part with my teammates' — pulling database data into Python without even using GitHub for version control — was genuinely hard. The final UI ended up basic and partly hardcoded, but I didn't give up.",
learned: [
  "Self-learning a new tool (Plotly Dash) and applying it to a real project for the first time",
  "Using AI as a learning aid to understand and apply unfamiliar concepts",
  "The realities of integrating code as a team — and why version control like GitHub matters",
  "Object-oriented programming fundamentals in Python",
  "Perseverance: pushing through a hard first project instead of giving up",
],
```

---

## 4. Figma Finance Tracker  (slug: `finance-tracker-figma`)

```ts
isTeam: true,
role: "Prototype Designer",
software: ["Figma", "Figma Make", "Gemini (AI)"],
description:
  "Built for an Effective Communication module, where my team pitched a new feature to enhance the DBS app: a finance tracker. I was mainly in charge of the prototype, and used Figma Make to design a fully interactive finance tracker covering allowance, expenses, and savings tracking, with budgeting, spending limits, alerts, and an AI financial assistant/chatbot to help youths better manage their money. The finished interactive prototype anchored our presentation demo.",
challenges:
  "Before I could prompt the AI to generate anything, I had to brainstorm the interface, colours, layout, and features myself. Knowing I sometimes have gaps in my thinking, I used Gemini to help convey my ideas and turn them into a full, well-structured prompt for Figma Make. I also deliberately built the prototype in parts rather than all at once, paying close attention to detail throughout.",
learned: [
  "How to work with AI design tools effectively — doing the thinking and brainstorming first, then prompting",
  "Using one AI (Gemini) to sharpen and structure prompts for another (Figma Make)",
  "Breaking a large prototype into manageable parts instead of building it all at once",
  "Attention to detail across the whole design process",
],
```

---

## 5. Chan Brothers Tableau Tourism Dashboard  (slug: `tableau-tourism-dashboard`)

```ts
isTeam: true,
role: "Data Analyst & Dashboard Designer (Recession factor)",
software: ["Tableau"],
description:
  "A Business Analytics group project applying data cleaning and data visualisation concepts to a real topic: the factors affecting inbound and outbound tourism — recession, wars and political conflict, natural disasters, and disease. My focus was recession and how it affects outbound tourism in Singapore — essentially, what drives Singaporeans to travel overseas. I used economic indicators to identify recession periods — GDP, unemployment rate, personal disposable income, the Consumer Confidence Index, and the SGD exchange rate — and compared each against monthly and yearly outbound traveller counts. Using a mix of area, line, and bar charts plus supporting dashboards showing the percentage change of each indicator, the dashboard surfaces clear insights into how recessions shape travel behaviour, aimed at a travel agency like Chan Brothers.",
challenges:
  "The hardest part was the data itself — gathering, cleaning, and formatting it. The data was spread across multiple sources like SingStat and recorded at different time granularities, with some figures yearly and others monthly, which made it tricky to align. The other challenge was the critical thinking behind the dashboard design: how users would actually use it, which chart types best fit each insight, and how to connect every graph through a shared time-period factor.",
learned: [
  "Sourcing, cleaning, and reconciling messy real-world data across different sources and time granularities",
  "Choosing the right chart type for each kind of insight",
  "Designing a dashboard around how users will actually read and navigate it",
  "Using a common dimension (time period) to tie multiple visualisations together",
  "That I genuinely enjoy designing and making something in my own style",
],
```

---

## 6. UI/UX Hotel Website  (slug: `ux-ui-hotel-website`)

```ts
isTeam: false, // CONFIRM 
role: "UI/UX Designer",
software: ["Figma"],
description:
  "A Figma project focused on designing a user-friendly hotel website where users can easily explore rooms and complete bookings with minimal friction. The goal was a clean, intuitive interface that improves the booking experience while staying visually consistent and usable across devices, fully responsive for both desktop and mobile. Key features include clear navigation to rooms and booking pages, a streamlined booking flow, consistent use of colour, typography, and layout, and clear call-to-action buttons that guide the user. The design was driven by a proper UX process — user personas to surface needs and pain points, mapped user journeys for browsing and booking, heuristic evaluation to catch usability issues, and iteration based on lecturer feedback.",
challenges:
  "Designing a hotel website in my own style was fun, but it made me realise how tough design really is — balancing something functional and aesthetic while keeping the user's experience at the centre. It broadened how I think about design.",
learned: [
  "How demanding it is to balance function, aesthetics, and user experience at once",
  "Applying a structured UX process: personas, user journeys, and heuristic evaluation",
  "Iterating a design based on feedback rather than settling on the first version",
  "A broader perspective on what good design actually involves",
],
```

---

## 7. Notion Finance Tracker  (slug: `notion-finance-tracker`)

```ts
isTeam: false,
role: "Personal Project",
software: ["Notion"],
timeline: "Before Polytechnic – Present",
description:
  "A personal project I started before entering Polytechnic, when I told myself I needed a way to track my expenses, allowance, and weekly savings so I wouldn't overspend. I built my own finance tracker in Notion, using its pages, calendar views, buttons, and automation to log and categorise spending. Features include daily expense logging with custom categories, payment-method tracking (cash or digital), spending categories like food, social outings, and subscriptions, weekly and monthly overviews, and budget setting to monitor overspending. I designed it to be low-friction enough that I'd actually use it daily — and I still use it today.",
challenges:
  "The real challenge was building something simple enough that I'd keep using it long-term, and continuously refining the workflow based on how I actually logged expenses day to day.",
learned: [
  "Structuring data and workflows in Notion to reduce friction and encourage daily use",
  "Using categorisation and budgeting to build genuine financial awareness",
  "That a tool only works if it's designed around real habits — and refining it over time",
  "Long-term discipline in tracking and managing my own money",
],
```

---

## 8. World Robotics Olympiad 2025  (slug: `wro-2025`)

```ts
isTeam: true,
teamSize: 2,
role: "Main Builder & Programmer",
software: ["Arduino C++", "ESP32-S3", "LEGO Technic", "HuskyLens", "Tinkercad", "PartDesigner", "Bambu Studio (3D Printing)"],
timeline: "Feb 2025 – Nov 2025",
description:
  "I took on the World Robotics Olympiad 2025 in my second year, teaming up with a friend and fellow past participant to enter the tougher Senior Category. Preparation ran from February all the way to Nationals in September. Instead of the conventional LEGO software and hardware, we went with an open platform — the EVO controller, an ESP32-S3 board compatible with LEGO motor and sensor ports — which meant we both had to learn EVO from scratch and write our own functions. The robot had to autonomously complete multiple missions within a two-minute limit, using a claw-based stacking mechanism, a back cage for collecting large objects, and colour sensors plus a HuskyLens camera for detection. As the main builder, I spent long hours ideating, prototyping in LEGO, and then redesigning parts in 3D — around 60% of the final robot was custom 3D-printed, since the open platform meant I could design any part I needed.",
challenges:
  "Building within strict constraints was relentless — the robot had limits on weight and dimensions, and the attachments had to be versatile enough to adapt to surprise missions and rule changes revealed on competition day itself. I went through many failed designs before finalising one, constantly prototyping in LEGO and then modelling the 3D-printed version. The open platform removed limits but also meant there was no template to fall back on.",
learned: [
  "Self-learning an open robotics platform (EVO / ESP32-S3) and programming it in Arduino C++",
  "Designing and 3D-printing custom parts with PartDesigner, Tinkercad, and Bambu Studio",
  "Iterating through repeated failure to reach a working design under tight constraints",
  "Designing for adaptability — building attachments versatile enough for unknown missions",
  "Persistence and teamwork across a months-long competition",
],
```

---

## 9. ENVI-TECH  (slug: `envi-tech`)

```ts
isTeam: true,
role: "Chief Product Officer (CPO)",
software: ["Figma"],
timeline: "In progress", // CONFIRM
description:
  "ENVI-TECH is a current project from my entrepreneurship module, where I serve as Chief Product Officer. It is a B2B SaaS platform for estate and biodiversity management, built for an estate-services client (EM Services). The platform connects residents, estate managers, and the service provider in one workflow — residents submit feedback, which flows into a full case lifecycle that the service team responds to and tracks, alongside sensor monitoring and a predictive analytics layer that forecasts likely cases before they escalate. I led the product design, including the mobile and desktop Figma prototypes and the pitch deck. The project is still in progress.",
challenges:
  "The hardest part was thinking through the entire process flow end to end — from a resident's feedback, to how EM Services responds to and manages each case, to predicting future cases and monitoring sensors — and making sure every step connected logically into one coherent product.",
learned: [
  "Designing an end-to-end product workflow that serves multiple user types (residents, estate managers, service provider)",
  "Owning product direction as CPO across both mobile and desktop",
  "Turning a real client's operational problem into a structured SaaS solution",
  "Building predictive analytics in as a differentiating feature",
],
```

---

## 10. RoboChain  (slug: `robochain`)

```ts
isTeam: false, // CONFIRMED
role: "Blockchain Developer",
software: ["Solidity", "Remix IDE", "MetaMask", "IPFS", "Sepolia Testnet", "JavaScript", "HTML", "CSS"],
timeline: "Year 2, Semester 2",
description:
  "RoboChain is a decentralised IP and achievement ledger for student robotics centres, built for my blockchain module. It tackles real problems these centres face: students struggle to prove original ownership of a design or code, portfolios and award claims can be falsified, transferring IP from a graduating senior to a junior relies on unreliable paperwork, and external parties waste time manually verifying credentials. By putting everything on an immutable, time-stamped blockchain ledger, RoboChain creates a tamper-proof record of who created what, when, and every owner since. The system runs four smart-contract transactions — RegisterDesign, CertifyDesign, AddAchievement, and TransferIP — covering the full flow from a student registering a design, to a trainer certifying it, recording awards against it, transferring ownership, and finally generating a verifiable 'Robo-Resume' from a wallet address. Design files and images are stored on IPFS, with the contracts written in Solidity and tested on the Sepolia testnet via MetaMask.",
challenges:
  "The conceptual challenge was working out when a problem genuinely needs a blockchain rather than a normal database — the answer being when you truly need improved traceability and an immutable audit trail. The technical challenge was integrating smart contracts with a web interface and using IPFS to store large assets like robot images and source code in a decentralised way.",
learned: [
  "That blockchain is a framework for record-keeping and trust management, not just a financial tool",
  "How to judge when a business problem actually warrants a blockchain over a centralised database",
  "Writing and deploying smart contracts in Solidity on Remix, and connecting them to MetaMask",
  "Integrating smart contracts with a web front end (JavaScript, HTML, CSS) and using IPFS for decentralised storage",
  "How a dApp creates value by removing intermediaries and manual reconciliation",
],
```

---

## 11. Vintage  (slug: `vintage`)

```ts
isTeam: true,
role: "Developer (Customer Auth, Admin Analytics Dashboard, Database Management) & System Integrator",
software: ["C#", "ASP.NET Web Forms", "Visual Studio 2022", "SQL Server"],
description:
  "Vintage is a fully integrated e-business application that tackles fragmentation in the budget fashion market by combining resale, retail, and tailoring services into one unified platform. Built on the MVC pattern with ASP.NET Web Forms and C#, it pairs a front-end user interface with back-end operational management on a database-driven architecture for consistency, security, and scalability — covering product browsing, cart, checkout, order tracking, refunds, and admin management. My responsibilities were the customer login/sign-up, the admin overview dashboard for data analytics, and management of the customer/admin database. I also took on the role of system integrator, bringing all my teammates' parts together into one working application.",
challenges:
  "In a short time we had to learn C#, understand the full ASP.NET and MVC structure, and build everything from a first web page to master pages connected to an SQL database — all mapped onto our business scenario. I struggled to keep up at my own pace, which pushed me to become disciplined and sit down to code until I genuinely understood it. I also had to learn things beyond the syllabus, like coding the OTP/SMTP function for a Forget Password feature, which I figured out through online resources, YouTube, and Gen AI. As the integrator, I carried the responsibility of not letting my teammates down.",
learned: [
  "Developing a secure, interactive e-business website end to end on ASP.NET with C#",
  "State management, troubleshooting web applications, and manipulating data through database access",
  "Taking initiative to learn beyond what's taught (OTP/SMTP for password recovery)",
  "Applying the Human-Centred Design framework — empathise, define, research, ideate, prototype, evaluate",
  "Discipline, ownership, and what it takes to integrate a whole team's work into one system",
],
```

---
## Deployment (after the build)

Static site → push to a GitHub repo → import into Vercel → free live URL. No server
to run or pay for. Custom domain optional later.