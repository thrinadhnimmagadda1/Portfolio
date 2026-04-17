import { useEffect, useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.animate-on-scroll, .animate-on-scroll-left').forEach((el, i) => {
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
    <section id="experience" className="py-24 bg-slate-50/80 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-300/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-300/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subheading animate-on-scroll">Experience</p>
          <h2 className="section-heading animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-400/80 via-brand-300/40 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={`relative flex items-start gap-6 md:gap-0 animate-on-scroll ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-brand-500 border-2 border-white transform -translate-x-1/2 mt-5 z-10 shadow-md shadow-brand-200" />

                {/* Card */}
                <div className={`card ml-14 md:ml-0 w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center flex-shrink-0 mr-3">
                      <Briefcase className="w-4 h-4 text-brand-600" />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${
                      exp.type === 'Full-time'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : exp.type === 'Part-time'
                        ? 'bg-sky-50 text-sky-700 border border-sky-200'
                        : 'bg-violet-50 text-violet-700 border border-violet-200'
                    }`}>
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-base mb-1">{exp.role}</h3>
                  <p className="text-brand-600 font-semibold text-sm mb-2">{exp.company}</p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
