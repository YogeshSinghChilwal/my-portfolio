import Card from "../card/card";

const TopProjects = () => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold text-white">Top Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-10 mb-6">
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
            "Tailwind CSS",
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
  );
};

export default TopProjects;
