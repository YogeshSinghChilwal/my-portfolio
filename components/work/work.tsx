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
                date="Fab, 2025"
              />

              <Card
                title="Dictionary4U"
                description="It lets you to remove background image, change background and add text between layers for Free of cost with high quality."
                github="https://github.com/YogeshSinghChilwal/Dictionary4U"
                liveLink="https://dictionary4u.onrender.com/"
                image="/projectsPic/dictionary4uProjectImage.png"
                date="Jan, 2025"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
