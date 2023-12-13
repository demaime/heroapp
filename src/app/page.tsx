"use client";
import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const accessToken = 6728050277235129;
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  return (
    <>
      <header className="w-full text-center p-4">SUPER HERO APP</header>
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
        <SearchBar
          accessToken={accessToken}
          setIsLoading={setIsLoading}
          setResults={setResults}
        />
      </main>
    </>
  );
}
