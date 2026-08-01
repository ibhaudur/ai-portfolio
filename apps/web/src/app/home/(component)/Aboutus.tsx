import React from "react";
import { Experience } from "../utils/data";

const Aboutus = () => {
  return (
    <section id="about" className="mx-auto my-5 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="leading-loose text-gray-200">
          <p>
            I am <strong>Ibhaudur Rahman</strong>, a <strong>FullStack Developer</strong> with <strong>{Experience()} years</strong> of professional experience.
            On the front end, I craft fast, accessible interfaces with <strong>React.js, Redux Toolkit, Next.js, Tailwind CSS, Bootstrap, Material UI, Formik</strong>, and core <strong>JavaScript</strong>.
            On the back end, I build secure, scalable APIs using <strong>Node.js, Express, MongoDB</strong>, and <strong>SQL databases</strong>.
            My toolkit also includes <strong>Docker, AWS, Git, TypeScript, caching strategies, AES encryption</strong>, and <strong>web-security best practices</strong>, enabling me to deliver polished, containerized, cloud-ready applications end to end.
          </p>

          <p className="mt-4">
            I hold a <strong>Master of Computer Applications (MCA) degree</strong> from Dr. M.G.R. Educational and Research Institute, Chennai, which further honed my technical skills and knowledge.
            During my academic and professional journey, I have worked on various projects, showcasing my ability to develop dynamic and responsive web applications.
            My education includes a <strong>Bachelor of Computer Applications (BCA)</strong> from Jamal Mohamed College, an autonomous institution affiliated with Bharathidasan University, Tiruchirappalli.
          </p>

          <p className="mt-4">
            Furthermore, I have completed a <strong>FullStack development course</strong> at Vebbox Software Solutions, which has enriched my understanding and skills in building comprehensive web applications.
          </p>

          <p className="mt-4">
            Throughout my career, I have consistently demonstrated my capability to work on complex projects, delivering high-quality solutions and contributing effectively to my team&apos;s success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
