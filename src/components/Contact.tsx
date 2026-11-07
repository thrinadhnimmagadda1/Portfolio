import { useEffect, useRef } from 'react';
import { Mail, Phone, ArrowUpRight, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personal } from '../data/portfolio';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: 'text-rose-500',
    bg: 'bg-rose-50 border-rose-200',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\D/g, '')}`,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 border-emerald-200',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/thrinadhsainimmagadda',
    href: personal.linkedin,
    color: 'text-sky-600',
    bg: 'bg-sky-50 border-sky-200',
    external: true,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/thrinadhnimmagadda1',
    href: personal.github,
    color: 'text-violet-600',
    bg: 'bg-violet-50 border-violet-200',
    external: true,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    <section id="contact" className="py-24 bg-slate-50/80 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-300/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subheading animate-on-scroll">Contact</p>
          <h2 className="section-heading animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-3 animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            I'm looking for AI Engineer, Backend Engineer, and Software Engineer roles. Let's build something meaningful together.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {contactLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="card group flex items-center gap-4 no-underline animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${link.bg} transition-all group-hover:scale-110`}>
                  <link.icon className={`w-5 h-5 ${link.color}`} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 font-medium">{link.label}</p>
                  <p className="text-sm text-gray-700 font-medium truncate mt-0.5">{link.value}</p>
                </div>
                <ArrowUpRight className={`w-4 h-4 flex-shrink-0 ${link.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </a>
            ))}
          </div>

          {/* CTA card */}
          <div className="card text-center relative overflow-hidden animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{ background: 'radial-gradient(ellipse at center, #6366f1 0%, transparent 70%)' }}
            />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center mx-auto mb-4">
                <Send className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Ready to collaborate?</h3>
              <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
                Whether it's a job opportunity, research project, or just a chat about AI — my inbox is open.
              </p>
              <a href={`mailto:${personal.email}`} className="btn-primary mx-auto">
                <Mail className="w-4 h-4" />
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 Thrinadh Sai Nimmagadda. Built with React & Tailwind.</p>
          <div className="flex items-center gap-4">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors flex items-center gap-1">
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors flex items-center gap-1">
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
