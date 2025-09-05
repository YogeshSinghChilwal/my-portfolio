import Card from "../card/card";

const Products = () => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold text-white">Products</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-10">
        <Card
          title="YTProKit"
          description="Currently building a platform that helps YouTubers grow their channels by providing new video ideas, SEO-friendly tags, and other content optimization tools."
          image="/currentProjects/YTProKit.png"
          date="May, 2025"
          liveLink="https://yt-pro-kit.vercel.app/"
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
  );
};

export default Products;
