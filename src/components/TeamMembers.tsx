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
            className="z-50"
            content={
              <>
                <h1 className="text-blue-200 text-2xl">{hero.name}</h1>
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
                  <li>
                    COMBAT:{" "}
                    <span className="text-blue-400">
                      {hero.powerstats.combat}
                    </span>
                  </li>
                  <li>
                    DURABILITY:{" "}
                    <span className="text-blue-400">
                      {hero.powerstats.durability}
                    </span>
                  </li>
                  <li>
                    INTELLIGENCE:{" "}
                    <span className="text-blue-400">
                      {" "}
                      {hero.powerstats.intelligence}
                    </span>
                  </li>
                  <li>
                    POWER:{" "}
                    <span className="text-blue-400">
                      {" "}
                      {hero.powerstats.power}
                    </span>
                  </li>
                  <li>
                    SPEED:{" "}
                    <span className="text-blue-400">
                      {hero.powerstats.speed}
                    </span>
                  </li>
                  <li>
                    STRENGTH:{" "}
                    <span className="text-blue-400">
                      {hero.powerstats.strength}
                    </span>
                  </li>
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
