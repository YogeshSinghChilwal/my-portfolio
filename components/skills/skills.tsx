import SkillsSvg from "./skillsSvg";
import {skillsData} from '@/config/skills-svg-title'

const Skills = () => {
  return (
    <div className="bg-zinc-900 py-2 md:py-0 rounded-xl md:bg-none md:rounded-none">
      <div >
        <h3 className="text-gray-400 font-semibold uppercase tracking-wider">
          Skills
        </h3>
      </div>
      <div className="mt-3 grid grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-2">
        {
          skillsData.map(({title, path}) => (
            <SkillsSvg key={title} title={title} path={path} />
          ))
        }
        
      </div>
    </div>
  );
};

export default Skills;
