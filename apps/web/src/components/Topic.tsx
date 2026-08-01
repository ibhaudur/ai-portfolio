import React from "react";

const Topic = (props: any) => {
  return (
    <section className="px-4 py-8 sm:py-10">
      <div className="section-shell" id={props.i}>
        <div className="mx-auto max-w-3xl text-center" id="text">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
            {props.Head}
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
            {props.con}
          </p>
          <div className="accent-line" />
        </div>
      </div>
    </section>
  );
};

export default Topic;
