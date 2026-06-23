import { achievements } from "@/app/lib/achievements";
import GalleryLightbox from "@/app/components/GalleryLightbox";

export default function AchievementPage() {
  return (
    <main className="flex-1 bg-background">

      {/* ── Page header ─────────────────────────────────────── */}
      <div className="bg-surface border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            My Journey
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Achievements</h1>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">
            The final chapter of my robotics journey as a competitor — from the
            national stage to representing Singapore at the world finals.
          </p>
        </div>
      </div>

      {/* ── Timeline ────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="relative">

          {/* Vertical accent line */}
          <div className="absolute left-5 top-0 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-blue-500/30 to-transparent" />

          <div className="flex flex-col gap-20">
            {achievements.map((a) => (
              <div key={a.slug} className="relative pl-16">

                {/* ── Timeline node — rank badge ─────────────── */}
                <div className="absolute -left-1 top-0 w-12 h-12 rounded-full bg-blue-600 border-4 border-background flex items-center justify-center shadow-lg shadow-blue-500/40">
                  <span className="text-white text-[10px] font-extrabold leading-tight text-center px-0.5">
                    {a.rank}
                  </span>
                </div>

                {/* ── Milestone content ──────────────────────── */}
                <div className="flex flex-col gap-8 pt-1">

                  {/* 1 · Result + title */}
                  <div>
                    <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">
                      {a.date} &nbsp;·&nbsp; {a.location}
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-2">
                      {a.result}
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed">{a.title}</p>
                  </div>

                  {/* 2 · Story */}
                  <div className="flex flex-col gap-4">
                    {a.story.map((para, i) => (
                      <p key={i} className="text-zinc-300 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* 3 · Reflection callout */}
                  <div className="border-l-4 border-blue-500 bg-blue-500/5 rounded-r-xl px-5 py-4">
                    <p className="text-zinc-300 italic leading-relaxed">{a.reflection}</p>
                  </div>

                  {/* 4 · Highlight chips */}
                  <div className="flex flex-wrap gap-2">
                    {a.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full px-3 py-1 font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* 5 · Photo gallery — reuses project lightbox */}
                  {a.gallery.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">
                        Photo Gallery
                      </h3>
                      <GalleryLightbox images={a.gallery} alt={a.title} />
                    </div>
                  )}

                  {/* 6 · Videos — hidden when empty */}
                  {a.video && a.video.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">
                        Video{a.video.length > 1 ? "s" : ""}
                      </h3>
                      <div className="flex flex-col gap-4">
                        {a.video.map((src, i) => {
                          const isYouTube =
                            src.includes("youtube.com") || src.includes("youtu.be");
                          if (isYouTube) {
                            const id = src.includes("youtu.be")
                              ? src.split("/").pop()?.split("?")[0]
                              : new URL(src).searchParams.get("v");
                            return (
                              <div
                                key={i}
                                className="rounded-2xl overflow-hidden border border-border bg-zinc-900 aspect-video"
                              >
                                <iframe
                                  src={`https://www.youtube.com/embed/${id}`}
                                  title={`${a.title} video ${i + 1}`}
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  className="w-full h-full"
                                />
                              </div>
                            );
                          }
                          return (
                            <div
                              key={i}
                              className="rounded-2xl overflow-hidden border border-border bg-zinc-900"
                            >
                              <video
                                src={src}
                                controls
                                preload="metadata"
                                className="w-full"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 7 · Press badge */}
                  {a.press && (
                    <div>
                      <a
                        href={a.press.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 hover:bg-blue-500/20 transition-colors"
                        aria-label={`${a.press.label} (opens in new tab)`}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        {a.press.label}
                      </a>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
