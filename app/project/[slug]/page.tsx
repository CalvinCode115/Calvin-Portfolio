import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/app/lib/projects";
import GalleryLightbox from "@/app/components/GalleryLightbox";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full px-2.5 py-0.5">
      {label}
    </span>
  );
}

function SectionBlock({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest">{heading}</h2>
      {children}
    </div>
  );
}

function Placeholder({ text }: { text: string }) {
  return (
    <p className="text-zinc-600 italic text-sm border border-dashed border-zinc-800 rounded-lg px-4 py-3">
      {text}
    </p>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const { detail } = project;
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject  = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject  = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="flex-1 bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12">

        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Projects
        </Link>

        {/* Cover image */}
        <div className="w-full aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-border mb-8">
          {project.cover ? (
            <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm">
              Add cover image to <code className="text-blue-400 ml-1">/public/projects/{project.slug}.jpg</code>
            </div>
          )}
        </div>

        {/* Title + tags */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-white leading-snug">{project.title}</h1>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {project.tags.map((t) => <Tag key={t} label={t} />)}
          </div>
        </div>

        {/* Timeline */}
        {detail.timeline && (
          <p className="text-sm text-zinc-500 flex items-center gap-1.5 mb-10">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            {detail.timeline}
          </p>
        )}

        {/* Demo videos — only shown when detail.video has entries */}
        {detail.video && detail.video.length > 0 && (
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">
              Demo Video{detail.video.length > 1 ? "s" : ""}
            </h2>
            <div className="flex flex-col gap-4">
              {detail.video.map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-border bg-zinc-900">
                  <video
                    src={src}
                    controls
                    preload="metadata"
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="h-px bg-border mb-10" />

        {/* Detail sections */}
        <div className="flex flex-col gap-10">

          <SectionBlock heading="About this project">
            {detail.description ? (
              <p className="text-zinc-300 leading-relaxed">{detail.description}</p>
            ) : (
              <Placeholder text="No description added yet — edit detail.description in app/lib/projects.ts" />
            )}
          </SectionBlock>

          <SectionBlock heading="Team / Individual">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                <span className={`inline-block text-xs font-medium rounded-full px-3 py-1 border ${detail.isTeam ? "bg-blue-500/10 text-blue-400 border-blue-500/20" : "bg-zinc-800 text-zinc-300 border-zinc-700"}`}>
                  {detail.isTeam ? `Team project${detail.teamSize ? ` (${detail.teamSize} people)` : ""}` : "Solo project"}
                </span>
              </div>
              {detail.role ? (
                <p className="text-zinc-400 text-sm">Role: <span className="text-white">{detail.role}</span></p>
              ) : (
                <Placeholder text="Add your role — edit detail.role in app/lib/projects.ts" />
              )}
            </div>
          </SectionBlock>

          <SectionBlock heading="Software & Tools Used">
            {detail.software.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {detail.software.map((s) => <Tag key={s} label={s} />)}
              </div>
            ) : (
              <Placeholder text="Add tools — edit detail.software in app/lib/projects.ts" />
            )}
          </SectionBlock>

          <SectionBlock heading="What I Learned">
            {detail.learned.length > 0 ? (
              <ul className="flex flex-col gap-2">
                {detail.learned.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <Placeholder text="Add learnings — edit detail.learned in app/lib/projects.ts" />
            )}
          </SectionBlock>

          <SectionBlock heading="Challenges">
            {detail.challenges ? (
              <p className="text-zinc-300 leading-relaxed">{detail.challenges}</p>
            ) : (
              <Placeholder text="Describe challenges — edit detail.challenges in app/lib/projects.ts" />
            )}
          </SectionBlock>

          {/* Photo gallery */}
          <SectionBlock heading="Photo Gallery">
            {detail.gallery.length > 0 ? (
              <GalleryLightbox images={detail.gallery} alt={project.title} />
            ) : (
              <Placeholder text="Add gallery images — edit detail.gallery in app/lib/projects.ts (array of /public paths)" />
            )}
          </SectionBlock>

        </div>

        {/* Prev / Next project navigation */}
        <div className="mt-16 pt-10 border-t border-border grid grid-cols-2 gap-4">
          <Link
            href={`/project/${prevProject.slug}`}
            className="group flex flex-col gap-1 bg-surface border border-border rounded-xl p-4 hover:border-blue-500/50 transition-colors"
          >
            <span className="text-xs text-zinc-500 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Previous
            </span>
            <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors line-clamp-2">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/project/${nextProject.slug}`}
            className="group flex flex-col gap-1 bg-surface border border-border rounded-xl p-4 hover:border-blue-500/50 transition-colors text-right"
          >
            <span className="text-xs text-zinc-500 flex items-center justify-end gap-1">
              Next
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
            <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors line-clamp-2">
              {nextProject.title}
            </span>
          </Link>
        </div>

      </div>
    </main>
  );
}
