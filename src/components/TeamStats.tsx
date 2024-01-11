import { Hero } from "@/types/hero-type";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

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

  function sumarTotales(superheroes: Hero[]) {
    // Inicializa un objeto para almacenar los totales
    const totales = {
      combat: 0,
      durability: 0,
      intelligence: 0,
      power: 0,
      speed: 0,
      strength: 0,
    };

    // Itera sobre cada superhéroe y suma los valores
    superheroes.forEach((heroe: Hero) => {
      Object.keys(totales).forEach((propiedad: string) => {
        // Convierte la cadena en un número, si es posible
        const valor = parseInt(heroe[propiedad], 10) || 0;
        // Suma el valor a la propiedad correspondiente
        totales[propiedad] += valor;
      });
    });

    return totales;
  }

  // Llama a la función con tu array de superhéroes
  const totales = sumarTotales(team);

  console.log(totales);

  return (
    <div className="text-red-200">
      <Fade cascade={true} duration={400} damping={0.3}>
        <div>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b"></th>
                <th className="py-2 px-4 border-b">TOTAL</th>
                <th className="py-2 px-4 border-b">AVERAGE</th>
              </tr>
            </thead>
            <tbody>
              {powerstatsTitles.map((stat, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">
                    {" "}
                    <Image
                      src={`/assets/powerstats/${stat}.png`}
                      alt={`${stat} powerstat`}
                      width={60}
                      height={60}
                    />
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {/* {teamStats.map((hero) => hero[stat])} */}
                  </td>
                  <td className="py-2 px-4 border-b">{`Fila ${
                    index + 1
                  }, Col 3`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {team.map((hero) => hero.name)}
      </Fade>
    </div>
  );
}
