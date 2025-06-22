import React from "react";
import Card from "../card/card";

const Experience = () => {
  return (
    <div>
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-white">Experience</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-10 mb-6 ">
          <Card
            title="Portfolio Website"
            description="Designed and developed a clean, responsive portfolio website for Prof. Diwan S. Rawat of Kumaun University, showcasing his academic achievements, research work, and publications."
            liveLink="https://prof-diwan-s-rawat-portfolio.onrender.com/"
            image="/experiencePic/portfolio.png"
            date="March, 2025"
            techstacks={[
              "React",
              "Typescript",
              "Tailwind CSS",
              "Shadcn/ui",
              "Framer Motion",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
