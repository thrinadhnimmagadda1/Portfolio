import {
  ArrowUpRight,
  Mail,
  Download,
  Code2,
  BrainCircuit,
  Database,
  MapPin,
} from "lucide-react";

import {
  GithubIcon as Github,
  LinkedinIcon as Linkedin,
} from "./components/Icons";
import {
  personal,
  projects as projectData,
  experiences as experienceData,
  skills as skillData,
  education,
  certification,
} from "./data/portfolio";

const projects = projectData.map((p) => ({
  n: String(p.id).padStart(2, "0"),
  name: p.name,
  kind: p.subtitle,
  description: p.description,
  tech: p.tags,
  impact: p.impact,
}));
const experiences = experienceData.map((e) => ({
  role: e.role,
  org: e.company,
  time: e.period,
  location: e.location,
  bullets: e.bullets,
}));
const skills = skillData.map((s) => ({
  label: s.category,
  value: s.items.join(" · "),
}));
const github = personal.github;
const linkedin = personal.linkedin;
const email = `mailto:${personal.email}`;
const resume = `${import.meta.env.BASE_URL}Thrinadh_Sai_Nimmagadda_Resume.pdf`;
const nav = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];
export default function App() {
  return (
    <div
      className="min-h-screen bg-white text-slate-900 selection:bg-blue-100"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 md:px-8 h-18 min-h-[72px] flex items-center justify-between gap-5">
          <a href="#home" className="font-bold tracking-tight text-lg">
            Thrinadh<span className="text-blue-600">.</span>
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex gap-5 text-sm text-slate-600"
          >
            {nav.map(([label, url]) => (
              <a
                className="hover:text-blue-600 transition-colors"
                key={label}
                href={url}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href={email}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold hover:border-blue-400 hover:text-blue-600 transition"
          >
            Let's connect <ArrowUpRight className="inline w-4 h-4" />
          </a>
        </div>
        <nav
          aria-label="Mobile navigation"
          className="lg:hidden flex gap-5 overflow-x-auto border-t border-slate-100 px-5 py-3 text-sm text-slate-600"
        >
          {nav.map(([label, url]) => (
            <a
              className="whitespace-nowrap hover:text-blue-600"
              key={label}
              href={url}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>
      <main>
        <section
          id="home"
          className="mx-auto max-w-6xl px-5 md:px-8 pt-24 pb-24 md:pt-32 md:pb-32"
        >
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-blue-700 text-sm font-medium mb-8">
              <span className="h-2 w-2 rounded-full bg-blue-500" /> Open to
              software engineering & AI/ML opportunities
            </div>
            <p className="text-lg font-semibold text-slate-500 mb-4">
              Hi, I'm Thrinadh Sai Nimmagadda.
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.055em] leading-[1.08]">
              I build reliable software{" "}
              <span className="text-blue-600">and intelligent systems.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mt-8">
              Software Engineer with 3+ years of industry experience building
              backend systems, NLP pipelines, and applied AI products. I turn
              complex problems into scalable, useful products.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition"
              >
                <Github className="w-[18px] h-[18px]" /> GitHub
              </a>
              <a
                href={resume}
                download="Thrinadh_Sai_Nimmagadda_Resume.pdf"
                className="inline-flex items-center gap-2 border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition"
              >
                <Download size={18} /> Download résumé
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm mt-9">
              <MapPin size={16} /> Columbia, South Carolina · MS Computer
              Science, University of South Carolina
            </div>
          </div>
        </section>
        <section className="border-y border-slate-100 bg-slate-50/70">
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-7">
            {[
              ["3+", "Years in software engineering"],
              ["50% → 80%", "Resume parsing accuracy"],
              ["20%", "API latency improvement"],
              ["100K+", "Research papers organized"],
            ].map(([num, desc]) => (
              <div key={desc}>
                <div className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                  {num}
                </div>
                <div className="text-sm text-slate-500 mt-2">{desc}</div>
              </div>
            ))}
          </div>
        </section>
        <section
          id="about"
          className="mx-auto max-w-6xl px-5 md:px-8 py-24 grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-24"
        >
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              01 / About
            </p>
            <h2 className="text-4xl font-bold tracking-tight">
              Engineering with purpose.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
            <p>
              I'm a software engineer who enjoys working at the intersection of
              strong backend foundations and practical AI. At Wipro, I worked on
              resume parsing, document extraction, and API performance. More
              recently, I've built semantic search, RAG, and AI agent workflows.
            </p>
            <p>
              I'm pursuing an MS in Computer Science at the University of South
              Carolina (expected December 2026), where I also teach Java and
              data structures. I care about measurable improvements,
              reliability, and building systems people can actually use.
            </p>
          </div>
        </section>
        <section
          id="experience"
          className="bg-slate-50/70 border-y border-slate-100"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-24">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              02 / Experience
            </p>
            <h2 className="text-4xl font-bold tracking-tight mb-12">
              Where I've made an impact.
            </h2>
            <div className="space-y-4">
              {experiences.map((e) => (
                <article
                  key={e.role}
                  className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{e.role}</h3>
                      <p className="text-blue-600 font-medium mt-1">{e.org}</p>
                    </div>
                    <p className="text-sm text-slate-500 whitespace-nowrap">
                      {e.time}
                    </p>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">{e.location}</p>
                  <ul className="list-disc pl-5 text-slate-600 mt-5 space-y-2 leading-relaxed max-w-4xl">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="mx-auto max-w-6xl px-5 md:px-8 py-24">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            03 / Selected projects
          </p>
          <h2 className="text-4xl font-bold tracking-tight">
            Built to solve real problems.
          </h2>
          <p className="text-slate-500 mt-4 mb-12 max-w-2xl">
            Applied AI and engineering projects spanning retrieval, agent
            workflows, workforce analytics, and NLP.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p) => (
              <article
                key={p.n}
                className="group rounded-2xl border border-slate-200 p-7 md:p-8 hover:border-blue-300 hover:shadow-lg hover:shadow-slate-100 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">
                    {p.kind}
                  </span>
                  <span className="text-slate-300 font-mono">{p.n}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight mt-6">
                  {p.name}
                </h3>
                <p className="text-slate-600 leading-relaxed mt-4 min-h-[120px]">
                  {p.description}
                </p>
                <div className="text-sm font-semibold text-blue-700 mt-5">
                  {p.impact}
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-7">
            Interested in the implementation?{" "}
            <a
              className="text-blue-600 font-semibold hover:underline"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              Explore my GitHub <ArrowUpRight className="inline w-4 h-4" />
            </a>
          </p>
        </section>
        <section
          id="skills"
          className="bg-slate-50/70 border-y border-slate-100"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-24">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              04 / Skills
            </p>
            <h2 className="text-4xl font-bold tracking-tight mb-12">
              My engineering toolkit.
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((s, i) => (
                <div
                  key={s.label}
                  className="bg-white border border-slate-200 rounded-2xl p-7"
                >
                  <div className="flex items-center gap-3 mb-4 text-blue-600">
                    {
                      [
                        <Code2 size={22} />,
                        <BrainCircuit size={22} />,
                        <Code2 size={22} />,
                        <Database size={22} />,
                      ][i]
                    }
                    <h3 className="font-bold text-slate-900">{s.label}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="education"
          className="mx-auto max-w-6xl px-5 md:px-8 py-24"
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            05 / Education & certification
          </p>
          <h2 className="text-4xl font-bold tracking-tight mb-12">
            Learning that shapes my work.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {education.map((e) => (
              <article
                key={e.id}
                className="border border-slate-200 rounded-2xl p-7"
              >
                <h3 className="text-xl font-bold">{e.degree}</h3>
                <p className="text-blue-600 font-medium mt-2">{e.school}</p>
                <p className="text-slate-600 mt-4">{e.period}</p>
                <p className="text-sm text-slate-500 mt-2">
                  {e.location} · CGPA: {e.gpa}
                </p>
              </article>
            ))}
          </div>
          <article className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/50 p-7">
            <p className="text-sm font-semibold text-blue-600 mb-2">
              Certification
            </p>
            <h3 className="text-xl font-bold">{certification.name}</h3>
            <p className="text-slate-600 mt-3">
              {certification.issuer} · Issued {certification.issued}
            </p>
            <p className="text-sm text-slate-500 mt-2 break-all">
              Credential ID: {certification.credentialId}
            </p>
          </article>
        </section>
        <section
          id="contact"
          className="mx-auto max-w-6xl px-5 md:px-8 py-28 text-center"
        >
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            06 / Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let's build something meaningful.
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mt-6 leading-relaxed">
            I'm exploring software engineering and applied AI opportunities. If
            my work aligns with your team, I'd love to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-9">
            <a
              href={email}
              className="inline-flex gap-2 items-center rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
            >
              <Mail size={18} /> Email me
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex gap-2 items-center rounded-xl border border-slate-200 px-6 py-3 font-semibold hover:bg-slate-50"
            >
              <Linkedin className="w-[18px] h-[18px]" /> LinkedIn
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex gap-2 items-center rounded-xl border border-slate-200 px-6 py-3 font-semibold hover:bg-slate-50"
            >
              <Github className="w-[18px] h-[18px]" /> GitHub
            </a>
            <a
              href={resume}
              download="Thrinadh_Sai_Nimmagadda_Resume.pdf"
              className="inline-flex gap-2 items-center rounded-xl border border-slate-200 px-6 py-3 font-semibold hover:bg-slate-50"
            >
              <Download size={18} /> Résumé
            </a>
          </div>
          <a
            href={email}
            className="inline-block mt-6 text-sm text-slate-600 hover:text-blue-600 break-all"
          >
            {personal.email}
          </a>
        </section>
      </main>
      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Thrinadh Sai Nimmagadda · Built with care.
      </footer>
    </div>
  );
}
