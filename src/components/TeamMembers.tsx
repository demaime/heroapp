import React from "react";
import Image from "next/image";
import { Hero } from "@/types/hero-type";
import Tippy from "@tippyjs/react";

interface TeamMembersProps {
  team: Hero[];
}

export default function TeamMembers({ team }: TeamMembersProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <ul className="w-full grid-cols-2 grid-rows-3 grid gap-4 px-4 md:grid-cols-3 md:grid-rows-2 md:gap-2 md:w-2/3">
        {team.length > 0 ? (
          team.map((hero) => (
            <li
              key={hero.id}
              className="w-full flex items-center justify-center py-2"
            >
              <Tippy
                zIndex={999}
                allowHTML={true}
                trigger={"click"}
                content={
                  <>
                    <h1 className="text-blue-200 text-2xl">{hero?.name}</h1>
                    <p
                      className={
                        hero.biography?.alignment === "good"
                          ? "text-green-300 font-bold"
                          : hero.biography?.alignment === "bad"
                          ? "text-red-300 font-bold"
                          : hero.biography?.alignment === "neutral" ||
                            hero.biography?.alignment === "-"
                          ? "text-blue-300 font-bold"
                          : "text-gray-300 font-bold"
                      }
                    >
                      {hero.biography?.alignment.toUpperCase()}
                    </p>

                    <ul>
                      <li>
                        COMBAT:{" "}
                        <span className="text-blue-400">
                          {hero.powerstats?.combat || 0}
                        </span>
                      </li>
                      <li>
                        DURABILITY:{" "}
                        <span className="text-blue-400">
                          {hero.powerstats?.durability || 0}
                        </span>
                      </li>
                      <li>
                        INTELLIGENCE:{" "}
                        <span className="text-blue-400">
                          {" "}
                          {hero.powerstats?.intelligence || 0}
                        </span>
                      </li>
                      <li>
                        POWER:{" "}
                        <span className="text-blue-400">
                          {" "}
                          {hero.powerstats?.power || 0}
                        </span>
                      </li>
                      <li>
                        SPEED:{" "}
                        <span className="text-blue-400">
                          {hero.powerstats?.speed || 0}
                        </span>
                      </li>
                      <li>
                        STRENGTH:{" "}
                        <span className="text-blue-400">
                          {hero.powerstats?.strength || 0}
                        </span>
                      </li>
                    </ul>
                  </>
                }
              >
                <picture className="w-[130px] h-[150px] md:w-[170px] md:h-[220px] relative">
                  <Image
                    className="rounded-3xl teamview-member-shadow"
                    src={hero.image?.url}
                    alt="Hero Image"
                    fill
                  />
                </picture>
              </Tippy>
            </li>
          ))
        ) : (
          <p className="text-gray-400 absolute m-auto left-0 right-0 flex items-center justify-center h-1/2 text-2xl">
            ~ NO HERO SELECTED ~
          </p>
        )}
      </ul>
    </div>
  );
}
