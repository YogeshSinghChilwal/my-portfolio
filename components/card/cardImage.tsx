"use client";

import Image from "next/image";
import { useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";

const CardImage = ({ image }: { image: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full">
        <AspectRatio ratio={16 / 9} onClick={() => setOpen(true)}>
          <img
            src={image}
            alt="Image"
            className="h-full w-full rounded-t-md object-cover cursor-pointer"
          />
        </AspectRatio>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-gray-200/10 backdrop-blur-sm flex items-center justify-center z-60"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-[60%] overflow-hidden shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <AspectRatio ratio={16 / 9} onClick={() => setOpen(true)}>
              <img
                src={image}
                alt="Image"
                className="h-full w-full rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      )}
    </>
  );
};

export default CardImage;
