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
    <React.Fragment>
      <h3 className="my-4 text-center underline">Skills</h3>
      <div className="flex flex-wrap justify-center">
        {languages_and_Framework.map((item, index) => (
          <div key={index} className="mb-3 w-1/2 px-2 sm:w-1/3 md:w-1/4 lg:w-1/5">
            <div className="flex justify-center">
              <Image
                className="w-24"
                src={item.image}
                alt="i"
                width={200}
                height={200}
              />
            </div>
            <p className="text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Skills;
