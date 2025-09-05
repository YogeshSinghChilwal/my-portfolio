import Card from "../card/card";

const TopProjects = () => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold text-white">Top Projects</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-10">
        <Card
          title="ClipMaster"
          description="It lets you to generate vertical short form video using any long form video with high quality."
          github="https://github.com/YogeshSinghChilwal/ClipMaster-AI-video-clipper"
          liveLink="https://clip-master.vercel.app/"
          image="/projectsPic/clipmaster.png"
          date="July, 2025"
          techstacks={[
            "Next.js",
            "Typescript",
            "Tailwind CSS",
            "Shadcn/ui",
            "AWS S3",
            "Python",
            "WhisperX",
            "Gemini API",
            "FFmpeg",
            "Modal",
            "Inngest"
          ]}
        />

        <Card
          title="Fancy UI"
          description="Every day components library with animations."
          github="https://github.com/YogeshSinghChilwal/fancy-ui"
          liveLink="https://fancyui.vercel.app/"
          image="/projectsPic/fancyui.png"
          date="Aug, 2025"
          techstacks={[
            "Next.js",
            "Typescript",
            "Tailwind CSS",
            "Framer Motion",
            "Shadcn/ui",
            "GitHub CI/CD"
          ]}
        />
      </div>
    </div>
  );
};

export default TopProjects;
