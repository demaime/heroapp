// @ts-nocheck

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchBar from "@/components/SearchBar";
import { Hero } from "@/types/hero-type";
import { Fade } from "react-awesome-reveal";
import FireEffectSVG from "@/components/FireEffectSVG";
import ResultCard from "@/components/ResultCard";
import PowerStats from "@/components/PowerStats";
import { ToastContainer, toast } from "react-toastify";
import Header from "@/components/Header";
import "react-toastify/dist/ReactToastify.css";
import "tippy.js/dist/tippy.css";

export default function Home() {
  const accessToken = 6728050277235129;
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [chosenHero, setChosenHero] = useState<Hero>();
  const [myTeam, setMyTeam] = useState<Hero[] | []>([]);
  const teamIds = myTeam.map((member) => member.id);

  const router = useRouter();

  useEffect(() => {
    const idsParam = teamIds.join(",");
    // Actualiza la URL con los teamIds
    router.replace(`?ids=${idsParam}`, undefined, { shallow: true });
  }, [teamIds]);

  const addHeroToMyTeam = (newHero) => {
    const existingHero = myTeam.find((heroe) => heroe.id === newHero.id);

    if (!existingHero) {
      if (myTeam.length < 6) {
        const goodHeros = myTeam.filter(
          (hero) => hero.biography.alignment === "good"
        );
        const evilHeros = myTeam.filter(
          (hero) => hero.biography.alignment === "bad"
        );

        if (
          (newHero.biography.alignment === "good" && goodHeros.length < 3) ||
          (newHero.biography.alignment === "bad" && evilHeros.length < 3)
        ) {
          setMyTeam([...myTeam, newHero]);
        } else {
          toast.error("No se puede agregar más héroes de esta alineación", {
            position: "top-center",
            autoClose: 700,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      } else {
        toast.error("El equipo ya está completo", {
          position: "top-center",
          autoClose: 700,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } else {
      toast.error("El héroe ya está en el equipo", {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div id="full-container" className="bg-gray-900">
      <Header />
      <main className="flex flex-col items-center justify-between 2 text-white ">
        <SearchBar
          accessToken={accessToken}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          setResults={setResults}
          results={results}
          chosenHero={chosenHero}
          setChosenHero={setChosenHero}
        />
        <Fade className="w-full">
          <div className="w-full flex justify-center relative mt-2">
            <ResultCard chosenHero={chosenHero} />
            <FireEffectSVG alignment={chosenHero?.biography.alignment} />
          </div>
        </Fade>
        {chosenHero && (
          <>
            <div className="w-11/12 rounded" style={{ marginTop: "2px" }}>
              {chosenHero.biography.alignment === "good" ? (
                <div className="alignment-shadow w-full h-full flex items-end justify-center pb-1 text-2xl text-green-500">
                  GOOD
                </div>
              ) : (
                <div className="alignment-shadow w-full h-full flex items-end justify-center pb-1 text-2xl text-red-500">
                  EVIL
                </div>
              )}
            </div>
            <PowerStats chosenHero={chosenHero} />
            <div className="w-full flex items-center justify-center mt-4">
              {myTeam.some((hero) => hero.name === chosenHero.name) ? (
                <button
                  onClick={() => addHeroToMyTeam(chosenHero)}
                  className="p-1 text-xs font-bold h-12 w-36 rounded-lg border bg-gray-500 text-gray-300 "
                >
                  ALREADY IN TEAM
                </button>
              ) : (
                <button
                  onClick={() => addHeroToMyTeam(chosenHero)}
                  className="p-1 text-xs font-bold h-12 w-36 rounded-lg border bg-green-500  "
                >
                  ADD TO TEAM
                </button>
              )}
            </div>
          </>
        )}
        <ToastContainer
          position="top-center"
          autoClose={500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </main>
    </div>
  );
}
