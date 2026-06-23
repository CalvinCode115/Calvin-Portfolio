"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/app/lib/projects";

function CardImage({ project, isActive }: { project: Project; isActive?: boolean }) {
  return (
    <div
      className={`w-full aspect-video overflow-hidden border transition-colors ${
        isActive ? "border-blue-500/40" : "border-border"
      }`}
    >
      {project.cover ? (
        <img
          src={project.cover}
          alt={project.title}
          className={`w-full h-full object-cover object-top ${
            isActive ? "group-hover:scale-[1.02] transition-transform duration-300" : ""
          }`}
        />
      ) : (
        <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center gap-2 text-zinc-600">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <p className="text-xs px-4 text-center">
            Add <code className="text-blue-400">/public/projects/{project.slug}.jpg</code>
          </p>
        </div>
      )}
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setIdx((i) => (i + 1) % projects.length);

  const project     = projects[idx];
  const prevProject = projects[(idx - 1 + projects.length) % projects.length];
  const nextProject = projects[(idx + 1) % projects.length];

  return (
    <div className="flex flex-col items-center gap-8 w-full">

      {/* ── Three-card peek row ─────────────────────────────── */}
      <div className="relative w-full overflow-hidden">

        {/* Left fade */}
        <div className="absolute left-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-3 sm:gap-4">

          {/* PREV peek */}
          <button
            onClick={prev}
            aria-label="Previous project"
            className="w-[15%] sm:w-[22%] shrink-0 opacity-40 hover:opacity-65 scale-95 origin-right transition-opacity"
          >
            <CardImage project={prevProject} />
          </button>

          {/* ACTIVE card */}
          <div className="flex-1 min-w-0">
            <Link href={`/project/${project.slug}`} className="group block">
              <CardImage project={project} isActive />
            </Link>
          </div>

          {/* NEXT peek */}
          <button
            onClick={next}
            aria-label="Next project"
            className="w-[15%] sm:w-[22%] shrink-0 opacity-40 hover:opacity-65 scale-95 origin-left transition-opacity"
          >
            <CardImage project={nextProject} />
          </button>

        </div>
      </div>

      {/* ── Title + tags ────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-3 max-w-xl text-center px-4">
        <Link href={`/project/${project.slug}`} className="group">
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
        </Link>
        <div className="flex flex-wrap justify-center gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full px-2.5 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Arrows + dot indicators ─────────────────────────── */}
      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous project"
          className="w-9 h-9 rounded-full bg-surface border border-border text-zinc-400 hover:border-blue-500 hover:text-blue-400 flex items-center justify-center transition-colors"
        >
          <ChevronLeft />
        </button>

        <div className="flex items-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === idx ? "w-5 h-2 bg-blue-500" : "w-2 h-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next project"
          className="w-9 h-9 rounded-full bg-surface border border-border text-zinc-400 hover:border-blue-500 hover:text-blue-400 flex items-center justify-center transition-colors"
        >
          <ChevronRight />
        </button>
      </div>

    </div>
  );
}
