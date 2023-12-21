import React from "react";
import Image from "next/image";
import { Hero } from "@/types/hero-type";

type PowerStatsProps = {
  chosenHero: Hero;
};
export default function PowerStats({ chosenHero }: PowerStatsProps) {
  console.log(chosenHero.powerstats);
  return (
    <div className="w-full h-full flex flex-col justify-evenly">
      <div className="flex w-full justify-evenly">
        {" "}
        <Image
          src={"/assets/powerstats/combat.png"}
          alt={"AppLogo"}
          width={25}
          height={25}
        ></Image>
        <Image
          src={"/assets/powerstats/durability.png"}
          alt={"AppLogo"}
          width={25}
          height={25}
        ></Image>
        <Image
          src={"/assets/powerstats/intelligence.png"}
          alt={"AppLogo"}
          width={25}
          height={25}
        ></Image>
        <Image
          src={"/assets/powerstats/power.png"}
          alt={"AppLogo"}
          width={25}
          height={25}
        ></Image>
        <Image
          src={"/assets/powerstats/speed.png"}
          alt={"AppLogo"}
          width={25}
          height={25}
        ></Image>
        <Image
          src={"/assets/powerstats/strengh.png"}
          alt={"AppLogo"}
          width={25}
          height={25}
        ></Image>
      </div>
      <div className="flex w-full justify-evenly">
        <div>
          {chosenHero.powerstats.combat === "null"
            ? "0"
            : chosenHero.powerstats.combat}
        </div>
        <div>
          {chosenHero.powerstats.durability === "null"
            ? "0"
            : chosenHero.powerstats.durability}
        </div>
        <div>
          {chosenHero.powerstats.intelligence === "null"
            ? "0"
            : chosenHero.powerstats.intelligence}
        </div>
        <div>
          {chosenHero.powerstats.power === "null"
            ? "0"
            : chosenHero.powerstats.power}
        </div>
        <div>
          {chosenHero.powerstats.speed === "null"
            ? "0"
            : chosenHero.powerstats.speed}
        </div>
        <div>
          {chosenHero.powerstats.strength === "null"
            ? "0"
            : chosenHero.powerstats.strength}
        </div>
      </div>
    </div>
  );
}
