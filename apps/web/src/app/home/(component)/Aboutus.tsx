import React from "react";
import { Experience } from "../utils/data";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Projects Delivered" },
  { value: "20+", label: "Technologies" },
];

const highlights = [
  "Modern React and Next.js applications with scalable, accessible, and polished interfaces",
  "Scalable Node.js and Python/FastAPI backends with secure APIs, authentication, and robust architecture",
  "AI-powered applications using LLMs, RAG, LangChain, LangGraph, LangSmith, embeddings, vector databases, and intelligent agents",
  "Production-ready systems built with Docker, AWS, CI/CD, Nginx, caching, rate limiting, and performance optimization",
];

const Aboutus = () => {
  return (
    <section id="about" className="px-4 pb-8 sm:pb-10">
      <div className="section-shell space-y-8">
        {/* Stats Section */}
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="panel-card overflow-hidden border-emerald-400/20 p-5 text-center sm:p-6"
            >
              <p className="text-3xl font-bold text-amber-300 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="panel-card overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-4 text-sm leading-8 text-slate-300 sm:text-base">
              <p>
                I am{" "}
                <strong className="text-white">Ibhaudur Rahman</strong>, a{" "}
                <strong className="text-white">Full Stack AI Engineer</strong>{" "}
                with{" "}
                <strong className="text-emerald-400">
                  {Experience()} years
                </strong>{" "}
                of professional experience building modern, scalable, and
                production-ready applications.
              </p>

              <p>
                I work across the complete product lifecycle — from crafting
                responsive interfaces with React and Next.js to designing
                scalable backend systems, APIs, databases, AI-powered
                solutions, deployment pipelines, and cloud infrastructure.
              </p>

              <p>
                My expertise spans{" "}
                <strong className="text-white">
                  JavaScript, TypeScript, React, Next.js, Node.js, Python,
                  FastAPI, MongoDB, SQL, Docker, AWS, and AI technologies
                </strong>
                , with a strong focus on system design, security, concurrency,
                rate limiting, performance optimization, and reliable
                production architecture.
              </p>

              <p>
                I build intelligent applications using{" "}
                <strong className="text-white">
                  LLMs, RAG, LangChain, LangGraph, LangSmith, embeddings, vector databases, and AI
                  agents
                </strong>
                , combining modern AI capabilities with robust full-stack
                engineering to solve real-world problems.
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
