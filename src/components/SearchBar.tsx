// "use client";
import axios from "axios";
import Image from "next/image";
import React, { useRef, useState } from "react";

interface SearchBarProps {
  accessToken: number;
  setIsLoading: (isLoading: boolean) => void;
  setResults: (results: []) => void;
  results: any[]; //soluciona el error para que no joda, pero no corresponde
}

export default function SearchBar({
  accessToken,
  setIsLoading,
  setResults,
  results,
}: SearchBarProps) {
  const [inputValueRef, setInputValueRef] = useState("");

  async function searchHeroes() {
    const apiHeroes = `https://superheroapi.com/api.php/${accessToken}/search/${inputValueRef}`;

    setIsLoading(true);
    let res = await axios.get(apiHeroes);
    setIsLoading(false);
    if (res.data.results) {
      setResults(res.data.results);
    } else {
      setResults([]);
    }
    console.log(res.data.results);
  }

  //ver como hacer que esto funcione
  // function setAndSearchByValue(e) {
  //   setInputValueRef(e.target.value);
  //   () => searchHeroes();
  // }

  // console.log(inputValueRef);

  return (
    <>
      <div className="flex w-11/12 justify-between items-center border-r-4 border rounded-xl py-1 pl-4 pr-2 ">
        <input
          type="text"
          placeholder="Type some character to search for a hero"
          className="w-full outline-none"
          value={inputValueRef}
          onChange={(e) => setInputValueRef(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? searchHeroes() : "")}
        />
        <Image
          className="hover:scale-110 cursor-pointer"
          src="/assets/loupe.png"
          alt="Landscape picture"
          width={30}
          height={15}
          onClick={searchHeroes}
        />
      </div>
      <ul className="w-10/12 max-h-60 overflow-auto">
        {results.length >= 1 ? (
          results.map((hero) => (
            <li
              className="border-x border-b p-1 hover:bg-blue-200"
              key={hero.id}
            >
              {hero.name}
            </li>
          ))
        ) : (
          //intentar que no se vea en el primer render
          <li className="italic p-1">No results</li>
        )}
      </ul>
    </>
  );
}
