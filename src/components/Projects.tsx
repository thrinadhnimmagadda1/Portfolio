import { useEffect, useRef } from 'react';
import { TrendingUp, Cpu, BookOpen } from 'lucide-react';
import { projects } from '../data/portfolio';

const projectIcons = [TrendingUp, Cpu, BookOpen];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subheading animate-on-scroll">Projects</p>
          <h2 className="section-heading animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-3 animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            Applied AI and backend engineering projects with measured results and documented evaluation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = projectIcons[i % projectIcons.length];
            return (
              <div
                key={project.id}
                className="card flex flex-col group relative overflow-hidden animate-on-scroll"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  {project.featured && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-lg mb-1">{project.name}</h3>
                <p className="text-brand-600 text-sm font-medium mb-3">{project.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-base font-bold gradient-text">{m.value}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-1.5 mb-5 flex-1">
                  {project.bullets.slice(0, 3).map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-brand-400 mt-1.5 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {project.tags.slice(0, 6).map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                  {project.tags.length > 6 && (
                    <span className="tag">+{project.tags.length - 6}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
