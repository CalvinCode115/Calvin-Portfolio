import { projects } from "@/app/lib/projects";
import { skillCategories } from "@/app/lib/skills";
import ProjectCarousel from "@/app/components/ProjectCarousel";

function SkillTile({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex flex-col items-center gap-2 w-20">
      <div className="w-16 h-16 rounded-xl bg-zinc-900 border border-border flex items-center justify-center overflow-hidden">
        {logo ? (
          <img src={logo} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xl font-semibold text-blue-400">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <span className="text-xs text-zinc-400 text-center leading-tight">{name}</span>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col flex-1">

      {/* ── Section 1: Project Carousel ─────────────────────── */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-white mb-3">Projects</h1>
            <div className="w-10 h-0.5 bg-blue-500 mx-auto mb-4" />
            <p className="text-zinc-400 text-sm">Click a project to view the full case study</p>
          </div>
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      {/* ── Section 2: Skills Grid ──────────────────────────── */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-3">Skills</h2>
            <div className="w-10 h-0.5 bg-blue-500" />
          </div>
          <div className="flex flex-col gap-12">
            {skillCategories.map((cat) => (
              <div key={cat.label}>
                <div className="flex flex-wrap gap-6 items-center">
                  <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-5">
                    {cat.label}
                  </h2>
                  {cat.skills.map((skill) => (
                    <SkillTile key={skill.name} name={skill.name} logo={skill.logo} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
