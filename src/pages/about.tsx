import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div id="full-container" className="bg-gray-900 text-white relative">
      <Header />
      <ul className="w-full flex flex-col items-center">
        <li className="w-100 flex justify-around mt-4">
          <Link href={"https://www.alkemy.org/"}>
            Aplicación basada en un challenge de Alkemy
          </Link>
        </li>

        <li>NextJs (TypeScript - Tailwind)</li>
        <li className="w-100 flex justify-around mt-4">
          <Link href={"https://axios-http.com/es/"}>axios</Link>
        </li>
        <li className="w-100 flex justify-around mt-4">
          <Link href={"https://hamburger-react.netlify.app"}>
            hamburguer-react
          </Link>
        </li>
        <li className="w-100 flex justify-around mt-4">
          <Link href={"https://github.com/atomiks/tippyjs-react"}>tippy</Link>
        </li>
        <li className="w-100 flex justify-around mt-4">
          <Link href={"https://react-awesome-reveal.morello.dev"}>
            react-awesome-reveal
          </Link>
        </li>
        <li className="w-100 flex justify-around mt-4">
          <Link href={"https://react-icons.github.io/react-icons/"}>
            react-icons
          </Link>
        </li>
        <li className="w-100 flex justify-around mt-4">
          <Link href={"https://github.com/fkhadra/react-toastify#readme"}>
            react-toastify
          </Link>
        </li>
      </ul>
      <footer className="w-full flex justify-evenly absolute bottom-2">
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
