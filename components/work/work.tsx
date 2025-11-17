import Experience from "./experience";
import Projects from "./projects";
import TopProjects from "./topProjects";

const Work = () => {
  return (
    <div className="flex-1 m-4 mt-1 md:mt-4 shadow-sm rounded-md bg-zinc-800 max-h-screen overflow-y-visible overflow-x-hidden  ">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-2 md:py-5 vertical center">
        <div className="">
          <div className="flex flex-wrap">
            <TopProjects />
            <Experience />
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
