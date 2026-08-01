"use client";

import Image from "next/image";
import React from "react";
import { Experience, Icons } from "../utils/data";

const Banner = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07111b]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,.12),transparent_35%)]" />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-0">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left */}
          <div>
            {/* Availability */}
            <div className="mb-8 flex items-center gap-3 uppercase tracking-[0.35em] text-xs text-emerald-400">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for opportunities
            </div>

            {/* Name */}
            <h1 className="font-serif leading-none">
              <span className="block text-5xl text-[clamp(3.2rem,8vw,5.5rem)] font-bold leading-[1.05] text-white sm:text-6xl lg:text-8xl">
                Ibhaudur
              </span>

              <span className="mt-2 block italic font-light text-5xl text-amber-300 sm:text-6xl lg:text-7xl">
                Rahman
              </span>
            </h1>

            {/* Role */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-[2px] w-14 bg-amber-400"></div>

              <p className="uppercase tracking-[0.3em] text-sm font-semibold text-amber-300">
                AI Full Stack Developer
              </p>
            </div>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300">
              Crafting scalable web applications with{" "}
              <span className="font-bold text-white">
                {Experience()} years
              </span>{" "}
              of expertise across React, Next.js, Node.js, Express.js, Python, FastAPI,
              PostgreSQL, AWS, RAG, LLM, LangChain and AI-powered applications.
            </p>

            {/* Social Icons */}
            <div className="mt-10 flex gap-4">
              {Icons.map((item, index) => (
                <button
                  key={index}
                  onClick={() => window.open(item.link, "_blank")}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-emerald-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-500 hover:text-white"
                >
                  <item.tag />
                </button>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="#contact"
                className="border border-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300 transition hover:bg-amber-400 hover:text-black"
              >
                Get In Touch
              </a>

              <a
                href="/ibhaudur_Rahman_CV.pdf"
                download
                className="border border-emerald-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300 transition hover:bg-emerald-500 hover:text-black"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative p-10 flex justify-center">
            {/* Glow */}
            <div className="absolute h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl"></div>

            {/* Decorative Corners */}
            <div className="absolute left-10 top-10 h-10 w-10 border-l-2 border-t-2 border-amber-400"></div>

            <div className="absolute bottom-10 right-10 h-10 w-10 border-b-2 border-r-2 border-amber-400"></div>

            {/* Image */}
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-[6px] border-amber-400 shadow-[0_0_60px_rgba(16,185,129,.25)] lg:h-[450px] lg:w-[450px]">
              <Image
                src="/images/35874.jpg"
                alt="Ibhaudur Rahman"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-20 right-9 rounded-full border border-amber-400 bg-[#0d1723] px-6 py-3 text-sm font-semibold text-amber-300 shadow-lg">
              {Experience()} yrs exp
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;