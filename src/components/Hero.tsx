import { Mail, ChevronDown, Download, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personal } from '../data/portfolio';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      {/* Background glow blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, #8b5cf6 40%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c084fc 0%, transparent 70%)' }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-brand-300/50 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* Profile photo */}
          <div className="flex-shrink-0 order-first lg:order-last">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-brand-400 via-purple-400 to-pink-400 opacity-50 blur-sm animate-pulse-glow" />
              {/* Border ring */}
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full p-0.5 bg-gradient-to-tr from-brand-500 via-purple-500 to-pink-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                  <img
                    src="/profile.png"
                    alt="Thrinadh Sai Nimmagadda"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-brand-200 text-xs font-semibold text-brand-700 whitespace-nowrap shadow-md shadow-brand-100">
                <span className="glow-dot animate-pulse" />
                Open to Work
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center lg:text-left max-w-xl">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-200 text-sm text-brand-700 font-medium mb-6 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              AI / ML Engineering Roles
            </div>

            {/* Name */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-3 leading-tight animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              {personal.name.split(' ')[0]}{' '}
              <span className="gradient-text">{personal.name.split(' ').slice(1).join(' ')}</span>
            </h1>

            {/* Title */}
            <div
              className="flex items-center justify-center lg:justify-start gap-3 mb-5 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-brand-500" />
              <p className="text-lg md:text-xl font-semibold text-brand-600 font-mono tracking-wide">
                {personal.title}
              </p>
            </div>

            {/* Tagline */}
            <p
              className="text-base md:text-lg text-gray-500 leading-relaxed mb-6 animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              Software Engineer with 3 years building scalable ML systems and low-latency inference services.
            </p>

            {/* Key stats */}
            <div
              className="grid grid-cols-3 gap-3 mb-8 animate-slide-up"
              style={{ animationDelay: '0.35s' }}
            >
              {[
                { value: '<150ms', label: 'API Latency' },
                { value: '500+', label: 'Users Served' },
                { value: '23ms', label: 'Pipeline (was 10min)' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-3 text-center shadow-sm">
                  <div className="text-lg font-extrabold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View My Work
              </button>
              <a href={`mailto:${personal.email}`} className="btn-secondary">
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
              <a
                href="/Thrinadh_Sai_Nimmagadda_Resume.pdf"
                download="Thrinadh_Sai_Nimmagadda_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Social links */}
            <div
              className="flex items-center justify-center lg:justify-start gap-3 animate-slide-up"
              style={{ animationDelay: '0.5s' }}
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-gray-500 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-all duration-200 shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-gray-500 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-all duration-200 shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-gray-500 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-all duration-200 shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-300 hover:text-brand-500 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </section>
  );
}
