import { Hero } from "@/types/hero-type";
import React from "react";

interface TeamStatsProps {
  team: Hero[];
}

export default function TeamStats({ team }: TeamStatsProps) {
  const powerstatsTitles = [
    "combat",
    "durability",
    "intelligence",
    "power",
    "speed",
    "strength",
  ];

  return (
    <div className="text-red-200">
      <div>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Columna 1</th>
              <th className="py-2 px-4 border-b">Columna 2</th>
              <th className="py-2 px-4 border-b">Columna 3</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 7 }).map((_, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{`Fila ${
                  index + 1
                }, Col 1`}</td>
                <td className="py-2 px-4 border-b">{`Fila ${
                  index + 1
                }, Col 2`}</td>
                <td className="py-2 px-4 border-b">{`Fila ${
                  index + 1
                }, Col 3`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {team.map((hero) => hero.name)}
    </div>
  );
}
