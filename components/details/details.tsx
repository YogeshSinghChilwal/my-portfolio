import { Github, Linkedin } from "lucide-react";
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
                Building Web Applications That Matter.
              </span>
            </p>
          </div>
          <div className="flex gap-3 justify-center items-center mt-2">
            <div className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform">
              <Link
                href={"https://github.com/YogeshSinghChilwal"}
                target="_blank"
              >
                <Github />
              </Link>
            </div>
            <div className="text-gray-400 hover:text-white ">
              <Link
                href={"https://x.com/_chilwal"}
                target="_blank"
              >
                <svg
                  role="img"
                  className="text-gray-400 w-5 h-5 hover:text-white transition duration-300 ease-in-out transform"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </Link>
            </div>
            <div className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform">
              <Link
                href={"https://www.linkedin.com/in/yogesh-singh-chilwal-7b9a5a35b/"}
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
