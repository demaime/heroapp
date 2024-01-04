import React from "react";
import Header from "@/components/Header";
import { useRouter } from "next/router";

export default function Team() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div id="full-container" className="bg-gray-900">
      <Header query={router.query} />
      <ul className="w-full h-11/12 flex flex-col items-center justify-evenly">
        <li className="bg-gray-300 w-11/12 text-center h-16 ">HERO</li>
        <li className="bg-gray-300 w-11/12 text-center h-16 ">HERO</li>
        <li className="bg-gray-300 w-11/12 text-center h-16 ">HERO</li>
        <li className="bg-gray-300 w-11/12 text-center h-16 ">HERO</li>
        <li className="bg-gray-300 w-11/12 text-center h-16 ">HERO</li>
        <li className="bg-gray-300 w-11/12 text-center h-16 ">HERO</li>
      </ul>
    </div>
  );
}
