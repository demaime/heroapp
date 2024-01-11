import React from "react";
import Image from "next/image";
import { Hero } from "@/types/hero-type";
import Tippy from "@tippyjs/react";

interface TeamMembersProps {
  team: Hero[];
}

export default function TeamMembers({ team }: TeamMembersProps) {
  return (
    <ul className="w-full grid-cols-2 grid-rows-3 grid gap-4 px-4">
      {team.map((hero) => (
        <li
          key={hero.id}
          className=" w-full flex items-center justify-center py-2"
        >
          <Tippy
            allowHTML={true}
            trigger={"click"}
            content={
              <>
                <h1 className="text-blue-200">{hero.name}</h1>
                <p
                  className={
                    hero.biography.alignment === "good"
                      ? "text-green-300"
                      : "evil"
                      ? "text-red-300"
                      : "text-gray-300"
                  }
                >
                  {hero.biography.alignment.toUpperCase()}
                </p>
                <ul>
                  <li>COMBAT: {hero.powerstats.combat}</li>
                  <li>DURABILITY: {hero.powerstats.durability}</li>
                  <li>INTELLIGENCE: {hero.powerstats.intelligence}</li>
                  <li>POWER: {hero.powerstats.power}</li>
                  <li>SPEED: {hero.powerstats.speed}</li>
                  <li>STRENGTH: {hero.powerstats.strength}</li>
                </ul>
              </>
            }
          >
            <Image
              className="rounded-lg shadow-lg shadow-gray-700"
              src={hero.image.url}
              alt="Hero Image"
              height={100}
              width={100}
            />
          </Tippy>
        </li>
      ))}
    </ul>
  );
}
