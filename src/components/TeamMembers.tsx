import React from "react";
import Image from "next/image";
import { Hero } from "@/types/hero-type";

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
          <Image
            className="rounded-full shadow-lg shadow-gray-700"
            src={hero.image.url}
            alt="Hero Image"
            height={100}
            width={100}
          />
          {/* <p>{hero.name}</p> */}
        </li>
      ))}
    </ul>
  );
}
