import { useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react';
import { education } from '../data/portfolio';

export default function Education() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subheading animate-on-scroll">Education</p>
          <h2 className="section-heading animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, i) => (
            <div
              key={edu.id}
              className="card group relative overflow-hidden animate-on-scroll"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Accent top line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
                  <GraduationCap className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base leading-snug">{edu.degree}</h3>
                  <p className="text-brand-600 font-semibold text-sm mt-0.5">{edu.school}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.period}
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Star className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-semibold text-amber-600">GPA: {edu.gpa}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
