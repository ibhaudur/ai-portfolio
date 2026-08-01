import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <section id="education" className="px-4 pb-8 sm:pb-10">
      <div className="section-shell">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="panel-card overflow-hidden">
            <Image className="h-56 w-full object-cover" src="/images/mgr.jpg" alt="Dr.MGR University" width={400} height={240} />
            <div className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Master&apos;s Degree</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Dr. M.G.R. University</h3>
              <p className="mt-2 text-sm text-amber-300">MCA • CGPA 7.9</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Built a strong foundation in software engineering, architecture, and applied development while graduating from a prestigious academic institution.
              </p>
            </div>
          </div>

          <div className="panel-card overflow-hidden">
            <Image className="h-56 w-full object-cover" src="/images/jam.png" alt="Jamal Mohammed College" width={400} height={240} />
            <div className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Bachelor&apos;s Degree</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Jamal Mohammed College</h3>
              <p className="mt-2 text-sm text-amber-300">BCA • CGPA 7.4</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Strengthened my passion for computing through a blend of theory, practical projects, and a deeply rooted curiosity for problem solving.
              </p>
            </div>
          </div>

          <div className="panel-card overflow-hidden">
            <Image className="h-56 w-full object-cover" src="/images/vb.jpg" alt="Vebbox Software Solutions" width={400} height={240} />
            <div className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Professional Training</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Vebbox Software Solutions</h3>
              <p className="mt-2 text-sm text-amber-300">MERN Stack Program</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Completed immersive training that sharpened my practical understanding of building modern web applications end to end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
