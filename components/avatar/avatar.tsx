"use client";
import { useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function AvatarPopup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Avatar onClick={() => setOpen(true)} className="w-20 h-20 lg:w-24 lg:h-24 min-w-10 min-h-10 border-white border-2">
            <AvatarImage className="" src={"/profile.jpg"} alt="profile pic" />
            <AvatarFallback>YC</AvatarFallback>
          </Avatar>

      {open && (
        <div
          className="fixed inset-0 bg-gray-200/10 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/profile.jpg"
              alt="Avatar enlarged"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
