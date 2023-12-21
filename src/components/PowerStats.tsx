import React from "react";
import Image from "next/image";
import { Hero } from "@/types/hero-type";

type PowerStatsProps = {
  chosenHero: Hero;
};
export default function PowerStats({ chosenHero }: PowerStatsProps) {
  console.log(chosenHero.powerstats);
  return (
    <>
      <div className="w-full h-full flex flex-col justify-evenly">
        <div className="flex w-full justify-around">
          {" "}
          <Image
            className="text-center "
            src={"/assets/powerstats/combat.png"}
            alt={"AppLogo"}
            width={20}
            height={20}
          ></Image>
          <Image
            className="text-center "
            src={"/assets/powerstats/durability.png"}
            alt={"AppLogo"}
            width={20}
            height={20}
          ></Image>
          <Image
            className="text-center "
            src={"/assets/powerstats/intelligence.png"}
            alt={"AppLogo"}
            width={20}
            height={20}
          ></Image>
          <Image
            className="text-center "
            src={"/assets/powerstats/power.png"}
            alt={"AppLogo"}
            width={20}
            height={20}
          ></Image>
          <Image
            className="text-center "
            src={"/assets/powerstats/speed.png"}
            alt={"AppLogo"}
            width={20}
            height={20}
          ></Image>
          <Image
            className="text-center "
            src={"/assets/powerstats/strengh.png"}
            alt={"AppLogo"}
            width={20}
            height={20}
          ></Image>
        </div>
        <div className="flex w-full justify-evenly">
          <div className="text-center w-full">
            {chosenHero.powerstats.combat === "null"
              ? "0"
              : chosenHero.powerstats.combat}
          </div>
          <div className="text-center w-full">
            {chosenHero.powerstats.durability === "null"
              ? "0"
              : chosenHero.powerstats.durability}
          </div>
          <div className="text-center w-full">
            {chosenHero.powerstats.intelligence === "null"
              ? "0"
              : chosenHero.powerstats.intelligence}
          </div>
          <div className="text-center w-full">
            {chosenHero.powerstats.power === "null"
              ? "0"
              : chosenHero.powerstats.power}
          </div>
          <div className="text-center w-full">
            {chosenHero.powerstats.speed === "null"
              ? "0"
              : chosenHero.powerstats.speed}
          </div>
          <div className="text-center w-full">
            {chosenHero.powerstats.strength === "null"
              ? "0"
              : chosenHero.powerstats.strength}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-4">
        {" "}
        <button className="p-1 text-xs font-bold  w-36  rounded-lg border bg-green-600  ">
          ADD TO TEAM
        </button>
      </div>
    </>
  );
}
