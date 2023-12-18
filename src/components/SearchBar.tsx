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

  const ulResultsRef = useRef<HTMLUListElement>(null);
  const [ulResultsVisibility, setUlResultsVisibility] = useState(false);

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
    setUlResultsVisibility(true);
    searchHeroes();
  }, [accessToken, inputHeroEntry, setIsLoading, setResults]);

  //TODA ESTA LOGICA PORONGA NO ME FUNCIONA.
  // BUENO AHORA FUNCIONA PERO NO SE SI ES OPTIMO
  useEffect(() => {
    const closeUlResultsList = (event: MouseEvent) => {
      if (!ulResultsVisibility) return;
      setUlResultsVisibility(false);
      // if (
      if (event.target?.classList.contains("heroResult"))
        //   ulResultsRef.current &&
        //   !ulResultsRef.current.contains(event.target)
        // ) {
        setUlResultsVisibility(true);
      // }
      console.log(event.target);
    };
    document.addEventListener("click", closeUlResultsList);
    return () => {
      document.removeEventListener("click", closeUlResultsList);
    };
  }, [ulResultsVisibility]);

  // console.log(ulResultsRef.current);

  //TAMPOCO ANDA ESTA GARCHA.
  // BUENO CAPAZ QUE ANDA Y NO LA ENTIENDO
  //NO, NO ANDA

  function debounce(callback: () => void, delay: number) {
    let timeoutId;

    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, delay);
    };
  }

  // debounce(() => console.log("hola"), 1000);
  // debounce(() => console.log("hola"), 1000);
  return (
    <>
      <div className="flex w-11/12 justify-between items-center border-r-4 border rounded-xl py-1 pl-4 pr-2 ">
        <input
          type="text"
          placeholder="Type some character to search for a hero"
          className="w-full outline-none"
          onChange={
            (e) =>
              // debounce(
              setInputHeroEntry(e.target.value)
            // , 5000)
          }
        />
      </div>
      {ulResultsVisibility && (
        <ul className="w-10/12 max-h-60 overflow-auto" ref={ulResultsRef}>
          {isLoading ? (
            <TbLoaderQuarter className="animate-spin p-1" />
          ) : results ? (
            results.length < 1 ? (
              <li className="italic p-1 text-xs text-gray-700">No results</li>
            ) : (
              results.map((hero) => (
                <li
                  className="heroResult border-x border-b py-1 flex px-4 justify-between hover:bg-blue-200"
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
      )}
    </>
  );
}
