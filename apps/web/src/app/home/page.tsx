import React from "react";
import Banner from "./(component)/Banner";
import Aboutus from "./(component)/Aboutus";
import Topic from "@/components/Topic";
import Education from "./(component)/Education";
import Experience from "./(component)/Experience";
import Contact from "./(component)/Contact";

const HomePage = () => {
  return (
    <React.Fragment>
      <Banner />
      <Topic
        Head="About"
        con="Experienced with FullStack Capabilities"
        i="ab"
      />
      <Aboutus />
      <Topic
        Head="Educations"
        con="Academic Journey, My Path through Education"
        i="ab"
      />
      <Education />
      <Topic
        Head="Experience"
        con="Professional Journey, Gaining Experience and Expertise"
        i="ab"
      />
      <Experience />
      <Topic
        Head="Contact"
        con="For inquiries and support"
        i="ab"
      />
      <Contact />
    </React.Fragment>
  );
};

export default HomePage;
