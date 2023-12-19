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
  const [ulResultsVisibility, setUlResultsVisibility] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // define la funcion para buscar heroes. setea la visibilidad de la lista de resultados
  async function searchHeroes() {
    const apiHeroes = `https://superheroapi.com/api.php/${accessToken}/search/${inputRef.current?.value}`;

    setUlResultsVisibility(true);
    setIsLoading(true);
    let res = await axios.get(apiHeroes);
    setIsLoading(false);
    if (res.data.results) {
      setResults(res.data.results);
    } else {
      setResults([]);
    }
  }

  //  efecto para cerrar la lista de resultados cuando se clickea fuera del <li>, <input> o <span>. Ver si se puede optimizar
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

  // console.log(inputRef.current);

  // function debounce(callback: () => void, delay: number) {
  //   let timeoutId;

  //   return function () {
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(callback, delay);
  //   };
  // }

  // debounce(() => console.log("hola"), 1000);
  // debounce(() => console.log("hola"), 1000);

  return (
    <>
      <input
        type="text"
        placeholder="Type some character to search..."
        className="heroResult w-11/12 outline-none border-r-4 border rounded-xl py-2 px-4 pr-2 bg-blue-100 text-gray-900"
        ref={inputRef}
        onChange={() => searchHeroes()}
      />

      {ulResultsVisibility && (
        <ul className="resultsList w-10/12 max-h-60 overflow-auto border-b">
          {isLoading ? (
            <TbLoaderQuarter className="animate-spin p-1 text-4xl" />
          ) : results ? (
            results.length < 1 ? (
              <li className="heroResult italic p-1 text-xs text-gray-300">
                No results
              </li>
            ) : (
              results.map((hero) => (
                <li
                  className="heroResult border-x border-b py-1 flex px-4 justify-between hover:bg-blue-200 hover:text-gray-900"
                  key={hero.id}
                >
                  <span className="heroResult">{hero.name}</span>
                  <span
                    className={
                      hero.biography.alignment === "good"
                        ? "heroResult text-green-500 text-2xl"
                        : "heroResult text-red-500 text-2xl"
                    }
                  >
                    ◆
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
