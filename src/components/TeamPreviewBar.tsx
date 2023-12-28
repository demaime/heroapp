import { Hero } from "@/types/hero-type";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

type TeamPreviewBarProps = {
  myTeam: Hero[];
};

export default function TeamPreviewBar({ myTeam }: TeamPreviewBarProps) {
  const teamSquaresPreview = Array.from(
    { length: 6 },
    (_, index) => myTeam[index] || null
  );

  return (
    <div className="flex justify-around w-full h-16 items-center">
      <div className="flex justify-evenly w-10/12">
        {teamSquaresPreview.map((member, index) => (
          <div key={index}>
            {member ? (
              <Tippy content={member.name}>
                <Image
                  className={
                    member.biography.alignment === "good"
                      ? "good-member-shadow w-full rounded"
                      : "evil-member-shadow w-full rounded"
                  }
                  src={member.image.url}
                  alt={"Hero"}
                  height={40}
                  width={32}
                />
              </Tippy>
            ) : (
              <div className="h-[42.5px] w-8 bg-gray-900 flex items-center justify-center rounded">
                <Image
                  className="opacity-50"
                  src={"/assets/unknown.png"}
                  alt={"Unkwown"}
                  height={30}
                  width={20}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="h-[42.5px] w-12 bg-gray-900 flex items-center justify-center rounded">
        <Image
          src={"/assets/expand.png"}
          alt={"Unkwown"}
          height={30}
          width={20}
        />
      </div>
    </div>
  );
}
