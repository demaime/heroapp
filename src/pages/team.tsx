import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import axios from "axios";
import { Hero } from "@/types/hero-type";

// * obtener ids de la url
// * en el primer render, agarrar los ids y traer de la api de superhero cada uno
// * tiparlo o traer el tipo
// * con el resultado, setear un estado con los heroes que obtuve
// * en el jsx, mappear por los heroes que obtuve (estado) y mostrar los nombres

export default function Team() {
  const accessToken = 6728050277235129;
  const router = useRouter();
  const [team, setTeam] = useState<Hero[]>([]);

  useEffect(() => {
    const teamIds = router.query.ids?.toString().split(",") || [];
    async function getHeroesByID() {
      setTeam([]);

      const promises = teamIds.map((id) => {
        return axios.get<Hero>(
          `https://superheroapi.com/api.php/${accessToken}/${id}`
        );
      });

      const results = await Promise.all(promises);

      setTeam(results.map((res) => res.data));
    }
    getHeroesByID();
  }, [router.query.ids]);

  return (
    <div id="full-container" className="bg-gray-900">
      <Header />
      <ul className="w-full h-11/12 flex flex-col items-center justify-evenly text-white">
        {team.map((hero) => (
          <li key={hero.name}>{hero.name}</li>
        ))}
      </ul>
    </div>
  );
}
