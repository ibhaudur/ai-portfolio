"use client";
import React from "react";
import {
  BayerExperience,
  HclTechExperience,
  KirshiExperience,
  VebboxExperience,
} from "@/utils/data";
import Skills from "./Skills";
import ExperienceCard from "@/components/home/ExperienceCard";

const Experience = () => {
  return (
    <section id="experience">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center">
          <ExperienceCard
            company="Bayer"
            period="Dec, 2025 - Present"
            role="Software Engineer II"
            logo="/images/Logo_Bayer.svg"
            items={BayerExperience}
          />
          <ExperienceCard
            company="HCLTech"
            period="Mar, 2025 - Dec, 2025"
            role="Lead Engineer"
            logo="/images/hcltech.png"
            items={HclTechExperience}
          />
          <ExperienceCard
            company="KIRSHI TECHNOLOGIES AND CONSULTING Pvt. Ltd."
            period="Feb, 2022 - Feb, 2025"
            role="Software Developer"
            logo="/images/kirshi.jpeg"
            items={KirshiExperience}
          />
          <ExperienceCard
            company="Vebbox software solutions"
            period="Sep, 2021 - Feb, 2022"
            role="Internship"
            logo="/images/vebbox.jpeg"
            items={VebboxExperience}
          />

          <div className="mt-4 w-full">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
