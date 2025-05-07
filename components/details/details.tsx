import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Skills from "../skills/skills";
import Avatar from "../avatar/avatar";
import MobileSkills from "../skills/mobileSkills";

const Details = () => {
  return (
    <div className="md:h-screen md:w-[280px] ">
      <div className="mt-4 md:mt-8 flex md:flex-col justify-center gap-5 sm:gap-2 md:gap-0 items-center">
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
              <Link
                href={"https://github.com/YogeshSinghChilwal"}
                target="_blank"
              >
                <Github />
              </Link>
            </div>
            <div className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform">
              <Link
                href={"https://github.com/YogeshSinghChilwal"}
                target="_blank"
              >
                <Twitter />
              </Link>
            </div>
            <div className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform">
              <Link
                href={"https://github.com/YogeshSinghChilwal"}
                target="_blank"
              >
                <Linkedin />
              </Link>
            </div>
            <MobileSkills />
          </div>
        </div>
      </div>
      <div className="px-4 mt-6 hidden md:block">
        <Skills />
      </div>
    </div>
  );
};

export default Details;
