import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillsData } from "@/config/skills-svg-title";
import SkillsSvg from "../skills/skillsSvg";

const AboutMESkillsTab = () => {
  return (
    <div className="px-4 mt-4 hidden md:block ">
      <Tabs defaultValue="aboutMe">
        <TabsList className="relative bg-transparent p-1 rounded-lg mx-auto">
          <TabsTrigger
            value="aboutMe"
            className="
        text-sm font-medium px-4 py-2 transition-all duration-200
        data-[state=active]:text-white
        data-[state=active]:bg-transparent
        data-[state=active]:cursor-default
        
        data-[state=inactive]:text-gray-400
        data-[state=inactive]:bg-zinc-700
        data-[state=inactive]:rounded-md
        data-[state=inactive]:hover:bg-zinc-600
        data-[state=inactive]:hover:text-gray-200
        data-[state=inactive]:hover:cursor-pointer
      "
          >
            About Me
          </TabsTrigger>

          <TabsTrigger
            value="skills"
            className="
        text-sm font-medium px-4 py-2 transition-all duration-200
        data-[state=active]:text-white
        data-[state=active]:bg-transparent
        data-[state=active]:cursor-default
        
        data-[state=inactive]:text-gray-400
        data-[state=inactive]:bg-zinc-700
        data-[state=inactive]:rounded-md
        data-[state=inactive]:hover:bg-zinc-600
        data-[state=inactive]:hover:text-gray-200
        data-[state=inactive]:hover:cursor-pointer
      "
          >
            Skills
          </TabsTrigger>
        </TabsList>
        <TabsContent value="aboutMe" className="">
          <p className="text-gray-300 text-sm leading-relaxed text-justify ">
            I&apos;m a Full-stack developer focused on{" "}
            <span className="text-indigo-400">MERN </span>
            and <span className="text-indigo-400"> Next.js</span>, building SaaS
            products, AI tools, and scalable cloud-backed systems. I handle the
            entire stack - frontend, backend, databases, authentication,
            payments, and CI/CD. Strong DSA foundation in C++ with hands-on
            experience in automation, serverless workflows, and DevOps tooling.
          </p>
        </TabsContent>
        <TabsContent value="skills" className="">
          <div className="mt-1 grid grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-2">
            {skillsData.map(({ title, path }) => (
              <SkillsSvg key={title} title={title} path={path} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AboutMESkillsTab;
