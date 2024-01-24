import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const libraries = [
  {
    title: "axios",
    href: "https://axios-http.com/es/",
  },
  {
    title: "hamburguer-react",
    href: "https://hamburger-react.netlify.app/",
  },
  {
    title: "tippy",
    href: "https://github.com/atomiks/tippyjs-react",
  },
  {
    title: "react-awesome-reveal",
    href: "https://react-awesome-reveal.morello.dev/",
  },
  {
    title: "react-icons",
    href: "https://react-icons.github.io/react-icons/",
  },
  {
    title: "react-tostify",
    href: "https://github.com/fkhadra/react-toastify",
  },
];

export default function About() {
  return (
    <div id="full-container" className="bg-gray-900 text-gray-300 relative">
      <Header />
      <div className="w-full h-96 flex flex-col items-center justify-evenly">
        <h1 className="text-center p-8 text-blue-200">
          Application based on an{" "}
          <Link href={"https://www.alkemy.org/"} className="underline">
            Alkemy.org{" "}
          </Link>
          challenge, using Nextjs (Tailwind + Typescript) and the following
          libraries
        </h1>
        <ul className="w-full flex flex-col items-center">
          {libraries.map((librarie) => (
            <li key={librarie.title} className="w-full flex justify-around">
              <Link className="flex items-center" href={librarie.href}>
                <FaLink size={12} className="mr-2" />
                {librarie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <footer className="w-full flex justify-evenly absolute bottom-4">
        <p className="text-gray-500">Developed by</p>
        <div className="flex items-center justify-evenly">
          <Link href={"https://github.com/demaime"}>
            <Image
              className="mx-2"
              src="/assets/github.png"
              alt="github"
              width={25}
              height={25}
            />
          </Link>
          <Link href={"https://ar.linkedin.com/in/aimedemian"}>
            <Image
              className="mx-2"
              src="/assets/linkedin.png"
              alt="linkedin"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </footer>
    </div>
  );
}
