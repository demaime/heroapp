import React from "react";
import Header from "@/components/Header";
import { useRouter } from "next/router";

export default function Team() {
  const router = useRouter();
  const teamIds = router.query.ids?.toString().split(",") || [];

  console.log(teamIds);

  return (
    <div id="full-container" className="bg-gray-900">
      <Header />
      <ul className="w-full h-11/12 flex flex-col items-center justify-evenly">
        <li className="bg-gray-300 w-11/12 text-center h-16 ">HERO</li>
        <li
          onClick={() => console.log(teamIds)}
          className="bg-gray-300 w-11/12 text-center h-16 "
        >
          HERO
        </li>
        <li className="bg-gray-300 w-11/12 text-center h-16 ">HERO</li>
        <li className="bg-gray-300 w-11/12 text-center h-16 ">HERO</li>
        <li className="bg-gray-300 w-11/12 text-center h-16 ">HERO</li>
        <li className="bg-gray-300 w-11/12 text-center h-16 ">HERO</li>
      </ul>
    </div>
  );
}
