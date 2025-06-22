import Card from "../card/card";

const CurrentWorkingProjects = () => {
  return (
    <div>
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Currently Working Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-10 mb-40 md:mb-8 lg:mb-4 ">
          <Card
            title="YTProKit"
            description="Currently building a platform that helps YouTubers grow their channels by providing new video ideas, SEO-friendly tags, and other content optimization tools."
            image="/currentProjects/YTProKit.png"
            date="May, 2025"
            techstacks={[
              "Next.js",
              "Typescript",
              "Shadcn/ui",
              "Next Auth",
              "Tailwind css",
              "Gamini AI",
              "You Tube API",
              "Prisma",
              "Postgres SQL",
              "Razorpay",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentWorkingProjects;
