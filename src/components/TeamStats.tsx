// @ts-nocheck

import { Hero } from "@/types/hero-type";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Tippy from "@tippyjs/react";

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

  function getTotalsAndAverage(superheroes: Hero[]) {
    // Inicializa un objeto para almacenar los totales y sumas
    const totals = {
      combat: 0,
      durability: 0,
      intelligence: 0,
      power: 0,
      speed: 0,
      strength: 0,
    };

    // Itera sobre cada superhéroe y suma los valores
    superheroes.forEach((heroe: Hero) => {
      Object.keys(totals).forEach((prop: string) => {
        // Convierte la cadena en un número, si es posible
        const valor = parseInt(heroe.powerstats[prop], 10) || 0;
        // Suma el valor a la propiedad correspondiente
        totals[prop] += valor;
      });
    });

    // Calcula el promedio para cada propiedad
    const average = Object.fromEntries(
      Object.entries(totals).map(([prop, total]) => [
        prop,
        total / superheroes.length,
      ])
    );

    return { totals: totals, average };
  }

  const { totals: totals, average } = getTotalsAndAverage(team);

  return (
    <div className="text-blue-200">
      <Fade cascade={true} duration={400} damping={0.3}>
        <div>
          <table className="min-w-full">
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
                    <Tippy key={stat} content={stat.toUpperCase()}>
                      <Image
                        src={`/assets/powerstats/${stat}.png`}
                        alt={`${stat} powerstat`}
                        width={60}
                        height={60}
                      />
                    </Tippy>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {totals[stat]}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {average[stat].toFixed(2)}{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fade>
    </div>
  );
}
