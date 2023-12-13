// "use client";
import axios from "axios";
import Image from "next/image";
import React, { useRef } from "react";

interface SearchBarProps {
  accessToken: number;
  setIsLoading: (isLoading: boolean) => void;
  setResults: (results: []) => void;
}

export default function SearchBar({
  accessToken,
  setIsLoading,
  setResults,
}: SearchBarProps) {
  const herosearchRef = useRef<HTMLInputElement>();

  async function searchHeroes() {
    const apiHeroes = `https://superheroapi.com/api.php/${accessToken}/search/${
      herosearchRef.current && herosearchRef.current.value
    }`;

    setIsLoading(true);
    let res = await axios.get(apiHeroes);
    setIsLoading(false);
    if (res.data.results) {
      setResults(res.data.results);
    } else {
      setResults([]);
    }
    console.log(res);
  }

  //buscar el tipo,  no me deja de putear con ninguno
  // const handleInputChange = (e: any) => {
  //   console.log(e.target.value);
  // };

  return (
    <div className="flex w-[40rem] justify-between items-center border-r-4 border rounded-xl py-1 pl-4 pr-2 ">
      <input
        type="text"
        placeholder="Type some character to search for a hero"
        className="w-full outline-none"
        // onChange={handleInputChange}
        ref={herosearchRef}
      />
      <Image
        className=""
        src="/assets/loupe.png"
        alt="Landscape picture"
        width={30}
        height={15}
        onClick={searchHeroes}
      />
    </div>
  );
}
