import Link from "next/link";
import { featuredProjects } from "@/app/lib/projects";
import { featuredAchievements } from "@/app/lib/achievements";

// ── Static data that lives only on this page ──────────────────
const education = [
  { period: "2014 – 2020", school: "Woodgrove Primary School",    detail: "PSLE", logo: "\woodgrove-primary-logo.jpeg" },
  { period: "2020 – 2024", school: "Admiralty Secondary School",  detail: "GCE O-Levels", logo: "\admiralty-secondary-logo.png" },
  { period: "2024 – Present", school: "Nanyang Polytechnic", detail: "Diploma in Business & Financial Technology", logo: "\NYP-logo.jpeg" },
];

const workEntries = [
  { role: "Part-time Teacher & Competition Trainer", org: "School of Robotics",   period: "Sept 2024 – Present" },
  { role: "Competition Core Member & Chief Judge",   org: "WRO / Space Faculty",  period: "Aug – Sept 2024" },
];

// ── Shared sub-components ─────────────────────────────────────
function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full px-2.5 py-0.5">
      {label}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-white mb-3">{children}</h2>
      <div className="w-10 h-0.5 bg-blue-500" />
    </div>
  );
}

function ViewAllLink({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-8 flex justify-center">
      <Link
        href={href}
        className="inline-flex items-center gap-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-full px-6 py-2.5 text-sm font-medium transition-colors"
      >
        {label} →
      </Link>
    </div>
  );
}

// Reused by project cards, achievement cards, and work images
function CoverSlot({ src, alt, hint }: { src: string; alt: string; hint: string }) {
  if (src) {
    return (
      <div className="w-full aspect-video overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
      </div>
    );
  }
  return (
    <div className="w-full aspect-video bg-zinc-800 border-b border-border flex flex-col items-center justify-center gap-2 text-zinc-600">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <p className="text-xs text-center px-4 leading-relaxed">
        Add <code className="text-blue-400">{hint}</code>
      </p>
    </div>
  );
}

// School logo placeholder / actual logo
function SchoolLogo({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex items-center gap-4 bg-zinc-900 border border-dashed border-blue-500/30 rounded-xl p-4">
      {src ? (
        <img src={src} alt={`${name} logo`} className="w-14 h-14 object-contain rounded-lg" />
      ) : (
        <div className="w-14 h-14 rounded-lg bg-zinc-800 border border-border flex items-center justify-center text-zinc-600 shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M3 21V8l9-5 9 5v13" />
            <path d="M9 21v-6h6v6" />
          </svg>
        </div>
      )}
      <p className="text-sm text-zinc-400">{name}</p>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── Section 1: Introduction ─────────────────────────── */}
      <section className="dot-pattern bg-background min-h-[calc(100vh-4rem)] flex items-center">
        <div className="mx-auto max-w-6xl w-full px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-80 h-80 sm:w-72 sm:h-72 lg:w-120 lg:h-120 rounded-2xl border-2 border-solid border-blue-500/40 bg-zinc-900 flex flex-col items-center justify-center text-zinc-500 overflow-hidden">
                <img src="\calvin.jpg" alt="Calvin Lee" className="object-cover" />
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-5">
              <div>
                <span className="inline-block text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full px-3 py-1 mb-4">
                  Business &amp; Financial Technology · NYP
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Lee Chun Hui<br />
                  <span className="text-blue-400">Calvin</span>
                </h1>
              </div>
              <p className="text-zinc-400 leading-relaxed text-base">
                I&apos;m a Business &amp; Financial Technology student at Nanyang Polytechnic who builds
                fintech applications end to end — from coding the logic to designing the interface.
                I like turning complex financial features into clear, usable products, especially
                around digital payments and personal finance.
              </p>
              <p className="text-zinc-400 leading-relaxed text-base">
                My goal is to grow as an application developer, building technology that&apos;s both
                functional and genuinely useful to people.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-2">
                <a href="https://www.linkedin.com/in/lee-calvin-9b8374311/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="rounded-full border border-border p-2.5 text-zinc-400 hover:border-blue-500 hover:text-blue-400 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/calvinlch_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="rounded-full border border-border p-2.5 text-zinc-400 hover:border-blue-500 hover:text-blue-400 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Education ────────────────────────────── */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading>Education</SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Timeline */}
            <div className="relative flex flex-col gap-0 border-l-2 border-blue-500/30 pl-8">
              {education.map((entry, i) => (
                <div key={i} className="relative pb-10 last:pb-0">
                  <div className="absolute -left-[2.65rem] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-surface" />
                  <span className="inline-block text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full px-2.5 py-0.5 mb-2">
                    {entry.period}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{entry.school}</h3>
                  <p className="text-zinc-400 text-sm mt-0.5">{entry.detail}</p>
                </div>
              ))}
            </div>

            {/* School logos */}
            <div className="flex flex-col gap-4">
              {education.map((entry) => (
                <SchoolLogo key={entry.school} src={entry.logo} name={entry.school} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Projects teaser ──────────────────────── */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading>Projects</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {featuredProjects.map((p) => (
              <div key={p.slug} className="bg-surface border border-border rounded-xl overflow-hidden flex flex-col hover:border-blue-500/50 transition-colors">
                <CoverSlot src={p.cover} alt={p.title} hint={p.cover} />
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-base font-semibold text-white leading-snug">{p.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed flex-1">{p.blurb}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {p.tags.map((t) => <Tag key={t} label={t} />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ViewAllLink href="/projects" label="View All Projects" />
        </div>
      </section>

      {/* ── Section 4: Achievement teaser ───────────────────── */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading>Achievements</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {featuredAchievements.map((a) => (
              <div key={a.slug} className="bg-background border border-border rounded-xl overflow-hidden flex flex-col hover:border-blue-500/50 transition-colors">
                <CoverSlot src={a.cover} alt={a.title} hint={a.cover} />
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-base font-semibold text-white">{a.title}</h3>
                  <p className="text-zinc-400 text-sm">{a.subtitle}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {a.tags.map((t) => <Tag key={t} label={t} />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ViewAllLink href="/achievement" label="View All Achievements" />
        </div>
      </section>

      {/* ── Section 5: Work teaser ──────────────────────────── */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading>Work &amp; Experience</SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Work list */}
            <div className="flex flex-col gap-6">
              {workEntries.map((w) => (
                <div key={w.role} className="flex gap-4 items-start">
                  <div className="mt-2 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-white">{w.role}</h3>
                    <p className="text-zinc-400 text-sm mt-0.5">
                      {w.org} · <span className="text-zinc-500">{w.period}</span>
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-2">
                <ViewAllLink href="/work" label="View Full Work History" />
              </div>
              <div className="rounded-xl overflow-hidden border border-border">
                <img src={"/Chief Judge.jpg"} className="object-cover object-centre"></img>
              </div>
            </div>

            {/* Work images */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden border border-border">
                <img src={"/Work Calvin Teaching.jpg"} className="object-cover object-centre"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
