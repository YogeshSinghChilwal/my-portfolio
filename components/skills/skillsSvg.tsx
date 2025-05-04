import React from "react";

const SkillsSvg = ({ title, path }: { title: string; path: string }) => {
  return (
    <div className="mb-2">
      <div className="">
        <div className="flex flex-col items-center gap-0.5">
          <svg
            role="img"
            className="text-gray-500 w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d={path} />
          </svg>
          <span className="text-xs text-gray-500 font-medium">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsSvg;
