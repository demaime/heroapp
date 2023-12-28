import React from "react";
import Image from "next/image";
import { Hero } from "@/types/hero-type";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

type PowerStatsProps = {
  chosenHero: Hero;
};
export default function PowerStats({ chosenHero }: PowerStatsProps) {
  const powerstatsTitles = [
    "combat",
    "durability",
    "intelligence",
    "power",
    "speed",
    "strength",
  ];

  return (
    <div className="w-10/12 stats-shadow rounded h-24  ">
      <div className="w-full h-full flex flex-col justify-evenly">
        <div className="flex w-full justify-around">
          {powerstatsTitles.map((stat) => (
            <Tippy key={stat} content={stat}>
              <Image
                src={`/assets/powerstats/${stat}.png`}
                alt={`${stat} powerstat`}
                width={20}
                height={20}
              />
            </Tippy>
          ))}
        </div>
        <div className="flex w-full justify-evenly">
          {powerstatsTitles.map((stat: string) => (
            <div key={stat} className="text-center w-full">
              {chosenHero.powerstats[stat] === "null"
                ? "0"
                : chosenHero.powerstats[stat]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// <div className="text-center w-full">
//   {chosenHero.powerstats.durability === "null"
//     ? "0"
//     : chosenHero.powerstats.durability}
// </div>
// <div className="text-center w-full">
//   {chosenHero.powerstats.intelligence === "null"
//     ? "0"
//     : chosenHero.powerstats.intelligence}
// </div>
// <div className="text-center w-full">
//   {chosenHero.powerstats.power === "null"
//     ? "0"
//     : chosenHero.powerstats.power}
// </div>
// <div className="text-center w-full">
//   {chosenHero.powerstats.speed === "null"
//     ? "0"
//     : chosenHero.powerstats.speed}
// </div>
// <div className="text-center w-full">
//   {chosenHero.powerstats.strength === "null"
//     ? "0"
//     : chosenHero.powerstats.strength}
// </div>
