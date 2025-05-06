import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Skills from "../skills/skills";
import Avatar from "../avatar/avatar";

const Details = () => {
  return (
    <div className=" h-screen w-[280px] ">
      <div className="mt-8 flex flex-col items-center">
        <div className="">
          <Avatar />
        </div>
        <div className="text-center">
          <div>
            <h1 className="text-white text-xl font-bold mt-2">
              Yogesh Singh Chilwal
            </h1>
          </div>
          <div className="mt-1">
            <p>
              <span className="text-gray-400 text-sm">
                Buiding products that Earns.
              </span>
            </p>
          </div>
          <div className="flex gap-3 justify-center mt-2">
            <div className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform">
              <Link href={"https://github.com/YogeshSinghChilwal"}>
                <Github />
              </Link>
            </div>
            <div className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform">
              <Link href={"https://github.com/YogeshSinghChilwal"}>
                <Twitter />
              </Link>
            </div>
            <div className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform">
              <Link href={"https://github.com/YogeshSinghChilwal"}>
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mt-6">
        <Skills />
      </div>
    </div>
  );
};

export default Details;
