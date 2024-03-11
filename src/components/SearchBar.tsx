// @ts-nocheck

import { Hero } from "@/types/hero-type";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { TbLoaderQuarter } from "react-icons/tb";

interface SearchBarProps {
  accessToken: number;
  setIsLoading: (isLoading: boolean) => void;
  isLoading: boolean;
  setResults: (results: []) => void;
  results: any[];
  chosenHero: Hero;
  setChosenHero: (chosenHero: Hero) => void;
}

export default function SearchBar({
  accessToken,
  setIsLoading,
  isLoading,
  setResults,
  results,
  setChosenHero,
}: SearchBarProps) {
  const [ulResultsVisibility, setUlResultsVisibility] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  
  // const debounce = (func: Function, delay: number) => {
  //   let timer: ReturnType<typeof setTimeout>;
  //   return function (this: any, ...args: any[]) {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => func.apply(this, args), delay);
  //   };
  // };

  // const debouncedSearchHeroes = debounce(searchHeroes, 300); 

  async function searchHeroes() {
    const apiHeroes = `https://superheroapi.com/api.php/${accessToken}/search/${inputRef.current?.value}`;

    setUlResultsVisibility(true);
    setIsLoading(true);
    try {
      const res = await axios.get(apiHeroes);
      setIsLoading(false);
      setResults(res.data.results || []);
    } catch (error) {
      console.error("Error fetching heroes:", error);
      setIsLoading(false);
      setResults([]);
    }
  }

  useEffect(() => {
    const closeUlResultsList = (event: MouseEvent) => {
      if (!ulResultsVisibility) return;
      setUlResultsVisibility(false);

      if (event.target?.classList.contains("heroResult"))
        setUlResultsVisibility(true);
    };
    document.addEventListener("click", closeUlResultsList);
    inputRef.current?.addEventListener("focus", () =>
      setUlResultsVisibility(true)
    );
    return () => {
      document.removeEventListener("click", closeUlResultsList);
    };
  }, [ulResultsVisibility]);

  const [inputFocus, setInputFocus] = useState(false);

  const handleFocus = () => {
    setInputFocus(true);
    document.body.style.overflow = "hidden";
  };

  const handleBlur = () => {
    setInputFocus(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <input
        type="text"
        placeholder="Type some character to search..."
        className="heroResult w-11/12 outline-none border-r-4 border rounded-xl py-2 px-4 pr-2 bg-blue-100 text-gray-900 z-50"
        ref={inputRef}
        onChange={debouncedSearchHeroes}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {ulResultsVisibility && (
        <ul
          className={
            isLoading
              ? "resultsList w-10/12 max-h-60 overflow-auto z-50"
              : "resultsList w-10/12 max-h-60 overflow-auto border-b bg-gray-800 fixed top-[7.4rem] z-50 md:top-[10.7rem]"
          }
        >
          {isLoading && (
            <li className="heroResult fixed top-28 flex justify-center w-10/12">
              <TbLoaderQuarter className="animate-spin text-3xl mt-[0.8rem] md:mt-[3.8rem]" />
            </li>
          )}

          {!isLoading &&
            (results ? (
              results.length < 1 ? (
                <li className="heroResult italic p-1 text-xs text-gray-900 bg-blue-200">
                  No results
                </li>
              ) : (
                results.map((hero) => (
                  <li
                    className=" border-x border-b py-1 flex px-4 justify-between hover:bg-blue-200 hover:text-gray-900 cursor-pointer"
                    key={hero.id}
                    onClick={() => setChosenHero(hero)}
                  >
                    <span>{hero.name}</span>
                    <span
                      className={
                        hero.biography.alignment === "good"
                          ? " text-green-500 text-2xl"
                          : hero.biography.alignment === "bad"
                          ? " text-red-500 text-2xl"
                          : "text-gray-500 text-2xl"
                      }
                    >
                      ◆
                    </span>
                  </li>
                ))
              )
            ) : null)}
        </ul>
      )}
    </>
  );
}
