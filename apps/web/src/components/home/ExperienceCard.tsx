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
}

export default function ExperienceCard({
  company,
  period,
  role,
  logo,
  items,
}: ExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 w-full rounded-lg border border-green-500 p-4 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-start">
        <div className="flex items-center md:w-1/6">
          <Image
            className="w-full rounded-lg py-3"
            src={logo}
            alt={company}
            width={240}
            height={160}
          />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-white">{company}</h4>
          <p className="mb-2 text-sm text-gray-300">{period} | {role}</p>
          <button
            type="button"
            className={`rounded-full border px-3 py-2 text-sm transition ${
              isOpen
                ? "border-slate-700 bg-slate-700 text-white"
                : "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
            }`}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "Close Projects" : "View Projects"}
          </button>

          {isOpen ? (
            <div className="mt-4 rounded-md border border-slate-700 bg-slate-900/60 p-4">
              <p className="mb-2 text-lg font-semibold text-white">Projects</p>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-200">
                {items.map((item, index) => (
                  <li key={`${item.title}-${index}`}>
                    <span className="font-semibold text-green-400">{item.title}</span>
                    <ul className="mt-1 list-disc space-y-1 pl-5">
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
      </div>
    </div>
  );
}
