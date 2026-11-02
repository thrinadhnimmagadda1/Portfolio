import { useEffect, useRef } from 'react';
import { Brain, Code2, Layers, Zap } from 'lucide-react';
import { personal } from '../data/portfolio';

const highlights = [
  { icon: Brain, label: 'ML Systems', desc: 'TF-IDF, BERT, XGBoost — from model training to production inference' },
  { icon: Code2, label: 'Python & Java', desc: 'Full-stack engineering across Spring Boot, FastAPI, Django, and Flask' },
  { icon: Layers, label: 'NLP Pipelines', desc: 'SBERT embeddings, UMAP reduction, K-Means clustering at scale' },
  { icon: Zap, label: 'Latency Optimization', desc: 'Async processing and caching reduced queries from minutes to seconds' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.animate-on-scroll, .animate-on-scroll-left').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
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
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="section-subheading animate-on-scroll-left">About Me</p>
            <h2 className="section-heading animate-on-scroll-left" style={{ transitionDelay: '0.1s' }}>
              Turning Data into{' '}
              <span className="gradient-text">Intelligent Systems</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mt-6 animate-on-scroll-left" style={{ transitionDelay: '0.2s' }}>
              {personal.about}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 animate-on-scroll-left" style={{ transitionDelay: '0.3s' }}>
              {['Python', 'Java', 'NLP', 'FastAPI', 'Spring Boot', 'BERT', 'XGBoost'].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="card group animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <item.icon className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.label}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
