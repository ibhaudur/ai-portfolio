import React from "react";
import { Experience } from "../utils/data";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Projects Delivered" },
  { value: "15+", label: "Tech Stack" },
];

const highlights = [
  "React, Next.js, and Tailwind craft for elegant interfaces",
  "Scalable Node.js and MongoDB APIs with secure architecture",
  "Cloud-native delivery using Docker, AWS, and modern DevOps habits",
];

const Aboutus = () => {
  return (
    <section id="about" className="px-4 pb-8 sm:pb-10">
      <div className="section-shell space-y-8">
        {/* Stats Section */}
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat, idx) => (
            <div key={idx} className="panel-card overflow-hidden border-emerald-400/20 p-5 text-center sm:p-6">
              <p className="text-3xl font-bold text-amber-300 sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="panel-card overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-4 text-sm leading-8 text-slate-300 sm:text-base">
              <p>
                I am <strong className="text-white">Ibhaudur Rahman</strong>, a <strong className="text-white">AI FullStack Developer</strong> with <strong className="text-emerald-400">{Experience()} years</strong> of professional experience. I create fast, accessible, and visually polished experiences that balance strategy, usability, and technical reliability.
              </p>
              <p>
                My work spans the full product lifecycle — from interface design and component systems to API architecture, database design, deployment, and ongoing optimization.
              </p>
              <p>
                I bring a thoughtful approach to every build, backed by strong fundamentals in JavaScript, TypeScript, React, Next.js, Node.js, MongoDB, SQL, Docker, AWS, and modern web security practices.
              </p>
            </div>

            <div className="rounded-[24px] border border-emerald-400/20 bg-slate-950/60 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                What I bring
              </p>
              <div className="mt-4 space-y-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
