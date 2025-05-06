import Details from "@/components/details/details";
import Work from "@/components/work/work";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-zinc-900 mx-auto overflow-hidden">
      <div className="flex md:px-4 mx-auto max-w-[1400px]">
        <Details />
        <Work />
      </div>
    </div>
  );
}
