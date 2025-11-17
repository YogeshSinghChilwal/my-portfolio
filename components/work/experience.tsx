export default function Experience() {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-white">Experience</h2>

      <div className="mt-4 space-y-4">
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
          <div className="flex flex-col md:flex-row  md:items-center justify-between">
            <h3 className="text-white font-semibold">
              MERN Developer — Kumaun University
            </h3>
            <span className="text-gray-400 text-sm">Jan 2025 - Mar 2025</span>
          </div>

          <p className="text-gray-300 text-sm mt-2 leading-tight text-pretty">
            Developed and deployed the Vice Chancellor’s portfolio website using
            React.js and Tailwind CSS. Improved performance, responsiveness, and
            overall UI consistency across devices.
          </p>
        </div>

        {/*TODO Add More Experience Here */}
        {/* <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold">
              Freelance Full-Stack Developer
            </h3>
            <span className="text-gray-400 text-sm">2024 - Present</span>
          </div>

          <p className="text-gray-300 text-sm mt-2 leading-tight text-pretty">
            Built SaaS tools, automation workflows, and AI-driven applications
            using MERN, Next.js, Prisma, NeonDB, AWS, and modern DevOps
            practices.
          </p>
        </div> */}
      </div>
    </div>
  );
}
