import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <section id="education" className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center">
          <div className="mb-3 w-full px-2 sm:w-1/2 lg:w-1/3">
            <div className="rounded-lg border-solid border-2 border-green-500 h-100">
              <Image
                className="rounded-lg"
                src="/images/mgr.jpg"
                alt="i"
                width={400}
                height={400}
              />
              <div className="p-2">
                <h5>Dr.MGR University</h5>
                <p className="text-xs mb-0">
                  Master of Computer Applications (MCA)
                </p>
                <p className="text-xs font-bold text-green-500">CGPA - 7.9</p>
                <p className="text-sm">
                  Dr. M.G.R. Engineering College, founded in 1988, acquired
                  Deemed University status in 2003 as Dr. M.G.R. Educational and
                  Research Institute as per the orders of the University. I
                  completed my Master’s degree (PG MCA course) at this esteemed
                  institution.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-3 w-full px-2 sm:w-1/2 lg:w-1/3">
            <div className="h-100 rounded-lg border-2 border-solid border-green-500">
              <Image
                className="rounded-lg"
                src="/images/jam.png"
                alt="i"
                width={400}
                height={400}
              />
              <div className="p-2">
                <h5>Jamal Mohammed College</h5>
                <p className="text-xs mb-0">
                  Bachelor of Computer Applications (BCA)
                </p>
                <p className="text-xs font-bold text-green-500">CGPA - 7.4</p>
                <p className="text-sm">
                  Jamal Mohamed College, an autonomous institution founded in
                  1951 and affiliated with Bharathidasan University,
                  Tiruchirappalli, provided me with a strong foundation. I
                  completed my BCA at this esteemed institute and was awarded my
                  undergraduate degree.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-3 w-full px-2 sm:w-1/2 lg:w-1/3">
            <div className="h-100 rounded-lg border-2 border-solid border-green-500">
              <Image
                className="rounded-lg"
                src="/images/vb.jpg"
                alt="i"
                width={400}
                height={400}
              />
              <div className="p-2">
                <h5>VEBBOX Software Solutions</h5>
                <p className="text-xs">MERN Stack Course</p>
                <p className="text-sm">
                  Vebbox was founded in 2016 by Vignesh Venkadesan. This is the
                  software solutions startup where I completed my MERN Stack
                  course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
