import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutMe = () => {
  return (
    <Accordion type="single" collapsible className="px-4">
      <AccordionItem value="about">
        <AccordionTrigger className="text-gray-200 text-lg font-bold justify-start items-center gap-1">
          About Me
        </AccordionTrigger>

        <AccordionContent>
          <p className="text-gray-300 text-sm leading-relaxed text-balance">
            I&apos;m a Full-stack developer focused on{" "}
            <span className="text-indigo-400">MERN</span> and{" "}
            <span className="text-indigo-400">Next.js</span>, building SaaS
            products, AI tools, and scalable cloud-backed systems. I handle the
            entire stack — frontend, backend, databases, authentication,
            payments, and CI/CD. Strong DSA foundation in C++ with hands-on
            experience in automation, serverless workflows, and DevOps tooling.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AboutMe;
