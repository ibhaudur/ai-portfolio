import React from "react";

const Topic = (props: any) => {
  return (
    <section id="about" className="bg-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-2" id={props.i}>
        <div className="text-center" id="text">
          <h1 id="bf">{props.Head}</h1>
          <p>{props.con}</p>
        </div>
      </div>
    </section>
  );
};

export default Topic;
