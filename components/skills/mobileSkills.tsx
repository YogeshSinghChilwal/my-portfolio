"use client";

import { useState } from "react";
import Skills from "./skills";

const MobileSkills = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="md:hidden">
      <div className="text-lg text-gray-400 hover:text-white transition duration-300 ease-in-out transform font-semibold uppercase tracking-wider bg-zinc-600 px-1.5 rounded-md hover:bg-zinc-500">
        <button type="button" onClick={() => setOpen(true)}>SKILLS</button>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-gray-200/10 backdrop-blur-sm flex items-center justify-center z-60"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-[60%] overflow-hidden shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Skills />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSkills;
