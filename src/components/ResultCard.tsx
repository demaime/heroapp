import React from "react";
import Image from "next/image";
import { Hero } from "@/types/hero-type";

type ResultCardProps = {
  chosenHero: Hero;
};

export default function ResultCard({ chosenHero }: ResultCardProps) {
  return (
    <div className="mt-8 w-48 h-72 border-2 rounded z-20">
      <div className="h-4/5 border-b-2 border-[#bfdbfe] relative">
        {chosenHero ? (
          <Image
            alt="Hero image not found"
            src={chosenHero.image.url}
            fill={true}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <Image
              src={"/assets/logo.png"}
              alt={"AppLogo"}
              width={60}
              height={60}
            />
          </div>
        )}
      </div>
      <div className="h-1/5 flex items-center justify-center text-xs text-center bg-gray-900 opacity-90 ">
        {!chosenHero ? "Select a hero" : chosenHero.name}
      </div>
    </div>
  );
}
