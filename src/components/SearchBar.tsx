// "use client";
import axios from "axios";
// import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { TbLoaderQuarter } from "react-icons/tb";

interface SearchBarProps {
  accessToken: number;
  setIsLoading: (isLoading: boolean) => void;
  isLoading: boolean;
  setResults: (results: []) => void;
  results: any[]; //soluciona el error para que no joda, pero no corresponde
}

export default function SearchBar({
  accessToken,
  setIsLoading,
  isLoading,
  setResults,
  results,
}: SearchBarProps) {
  const [inputHeroEntry, setInputHeroEntry] = useState<string | null>(null);
  // const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function searchHeroes() {
      const apiHeroes = `https://superheroapi.com/api.php/${accessToken}/search/${inputHeroEntry}`;

      setIsLoading(true);
      let res = await axios.get(apiHeroes);
      setIsLoading(false);
      if (res.data.results) {
        setResults(res.data.results);
      } else {
        setResults([]);
      }
    }
    searchHeroes();
  }, [accessToken, inputHeroEntry, setIsLoading, setResults]);
  // console.log(results);

  return (
    <>
      <div className="flex w-11/12 justify-between items-center border-r-4 border rounded-xl py-1 pl-4 pr-2 ">
        <input
          type="text"
          placeholder="Type some character to search for a hero"
          className="w-full outline-none"
          onChange={(e) => setInputHeroEntry(e.target.value)}
        />
      </div>
      <ul className="w-10/12 max-h-60 overflow-auto">
        {isLoading ? (
          <TbLoaderQuarter className="animate-spin p-1" />
        ) : results ? (
          results.length < 1 ? (
            <li className="italic p-1 text-xs text-gray-700">No results</li>
          ) : (
            results.map((hero) => (
              <li
                className="border-x border-b p-1 hover:bg-blue-200"
                key={hero.id}
              >
                {hero.name}
              </li>
            ))
          )
        ) : null}
      </ul>
    </>
  );
}
