import React, { useState } from "react";
import Header from "@/components/Header";
import { Fade } from "react-awesome-reveal";
import TeamMembers from "@/components/TeamMembers";
import TeamStats from "@/components/TeamStats";
import useGetInitialTeamMembers from "@/hooks/useGetInitialTeamMembers";

// *PREGUNTAR por la importacion, solo uso myTeam aca. Esta bien?

export default function Team() {
  const [teamVisibility, setTeamVisibility] = useState(true);

  const { myTeam } = useGetInitialTeamMembers();

  return (
    <div id="full-container" className="bg-gray-900">
      <Header />
      <button
        onClick={() => setTeamVisibility(!teamVisibility)}
        className="w-full text-xl justify-center text-bold text-gray-300 mb-4 italic bg-gray-800 flex items-center pb-1"
      >
        {teamVisibility ? "View stats" : "View team composition"}
      </button>
      {teamVisibility ? (
        <Fade cascade={true} duration={400} damping={0.3}>
          <TeamMembers team={myTeam} />
        </Fade>
      ) : (
        <TeamStats team={myTeam} />
      )}
    </div>
  );
}
