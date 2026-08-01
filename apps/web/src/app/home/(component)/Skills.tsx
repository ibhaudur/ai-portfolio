import React from "react";
import Image from "next/image";

const languages_and_Framework = [
  { image: "/images/technologies/html5.svg", name: "Html5" },
  { image: "/images/technologies/css-3.svg", name: "CSS3" },
  { image: "/images/technologies/javascript.svg", name: "JavaScript" },
  { image: "/images/technologies/ts.svg", name: "TypeScript" },
  { image: "/images/technologies/react.svg", name: "React Js" },
  { image: "/images/technologies/next-js.svg", name: "Next Js" },
  { image: "/images/technologies/node-js.svg", name: "Node Js" },
  { image: "/images/technologies/express.svg", name: "Express" },
  { image: "/images/technologies/mongo.svg", name: "MongoDb" },
  { image: "/images/technologies/bootstrap.svg", name: "Bootstrap" },
  { image: "/images/technologies/materialui.svg", name: "MaterialUi" },
  { image: "/images/technologies/tailwindcss.svg", name: "TailwindCss" },
  { image: "/images/technologies/github.svg", name: "GitHub" },
  { image: "/images/technologies/AWS.svg", name: "AWS" },
  { image: "/images/technologies/docker.svg", name: "Docker" },
  { image: "/images/technologies/sql.svg", name: "MySQL" },
];

const Skills = () => {
  return (
     <section id="experience">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
    <div className="panel-card p-5 sm:p-6">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Toolkit</p>
          <h3 className="text-2xl font-semibold text-white">Core Skills & Technologies</h3>
        </div>
        <p className="text-sm text-slate-300">Focused on modern, production-ready stack choices.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {languages_and_Framework.map((item, index) => (
          <div key={index} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-center transition hover:-translate-y-1 hover:border-emerald-400/40">
            <div className="flex justify-center">
              <Image className="h-14 bg-white p-2 rounded w-14" src={item.image} alt={item.name} width={56} height={56} />
            </div>
            <p className="mt-3 text-sm font-medium text-slate-200">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </section>
  );
};

export default Skills;
