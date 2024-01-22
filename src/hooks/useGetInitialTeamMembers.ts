import { Hero } from "@/types/hero-type";
import axios from "axios";
import router from "next/router";
import { useEffect, useState } from "react";

export default function useGetInitialTeamMembers() {
  const accessToken = 6728050277235129;
  const [hasLoaded, setHasLoaded] = useState(false);
  const [myTeam, setMyTeam] = useState<Hero[] | []>([]);

  useEffect(() => {
    if (hasLoaded) {
      return;
    }
    const teamIds = router.query.ids?.toString().split(",") || [];
    async function getHeroesByID() {
      setMyTeam([]);

      const promises = teamIds.map((id) => {
        return axios.get<Hero>(
          `https://superheroapi.com/api.php/${accessToken}/${id}`
        );
      });

      const results = await Promise.all(promises);

      setMyTeam(results.map((res) => res.data));
      setHasLoaded(true);
    }
    getHeroesByID();
  }, [hasLoaded]);

  return { hasLoaded, myTeam, setMyTeam };
}
