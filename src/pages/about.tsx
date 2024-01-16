import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div id="full-container" className="bg-gray-900 text-white">
      <Header />
      <ul className="w-full flex flex-col items-center">
        <li>Aplicación basada en un challenge de Alkemy</li>
        <li className="w-100 flex justify-around mt-4">
          <Image
            src={"/assets/nextjs.png"}
            alt="Hero Image"
            height={100}
            width={100}
          />
          <Image
            src={"/assets/tailwind.png"}
            alt="Hero Image"
            height={100}
            width={100}
          />
        </li>
      </ul>
      <li>
        <p>Librerias</p>
        <Link href={"https://github.com/atomiks/tippyjs-react"}>Tippy</Link>
      </li>
    </div>
  );
}
