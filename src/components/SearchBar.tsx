"use client";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { TbLoaderQuarter } from "react-icons/tb";

interface SearchBarProps {
  accessToken: number;
  setIsLoading: (isLoading: boolean) => void;
  isLoading: boolean;
  setResults: (results: []) => void;
  results: any[];
}

export default function SearchBar({
  accessToken,
  setIsLoading,
  isLoading,
  setResults,
  results,
}: SearchBarProps) {
  const [inputHeroEntry, setInputHeroEntry] = useState<string | null>(null);

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

  //TODA ESTA LOGICA PORONGA NO ME FUNCIONA

  // const ulResultsRef = useRef<HTMLUListElement>(null);
  // const [ulResultsVisibility, setUlResultsVisibility] = useState(false);
  // useEffect(() => {
  //   const closeUlResultsList = (event: MouseEvent) => {
  //     if (!ulResultsVisibility) return;
  //     if (
  //       ulResultsRef.current &&
  //       !ulResultsRef.current.contains(event.target)
  //     ) {
  //       setUlResultsVisibility(false);
  //     }
  //   };
  //   window.addEventListener("click", closeUlResultsList);
  //   return () => {
  //     window.removeEventListener("click", closeUlResultsList);
  //   };
  // }, [ulResultsVisibility]);

  // console.log(ulResultsRef.current);

  //TAMPOCO ANDA ESTA GARCHA.

  // function debounce(callback, delay) {
  //   let timeoutId;

  //   return function () {
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(callback, delay);
  //   };
  // }

  return (
    <>
      <div className="flex w-11/12 justify-between items-center border-r-4 border rounded-xl py-1 pl-4 pr-2 ">
        <input
          type="text"
          placeholder="Type some character to search for a hero"
          className="w-full outline-none"
          // onChange={(e) => debounce(setInputHeroEntry(e.target.value), 2000)}
        />
      </div>

      <ul
        className="w-10/12 max-h-60 overflow-auto"
        // ref={ulResultsRef}
      >
        {isLoading ? (
          <TbLoaderQuarter className="animate-spin p-1" />
        ) : results ? (
          results.length < 1 ? (
            <li className="italic p-1 text-xs text-gray-700">No results</li>
          ) : (
            results.map((hero) => (
              <li
                className="border-x border-b py-1 flex px-4 justify-between hover:bg-blue-200"
                key={hero.id}
              >
                <span>{hero.name}</span>
                <span
                  className={
                    hero.biography.alignment === "good"
                      ? "text-green-500 text-2xl"
                      : "text-red-500 text-2xl"
                  }
                >
                  •
                </span>
              </li>
            ))
          )
        ) : null}
      </ul>
    </>
  );
}
