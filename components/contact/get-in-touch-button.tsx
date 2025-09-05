"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ContactModal from "./contact-model";

interface GetInTouchButtonProps {
  variant?: "fixed" | "inline";
  className?: string;
}

export default function GetInTouchButton({
  variant = "fixed",
  className,
}: GetInTouchButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setAnimateOut(true);
    }, 4000);
    const removeTimer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const baseClasses = cn(
    "group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25",
    variant === "fixed" &&
      "fixed bottom-6 right-6 z-40 rounded-full w-14 h-14 shadow-2xl",
    variant === "inline" && "rounded-lg px-4 py-2.5",
    className
  );

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className={baseClasses}
        size={variant === "fixed" ? "icon" : "default"}
      >
        {/* Icon */}
        <MessageCircle
          className={cn(
            "transition-transform duration-300 group-hover:rotate-12",
            variant === "fixed" ? "w-6 h-6" : "w-4 h-4 ",
            variant === "fixed" && showMessage ? " rotate-20" : "rotate-0"
          )}
        />

        {/* Text for inline variant */}
        {variant === "inline" && (
          <span className="hidden sm:inline">Get in Touch</span>
        )}
        {variant === "inline" && <span className="sm:hidden">Contact</span>}

        {/* Hover Glow Effect */}
      </Button>
      {showMessage && variant === "fixed" && (
        <div className={``}>
          <div
            className={`fixed bottom-8 right-14 rounded-lg px-10 py-1.5 z-30  overflow-hidden  bg-gradient-to-r from-purple-600 to-blue-600  text-white font-medium transition-[clip-path] duration-500 ease-in-out ${
              animateOut
                ? "clip-path-[inset(0_100%_0_0)]"
                : "clip-path-[inset(0_0%_0_0)]"
            }`}
          >
            Get In Touch
          </div>
        </div>
      )}

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
