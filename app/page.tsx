import Details from "@/components/details/details";
import Projects from "@/components/projects/projects";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-zinc-900 mx-auto overflow-hidden">
      <div className="flex md:px-4 mx-auto max-w-[1400px]">
        <Details />
        <Projects />
      </div>
    </div>
  );
}
