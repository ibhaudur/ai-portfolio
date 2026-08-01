"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ExperienceEntry {
  title: string;
  description: string[];
}

interface ExperienceCardProps {
  company: string;
  period: string;
  role: string;
  logo: string;
  items: ExperienceEntry[];
  isCurrent?: boolean;
}

export default function ExperienceCard({
  company,
  period,
  role,
  logo,
  items,
  isCurrent,
}: ExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="panel-card overflow-hidden p-5 sm:p-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-5 md:flex-row md:flex-1 md:items-start">
          <div className="flex items-center justify-center rounded-[24px] border border-white/10 bg-slate-950/60 p-3 md:w-44 flex-shrink-0">
            <Image className="h-20 w-full max-w-[180px] object-contain" src={logo} alt={company} width={180} height={120} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h4 className="text-xl font-semibold text-white">{company}</h4>
              {isCurrent && (
                <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Current
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-slate-300">
              <span className="font-medium text-emerald-300">{role}</span> • {period}
            </p>
          </div>
        </div>

        <button
          type="button"
          className={`rounded-full border px-4 py-2 text-sm font-medium transition whitespace-nowrap ${
            isOpen
              ? "border-emerald-400 bg-emerald-500/15 text-emerald-300"
              : "border-emerald-400/30 text-emerald-300 hover:bg-emerald-500/15"
          }`}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "Hide Projects" : "View Projects"}
        </button>
      </div>

      {isOpen ? (
        <div className="mt-5 rounded-[20px] border border-white/10 bg-slate-950/70 p-4">
          <p className="mb-3 text-base font-semibold text-white">Key work highlights</p>
          <ul className="space-y-3 text-sm text-slate-300">
            {items.map((item, index) => (
              <li key={`${item.title}-${index}`}>
                <span className="font-semibold text-amber-300">{item.title}</span>
                <ul className="mt-2 space-y-1 pl-4 text-slate-300">
                  {item.description.map((desc, descIndex) => (
                    <li key={`${item.title}-${descIndex}`}>{desc}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
