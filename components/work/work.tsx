import Card from "../card/card";

const Work = () => {
  return (
    <div className="flex-1 m-4 shadow-sm rounded-md bg-zinc-800 max-h-screen overflow-y-visible overflow-x-hidden  ">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-2 md:py-5 vertical center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Top Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-10 mb-40 md:mb-8 lg:mb-4 ">
              <Card
                title="Layerify-AI"
                description="It lets you to remove background image, change background and add text between layers for Free of cost with high quality."
                github="https://github.com/YogeshSinghChilwal/layerify-ai"
                liveLink="https://layerify-ai.vercel.app/"
                image="/projectsPic/layerifyProjectImage.png"
                date="Feb, 2025"
                techstacks={[
                  "Next.js",
                  "Typescript",
                  "Shadcn/ui",
                  "Aceternity UI",
                  "Canvas API",
                  "Imagly",
                ]}
              />

              <Card
                title="Dictionary4U"
                description="A user-friendly dictionary app where users can search word meanings, listen to pronunciations, and save their search history."
                github="https://github.com/YogeshSinghChilwal/Dictionary4U"
                liveLink="https://dictionary4u.onrender.com/"
                image="/projectsPic/dictionary4uProjectImage.png"
                date="Jan, 2025"
                techstacks={[
                  "React",
                  "Typescript",
                  "Tailwind CSS",
                  "Zod",
                  "Shadcn/ui",
                  "OAuth",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "JWT",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
