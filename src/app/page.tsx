// @ts-nocheck
"use client";
import { useState } from "react";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import { Hero } from "@/types/hero-type";
import { Fade } from "react-awesome-reveal";
import FireEffectSVG from "@/components/FireEffectSVG";
import ResultCard from "@/components/ResultCard";
import PowerStats from "@/components/PowerStats";

export default function Home() {
  const accessToken = 6728050277235129;
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [chosenHero, setChosenHero] = useState<Hero>();
  const [myTeam, setMyTeam] = useState<Hero[] | []>([]);

  const addHeroToMyTeam = (newHero) => {
    const heroeExistente = myTeam.find((heroe) => heroe.id === newHero.id);

    if (!heroeExistente) {
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
          console.log("No se puede agregar más héroes de esta alineación");
        }
      } else {
        console.log("El equipo ya está completo");
      }
    } else {
      console.log("El héroe ya está en el equipo");
    }
  };

  console.log(myTeam);
  return (
    <div id="full-container" className="bg-gray-900">
      <header className="w-full flex justify-center items-center p-4">
        <Image
          src={"/assets/logo.png"}
          alt={"AppLogo"}
          width={30}
          height={30}
        ></Image>
        <svg
          width="129pt"
          height="17pt"
          viewBox="-0.8 -0.8 131 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="fontsvg1703007762694"
            strokeLinecap="round"
            fillRule="evenodd"
            stroke="#bfdbfe"
            strokeWidth="0.4mm"
            fill="#3b444f"
          >
            <path
              d="M 53.198 0.342 L 53.54 0.342 A 0.997 0.997 0 0 1 54.488 0.98 Q 54.713 1.451 54.752 2.27 A 7.598 7.598 0 0 1 54.761 2.637 L 54.761 4.98 L 55.005 5.029 L 59.497 5.029 A 0.088 0.088 0 0 0 59.548 5.012 Q 59.58 4.99 59.613 4.938 A 0.63 0.63 0 0 0 59.644 4.883 L 59.644 2.344 A 4.44 4.44 0 0 1 59.689 1.68 Q 59.81 0.882 60.253 0.529 A 1.177 1.177 0 0 1 60.474 0.391 L 60.816 0.342 L 61.157 0.342 A 0.989 0.989 0 0 1 62.092 0.965 Q 62.324 1.439 62.368 2.275 A 7.82 7.82 0 0 1 62.378 2.686 L 62.378 9.961 A 8.546 8.546 0 0 1 62.351 10.676 Q 62.249 11.879 61.773 12.215 A 0.697 0.697 0 0 1 61.597 12.305 A 4.84 4.84 0 0 1 61.459 12.345 Q 61.266 12.398 61.172 12.402 A 0.348 0.348 0 0 1 61.157 12.402 L 60.864 12.402 A 1.014 1.014 0 0 1 59.894 11.804 Q 59.644 11.308 59.644 10.4 L 59.644 7.617 Q 59.644 7.54 59.582 7.524 A 0.144 0.144 0 0 0 59.546 7.52 L 54.859 7.52 A 0.169 0.169 0 0 0 54.819 7.529 Q 54.768 7.548 54.762 7.602 A 0.133 0.133 0 0 0 54.761 7.617 L 54.761 10.107 A 6.452 6.452 0 0 1 54.719 10.884 Q 54.533 12.402 53.54 12.402 L 53.247 12.402 Q 52.087 12.402 52.03 10.549 A 6.395 6.395 0 0 1 52.027 10.352 L 52.027 2.393 A 5.363 5.363 0 0 1 52.068 1.696 Q 52.246 0.342 53.198 0.342 Z M 7.617 1.66 L 7.617 1.904 A 0.864 0.864 0 0 1 7.182 2.686 Q 6.903 2.858 6.446 2.93 A 85.13 85.13 0 0 0 5.792 2.78 Q 4.656 2.526 4.325 2.495 A 0.844 0.844 0 0 0 4.248 2.49 Q 3.028 2.612 3.028 3.418 L 3.028 3.564 A 0.619 0.619 0 0 0 3.229 3.991 Q 3.729 4.511 5.469 4.98 A 6.201 6.201 0 0 1 6.751 5.592 Q 8.399 6.65 8.399 8.545 Q 8.399 11.133 5.615 12.158 A 5.37 5.37 0 0 1 4.471 12.41 A 6.797 6.797 0 0 1 3.711 12.451 Q 2.075 12.451 1.047 11.832 A 3.172 3.172 0 0 1 0.049 10.889 L 0 10.596 L 0 10.547 A 1.407 1.407 0 0 1 0.085 10.041 Q 0.317 9.435 1.19 9.334 A 2.807 2.807 0 0 1 1.27 9.326 L 1.319 9.326 Q 1.514 9.326 3.809 9.912 L 4.199 9.912 A 2.6 2.6 0 0 0 4.709 9.803 Q 5.484 9.545 5.516 8.805 A 1.495 1.495 0 0 0 5.518 8.74 L 5.518 8.643 Q 5.518 7.52 2.881 6.934 A 6.74 6.74 0 0 1 1.75 6.424 Q 1.174 6.091 0.805 5.678 A 2.502 2.502 0 0 1 0.147 3.955 L 0.147 3.662 A 3.402 3.402 0 0 1 0.579 1.926 Q 1.001 1.196 1.837 0.701 A 5.94 5.94 0 0 1 3.125 0.146 A 10.144 10.144 0 0 1 3.617 0.063 Q 3.858 0.029 4.068 0.013 A 4.413 4.413 0 0 1 4.395 0 A 11.285 11.285 0 0 1 5.48 0.135 Q 7.617 0.517 7.617 1.66 Z M 13.501 5.615 L 13.501 8.447 Q 13.501 9.784 14.492 9.94 A 1.794 1.794 0 0 0 14.771 9.961 L 14.82 9.961 Q 16.138 9.961 16.138 8.105 L 16.138 5.078 A 3.711 3.711 0 0 1 16.192 4.412 Q 16.401 3.276 17.409 3.225 A 1.911 1.911 0 0 1 17.505 3.223 A 1.045 1.045 0 0 1 18.504 3.887 Q 18.734 4.372 18.769 5.212 A 7.47 7.47 0 0 1 18.775 5.518 L 18.775 7.959 Q 18.775 10.411 17.805 11.41 A 2.139 2.139 0 0 1 17.163 11.865 A 4.139 4.139 0 0 1 15.708 12.382 A 5.49 5.49 0 0 1 14.82 12.451 A 5.551 5.551 0 0 1 13.447 12.293 A 3.288 3.288 0 0 1 11.157 10.4 A 4.553 4.553 0 0 1 10.864 8.789 L 10.864 4.98 Q 10.864 3.349 12.042 3.232 A 1.913 1.913 0 0 1 12.232 3.223 Q 13.501 3.223 13.501 5.615 Z M 40.235 8.496 L 35.645 8.496 A 0.089 0.089 0 0 0 35.594 8.51 Q 35.559 8.534 35.55 8.597 A 0.338 0.338 0 0 0 35.547 8.643 A 1.093 1.093 0 0 0 36.046 9.567 Q 36.246 9.711 36.527 9.821 A 3.745 3.745 0 0 0 36.963 9.961 Q 37.011 10.008 37.335 10.01 A 4.629 4.629 0 0 0 37.354 10.01 L 37.598 10.01 Q 38.195 10.01 39.725 9.376 A 27.59 27.59 0 0 0 40.186 9.18 L 40.381 9.18 A 0.779 0.779 0 0 1 41.045 9.542 Q 41.209 9.775 41.309 10.156 L 41.309 10.205 A 1.356 1.356 0 0 1 40.867 11.182 Q 40.389 11.66 39.393 12.03 A 10.185 10.185 0 0 1 38.526 12.305 A 10.014 10.014 0 0 1 37.89 12.378 A 7.294 7.294 0 0 1 37.305 12.402 Q 34.867 12.402 33.595 10.379 A 6.716 6.716 0 0 1 33.008 9.18 Q 32.813 8.362 32.813 7.715 A 4.917 4.917 0 0 1 33.201 5.716 Q 33.906 4.113 35.889 3.271 A 9.205 9.205 0 0 1 37.207 3.076 A 4.181 4.181 0 0 1 39.225 3.554 Q 40.074 4.011 40.694 4.909 A 6.141 6.141 0 0 1 41.114 5.615 A 4.719 4.719 0 0 1 41.464 6.843 A 4.213 4.213 0 0 1 41.504 7.422 A 1.29 1.29 0 0 1 41.43 7.879 Q 41.197 8.496 40.235 8.496 Z M 72.229 8.496 L 67.639 8.496 A 0.089 0.089 0 0 0 67.588 8.51 Q 67.553 8.534 67.545 8.597 A 0.338 0.338 0 0 0 67.542 8.643 A 1.093 1.093 0 0 0 68.041 9.567 Q 68.241 9.711 68.521 9.821 A 3.745 3.745 0 0 0 68.958 9.961 Q 69.005 10.008 69.33 10.01 A 4.629 4.629 0 0 0 69.348 10.01 L 69.593 10.01 Q 70.19 10.01 71.719 9.376 A 27.59 27.59 0 0 0 72.18 9.18 L 72.376 9.18 A 0.779 0.779 0 0 1 73.04 9.542 Q 73.203 9.775 73.303 10.156 L 73.303 10.205 A 1.356 1.356 0 0 1 72.862 11.182 Q 72.383 11.66 71.388 12.03 A 10.185 10.185 0 0 1 70.52 12.305 A 10.014 10.014 0 0 1 69.884 12.378 A 7.294 7.294 0 0 1 69.3 12.402 Q 66.862 12.402 65.59 10.379 A 6.716 6.716 0 0 1 65.003 9.18 Q 64.807 8.362 64.807 7.715 A 4.917 4.917 0 0 1 65.196 5.716 Q 65.901 4.113 67.884 3.271 A 9.205 9.205 0 0 1 69.202 3.076 A 4.181 4.181 0 0 1 71.219 3.554 Q 72.068 4.011 72.689 4.909 A 6.141 6.141 0 0 1 73.108 5.615 A 4.719 4.719 0 0 1 73.459 6.843 A 4.213 4.213 0 0 1 73.499 7.422 A 1.29 1.29 0 0 1 73.424 7.879 Q 73.191 8.496 72.229 8.496 Z M 102.71 10.01 L 98.511 10.01 Q 98.45 10.01 97.779 11.816 Q 97.5 12.15 97.222 12.294 A 0.909 0.909 0 0 1 96.802 12.402 L 96.753 12.402 Q 95.569 12.402 95.435 11.035 Q 95.435 10.651 97.04 6.384 A 371.921 371.921 0 0 1 97.534 5.078 Q 98.8 1.261 99.431 0.688 A 0.32 0.32 0 0 1 99.634 0.586 A 1.833 1.833 0 0 1 100.708 0.244 A 1.907 1.907 0 0 1 102.317 1.114 Q 102.575 1.471 102.773 1.976 A 6.913 6.913 0 0 1 103.052 2.881 A 708.375 708.375 0 0 1 103.673 4.595 Q 105.615 9.978 105.863 10.992 A 2.508 2.508 0 0 1 105.884 11.084 Q 105.884 12.241 104.604 12.393 A 3.023 3.023 0 0 1 104.517 12.402 Q 103.296 12.402 102.906 10.352 Q 102.799 10.019 102.715 10.01 A 0.043 0.043 0 0 0 102.71 10.01 Z M 26.27 3.174 L 26.514 3.174 Q 29.008 3.174 30.138 6.03 A 8.69 8.69 0 0 1 30.274 6.396 A 6.395 6.395 0 0 1 30.42 7.764 A 5.329 5.329 0 0 1 30.068 9.746 Q 29.431 11.351 27.637 12.256 Q 26.868 12.451 26.367 12.451 A 2.895 2.895 0 0 1 25.591 12.352 A 2.119 2.119 0 0 1 24.561 11.719 L 24.463 11.719 A 0.169 0.169 0 0 0 24.424 11.728 Q 24.372 11.748 24.366 11.801 A 0.133 0.133 0 0 0 24.365 11.816 L 24.365 13.916 A 3.906 3.906 0 0 1 24.311 14.599 Q 24.093 15.82 22.998 15.82 A 1.238 1.238 0 0 1 22.377 15.673 Q 21.877 15.389 21.763 14.557 A 4.001 4.001 0 0 1 21.729 14.014 L 21.729 5.029 A 3.504 3.504 0 0 1 21.785 4.373 Q 21.991 3.299 22.956 3.228 A 1.914 1.914 0 0 1 23.096 3.223 Q 23.66 3.223 24.103 3.808 A 2.8 2.8 0 0 1 24.268 4.053 L 24.365 4.053 A 2.337 2.337 0 0 1 26.054 3.182 A 2.97 2.97 0 0 1 26.27 3.174 Z M 112.207 3.174 L 112.451 3.174 Q 114.945 3.174 116.076 6.03 A 8.69 8.69 0 0 1 116.211 6.396 A 6.395 6.395 0 0 1 116.358 7.764 A 5.329 5.329 0 0 1 116.006 9.746 Q 115.368 11.351 113.574 12.256 Q 112.805 12.451 112.305 12.451 A 2.895 2.895 0 0 1 111.528 12.352 A 2.119 2.119 0 0 1 110.498 11.719 L 110.401 11.719 A 0.169 0.169 0 0 0 110.361 11.728 Q 110.31 11.748 110.304 11.801 A 0.133 0.133 0 0 0 110.303 11.816 L 110.303 13.916 A 3.906 3.906 0 0 1 110.249 14.599 Q 110.031 15.82 108.936 15.82 A 1.238 1.238 0 0 1 108.315 15.673 Q 107.815 15.389 107.7 14.557 A 4.001 4.001 0 0 1 107.666 14.014 L 107.666 5.029 A 3.504 3.504 0 0 1 107.722 4.373 Q 107.928 3.299 108.893 3.228 A 1.914 1.914 0 0 1 109.033 3.223 Q 109.597 3.223 110.041 3.808 A 2.8 2.8 0 0 1 110.205 4.053 L 110.303 4.053 A 2.337 2.337 0 0 1 111.991 3.182 A 2.97 2.97 0 0 1 112.207 3.174 Z M 123.291 3.174 L 123.535 3.174 Q 126.029 3.174 127.16 6.03 A 8.69 8.69 0 0 1 127.295 6.396 A 6.395 6.395 0 0 1 127.442 7.764 A 5.329 5.329 0 0 1 127.09 9.746 Q 126.452 11.351 124.658 12.256 Q 123.889 12.451 123.389 12.451 A 2.895 2.895 0 0 1 122.612 12.352 A 2.119 2.119 0 0 1 121.582 11.719 L 121.485 11.719 A 0.169 0.169 0 0 0 121.445 11.728 Q 121.394 11.748 121.388 11.801 A 0.133 0.133 0 0 0 121.387 11.816 L 121.387 13.916 A 3.906 3.906 0 0 1 121.333 14.599 Q 121.115 15.82 120.02 15.82 A 1.238 1.238 0 0 1 119.399 15.673 Q 118.899 15.389 118.784 14.557 A 4.001 4.001 0 0 1 118.75 14.014 L 118.75 5.029 A 3.504 3.504 0 0 1 118.806 4.373 Q 119.012 3.299 119.977 3.228 A 1.914 1.914 0 0 1 120.117 3.223 Q 120.681 3.223 121.125 3.808 A 2.8 2.8 0 0 1 121.289 4.053 L 121.387 4.053 A 2.337 2.337 0 0 1 123.075 3.182 A 2.97 2.97 0 0 1 123.291 3.174 Z M 29.737 4.541 L 29.737 4.492 A 4.869 4.869 0 0 1 31.38 7.915 A 6.707 6.707 0 0 1 31.397 8.398 A 5.478 5.478 0 0 1 30.96 10.628 Q 30.402 11.896 29.131 12.76 A 7.09 7.09 0 0 1 28.418 13.184 Q 27.822 13.342 27.361 13.398 A 3.843 3.843 0 0 1 26.905 13.428 A 2.72 2.72 0 0 1 26.029 13.277 A 3.771 3.771 0 0 1 25.391 12.988 L 25.342 12.988 L 25.342 13.867 Q 25.342 16.069 24.558 16.551 A 0.888 0.888 0 0 1 24.463 16.602 Q 24.25 16.683 23.851 16.764 A 10.212 10.212 0 0 1 23.682 16.797 Q 22.815 16.797 22.364 16.113 L 22.364 16.016 A 3.124 3.124 0 0 0 22.597 16.073 Q 22.707 16.096 22.805 16.106 A 1.444 1.444 0 0 0 22.949 16.113 L 23.242 16.113 Q 24.057 16.113 24.466 15.146 A 3.342 3.342 0 0 0 24.561 14.893 A 3.321 3.321 0 0 0 24.654 14.239 A 3.826 3.826 0 0 0 24.658 14.063 L 24.658 12.402 L 24.707 12.305 A 2.466 2.466 0 0 0 25.587 12.672 A 3.496 3.496 0 0 0 26.319 12.744 L 26.514 12.744 A 3.672 3.672 0 0 0 29.447 11.313 Q 29.901 10.767 30.273 10.014 A 8.745 8.745 0 0 0 30.323 9.912 A 4.944 4.944 0 0 0 30.712 8.13 A 4.751 4.751 0 0 0 30.713 8.008 L 30.713 7.471 A 4.882 4.882 0 0 0 29.965 4.889 A 6.093 6.093 0 0 0 29.737 4.541 Z M 115.674 4.541 L 115.674 4.492 A 4.869 4.869 0 0 1 117.317 7.915 A 6.707 6.707 0 0 1 117.334 8.398 A 5.478 5.478 0 0 1 116.898 10.628 Q 116.34 11.896 115.068 12.76 A 7.09 7.09 0 0 1 114.356 13.184 Q 113.76 13.342 113.298 13.398 A 3.843 3.843 0 0 1 112.842 13.428 A 2.72 2.72 0 0 1 111.967 13.277 A 3.771 3.771 0 0 1 111.328 12.988 L 111.28 12.988 L 111.28 13.867 Q 111.28 16.069 110.496 16.551 A 0.888 0.888 0 0 1 110.401 16.602 Q 110.187 16.683 109.789 16.764 A 10.212 10.212 0 0 1 109.619 16.797 Q 108.753 16.797 108.301 16.113 L 108.301 16.016 A 3.124 3.124 0 0 0 108.534 16.073 Q 108.645 16.096 108.742 16.106 A 1.444 1.444 0 0 0 108.887 16.113 L 109.18 16.113 Q 109.995 16.113 110.404 15.146 A 3.342 3.342 0 0 0 110.498 14.893 A 3.321 3.321 0 0 0 110.592 14.239 A 3.826 3.826 0 0 0 110.596 14.063 L 110.596 12.402 L 110.645 12.305 A 2.466 2.466 0 0 0 111.525 12.672 A 3.496 3.496 0 0 0 112.256 12.744 L 112.451 12.744 A 3.672 3.672 0 0 0 115.385 11.313 Q 115.838 10.767 116.211 10.014 A 8.745 8.745 0 0 0 116.26 9.912 A 4.944 4.944 0 0 0 116.649 8.13 A 4.751 4.751 0 0 0 116.651 8.008 L 116.651 7.471 A 4.882 4.882 0 0 0 115.903 4.889 A 6.093 6.093 0 0 0 115.674 4.541 Z M 126.758 4.541 L 126.758 4.492 A 4.869 4.869 0 0 1 128.401 7.915 A 6.707 6.707 0 0 1 128.418 8.398 A 5.478 5.478 0 0 1 127.982 10.628 Q 127.424 11.896 126.152 12.76 A 7.09 7.09 0 0 1 125.44 13.184 Q 124.844 13.342 124.382 13.398 A 3.843 3.843 0 0 1 123.926 13.428 A 2.72 2.72 0 0 1 123.051 13.277 A 3.771 3.771 0 0 1 122.412 12.988 L 122.364 12.988 L 122.364 13.867 Q 122.364 16.069 121.58 16.551 A 0.888 0.888 0 0 1 121.485 16.602 Q 121.271 16.683 120.873 16.764 A 10.212 10.212 0 0 1 120.703 16.797 Q 119.837 16.797 119.385 16.113 L 119.385 16.016 A 3.124 3.124 0 0 0 119.618 16.073 Q 119.729 16.096 119.826 16.106 A 1.444 1.444 0 0 0 119.971 16.113 L 120.264 16.113 Q 121.079 16.113 121.488 15.146 A 3.342 3.342 0 0 0 121.582 14.893 A 3.321 3.321 0 0 0 121.676 14.239 A 3.826 3.826 0 0 0 121.68 14.063 L 121.68 12.402 L 121.729 12.305 A 2.466 2.466 0 0 0 122.609 12.672 A 3.496 3.496 0 0 0 123.34 12.744 L 123.535 12.744 A 3.672 3.672 0 0 0 126.469 11.313 Q 126.922 10.767 127.295 10.014 A 8.745 8.745 0 0 0 127.344 9.912 A 4.944 4.944 0 0 0 127.733 8.13 A 4.751 4.751 0 0 0 127.735 8.008 L 127.735 7.471 A 4.882 4.882 0 0 0 126.987 4.889 A 6.093 6.093 0 0 0 126.758 4.541 Z M 18.823 3.711 L 18.872 3.711 Q 19.564 4.097 19.679 5.128 A 3.946 3.946 0 0 1 19.702 5.566 L 19.702 9.424 A 4.786 4.786 0 0 1 19.483 10.926 Q 19.001 12.388 17.459 13.01 A 5.366 5.366 0 0 1 16.773 13.232 A 2.695 2.695 0 0 1 16.369 13.327 Q 16.169 13.36 15.938 13.372 A 5.51 5.51 0 0 1 15.65 13.379 L 15.161 13.379 A 4.782 4.782 0 0 1 13.771 13.187 A 3.701 3.701 0 0 1 11.988 12.012 L 12.036 12.012 Q 12.987 12.653 14.442 12.733 A 7.754 7.754 0 0 0 14.868 12.744 A 5.682 5.682 0 0 0 16.404 12.552 Q 18.302 12.019 18.921 10.01 Q 19.068 9.216 19.068 8.594 L 19.068 5.078 A 4.133 4.133 0 0 0 19.007 4.354 A 3.163 3.163 0 0 0 18.823 3.711 Z M 93.836 8.301 L 93.836 8.447 A 5.572 5.572 0 0 1 93.503 10.427 Q 92.945 11.905 91.45 12.769 A 6.622 6.622 0 0 1 90.711 13.135 A 4.856 4.856 0 0 1 89.653 13.36 A 4.327 4.327 0 0 1 89.246 13.379 L 88.953 13.379 A 4.346 4.346 0 0 1 85.715 12.011 A 5.499 5.499 0 0 1 85.535 11.816 L 85.584 11.816 Q 86.829 12.744 88.416 12.744 L 88.513 12.744 A 4.743 4.743 0 0 0 90.579 12.313 Q 92.274 11.505 93.054 9.18 A 8.432 8.432 0 0 0 93.194 7.989 A 7.492 7.492 0 0 0 93.201 7.666 A 5.551 5.551 0 0 0 92.635 5.25 A 6.98 6.98 0 0 0 92.273 4.59 A 4.541 4.541 0 0 1 93.801 7.63 A 6.373 6.373 0 0 1 93.836 8.301 Z M 102.71 1.123 L 102.71 1.025 L 102.759 1.025 A 3.638 3.638 0 0 1 103.369 1.806 Q 103.841 2.596 104.166 3.826 A 13.269 13.269 0 0 1 104.224 4.053 Q 106.764 10.931 106.811 11.645 A 0.379 0.379 0 0 1 106.812 11.67 L 106.812 11.816 A 1.549 1.549 0 0 1 106.657 12.528 Q 106.344 13.144 105.394 13.333 A 3.902 3.902 0 0 1 105.103 13.379 A 1.492 1.492 0 0 1 104.063 12.958 A 2.291 2.291 0 0 1 103.784 12.646 L 103.784 12.598 A 7.634 7.634 0 0 0 103.989 12.64 Q 104.18 12.677 104.308 12.689 A 1.2 1.2 0 0 0 104.419 12.695 L 104.663 12.695 Q 105.912 12.695 106.153 11.294 A 3.53 3.53 0 0 0 106.177 11.133 Q 106.177 10.526 104.041 4.696 A 382.726 382.726 0 0 0 103.931 4.395 Q 103.045 1.714 102.738 1.17 A 1.106 1.106 0 0 0 102.71 1.123 Z M 62.427 0.83 L 62.476 0.83 A 1.514 1.514 0 0 1 63.15 1.659 Q 63.306 2.087 63.306 2.686 L 63.306 11.279 A 3.665 3.665 0 0 1 63.231 12.059 Q 62.985 13.184 61.935 13.35 A 2.479 2.479 0 0 1 61.548 13.379 A 1.475 1.475 0 0 1 60.445 12.892 A 2.169 2.169 0 0 1 60.279 12.695 L 60.279 12.598 L 60.962 12.744 A 1.915 1.915 0 0 0 61.72 12.606 Q 62.671 12.199 62.671 10.596 L 62.671 2.148 A 3.713 3.713 0 0 0 62.523 1.125 A 4.402 4.402 0 0 0 62.427 0.83 Z M 90.316 3.428 A 4.621 4.621 0 0 0 88.465 3.076 A 4.942 4.942 0 0 0 87.802 3.119 A 3.805 3.805 0 0 0 86.853 3.369 A 6.101 6.101 0 0 0 86.237 3.681 Q 84.843 4.493 84.326 5.88 A 5.221 5.221 0 0 0 84.021 7.715 A 2.392 2.392 0 0 0 84.021 7.743 Q 84.026 8.153 84.168 9.131 Q 84.92 11.219 86.426 11.994 A 4.393 4.393 0 0 0 88.465 12.451 A 4.509 4.509 0 0 0 90.174 12.109 Q 91.989 11.25 92.599 9.616 A 5.265 5.265 0 0 0 92.908 7.764 Q 92.868 7.195 92.796 6.763 A 5.635 5.635 0 0 0 92.713 6.348 A 6.428 6.428 0 0 0 92.189 5.159 Q 91.481 3.933 90.316 3.428 Z M 4.59 13.379 L 4.199 13.379 Q 1.856 13.379 0.586 12.012 L 0.586 11.963 L 0.635 11.963 Q 1.736 12.64 3.387 12.73 A 9.54 9.54 0 0 0 3.906 12.744 A 6.186 6.186 0 0 0 5.733 12.493 Q 7.813 11.852 8.594 9.57 Q 8.692 9.082 8.692 8.594 L 8.692 8.301 A 3.42 3.42 0 0 0 8.485 7.153 A 4.721 4.721 0 0 0 8.106 6.348 A 3.913 3.913 0 0 1 8.928 7.313 A 3.228 3.228 0 0 1 9.375 8.984 A 4.544 4.544 0 0 1 9.012 10.847 Q 8.27 12.519 6.006 13.232 Q 5.213 13.379 4.59 13.379 Z M 46.265 7.568 L 46.265 10.645 Q 46.265 11.38 46.019 11.814 A 1.175 1.175 0 0 1 45.191 12.402 A 0.832 0.832 0 0 0 45.101 12.407 Q 45.056 12.412 45.02 12.422 A 0.315 0.315 0 0 0 44.947 12.451 Q 43.628 12.451 43.628 10.596 L 43.628 5.176 A 3.504 3.504 0 0 1 43.684 4.519 Q 43.89 3.445 44.855 3.374 A 1.914 1.914 0 0 1 44.995 3.369 Q 45.559 3.369 46.003 3.955 A 2.8 2.8 0 0 1 46.167 4.199 L 46.265 4.199 Q 46.973 3.32 47.974 3.32 A 1.177 1.177 0 0 1 48.97 3.816 Q 49.132 4.033 49.243 4.346 A 1.927 1.927 0 0 1 49.273 4.485 Q 49.292 4.596 49.292 4.688 Q 49.292 5.481 46.851 6.348 A 1.01 1.01 0 0 0 46.351 6.957 Q 46.265 7.218 46.265 7.568 Z M 78.26 7.568 L 78.26 10.645 Q 78.26 11.38 78.014 11.814 A 1.175 1.175 0 0 1 77.185 12.402 A 0.832 0.832 0 0 0 77.095 12.407 Q 77.051 12.412 77.014 12.422 A 0.315 0.315 0 0 0 76.942 12.451 Q 75.623 12.451 75.623 10.596 L 75.623 5.176 A 3.504 3.504 0 0 1 75.679 4.519 Q 75.885 3.445 76.85 3.374 A 1.914 1.914 0 0 1 76.99 3.369 Q 77.554 3.369 77.997 3.955 A 2.8 2.8 0 0 1 78.162 4.199 L 78.26 4.199 Q 78.968 3.32 79.968 3.32 A 1.177 1.177 0 0 1 80.965 3.816 Q 81.126 4.033 81.238 4.346 A 1.927 1.927 0 0 1 81.268 4.485 Q 81.287 4.596 81.287 4.688 Q 81.287 5.481 78.845 6.348 A 1.01 1.01 0 0 0 78.345 6.957 Q 78.26 7.218 78.26 7.568 Z M 49.439 3.906 L 49.488 3.906 A 2 2 0 0 1 49.932 4.305 A 1.495 1.495 0 0 1 50.269 5.273 A 1.148 1.148 0 0 1 49.935 6.054 Q 49.339 6.71 47.681 7.227 A 0.884 0.884 0 0 0 47.261 7.863 A 1.428 1.428 0 0 0 47.241 8.105 L 47.241 10.498 A 9.28 9.28 0 0 1 47.205 11.354 Q 47.07 12.808 46.429 13.196 A 0.946 0.946 0 0 1 46.363 13.232 Q 45.923 13.379 45.63 13.379 L 45.484 13.379 A 1.535 1.535 0 0 1 44.895 13.27 Q 44.52 13.116 44.263 12.744 L 44.263 12.646 Q 44.71 12.73 44.891 12.742 A 0.827 0.827 0 0 0 44.947 12.744 A 1.782 1.782 0 0 0 45.666 12.61 Q 46.424 12.278 46.538 11.127 A 4.405 4.405 0 0 0 46.558 10.693 L 46.558 8.057 Q 46.558 7.075 46.759 6.798 A 0.23 0.23 0 0 1 46.948 6.689 A 5.089 5.089 0 0 1 47.17 6.577 Q 47.648 6.347 48.706 5.908 A 3.406 3.406 0 0 0 49.08 5.629 Q 49.585 5.19 49.585 4.736 L 49.585 4.59 Q 49.585 4.326 49.476 4.007 A 2.814 2.814 0 0 0 49.439 3.906 Z M 81.433 3.906 L 81.482 3.906 A 2 2 0 0 1 81.927 4.305 A 1.495 1.495 0 0 1 82.263 5.273 A 1.148 1.148 0 0 1 81.929 6.054 Q 81.333 6.71 79.676 7.227 A 0.884 0.884 0 0 0 79.256 7.863 A 1.428 1.428 0 0 0 79.236 8.105 L 79.236 10.498 A 9.28 9.28 0 0 1 79.2 11.354 Q 79.064 12.808 78.424 13.196 A 0.946 0.946 0 0 1 78.357 13.232 Q 77.918 13.379 77.625 13.379 L 77.478 13.379 A 1.535 1.535 0 0 1 76.89 13.27 Q 76.515 13.116 76.258 12.744 L 76.258 12.646 Q 76.704 12.73 76.886 12.742 A 0.827 0.827 0 0 0 76.941 12.744 A 1.782 1.782 0 0 0 77.66 12.61 Q 78.418 12.278 78.532 11.127 A 4.405 4.405 0 0 0 78.552 10.693 L 78.552 8.057 Q 78.552 7.075 78.754 6.798 A 0.23 0.23 0 0 1 78.943 6.689 A 5.089 5.089 0 0 1 79.165 6.577 Q 79.642 6.347 80.701 5.908 A 3.406 3.406 0 0 0 81.075 5.629 Q 81.58 5.19 81.58 4.736 L 81.58 4.59 Q 81.58 4.326 81.47 4.007 A 2.814 2.814 0 0 0 81.433 3.906 Z M 55.152 7.813 L 59.253 7.813 A 0.169 0.169 0 0 1 59.292 7.822 Q 59.344 7.841 59.35 7.895 A 0.133 0.133 0 0 1 59.351 7.91 L 59.351 8.398 Q 59.351 8.476 59.289 8.492 A 0.144 0.144 0 0 1 59.253 8.496 L 55.689 8.496 L 55.689 11.23 A 3.834 3.834 0 0 1 55.613 12.028 Q 55.362 13.203 54.276 13.356 A 2.471 2.471 0 0 1 53.931 13.379 A 1.537 1.537 0 0 1 53.384 13.287 Q 52.918 13.11 52.661 12.598 L 52.71 12.598 Q 52.918 12.683 53.345 12.744 A 1.915 1.915 0 0 0 54.103 12.606 Q 55.054 12.199 55.054 10.596 L 55.054 7.91 A 0.169 0.169 0 0 1 55.063 7.871 Q 55.083 7.819 55.136 7.813 A 0.133 0.133 0 0 1 55.152 7.813 Z M 40.918 4.639 L 40.918 4.59 L 40.967 4.59 A 4.777 4.777 0 0 1 42.036 6.051 A 4.384 4.384 0 0 1 42.432 7.91 L 42.432 8.203 Q 42.376 8.738 42.168 9.029 A 0.823 0.823 0 0 1 41.455 9.375 L 41.358 9.375 A 1.58 1.58 0 0 0 40.93 9.041 A 1.376 1.376 0 0 0 40.283 8.887 L 40.186 8.887 A 0.486 0.486 0 0 0 40.082 8.906 Q 39.809 8.976 38.943 9.31 A 66.265 66.265 0 0 0 38.526 9.473 L 36.475 9.473 Q 35.938 9.07 35.938 8.838 L 36.035 8.789 L 40.381 8.789 A 2.301 2.301 0 0 0 40.915 8.733 Q 41.797 8.521 41.797 7.52 L 41.797 7.324 A 4.391 4.391 0 0 0 40.918 4.639 Z M 72.913 4.639 L 72.913 4.59 L 72.962 4.59 A 4.777 4.777 0 0 1 74.031 6.051 A 4.384 4.384 0 0 1 74.427 7.91 L 74.427 8.203 Q 74.371 8.738 74.162 9.029 A 0.823 0.823 0 0 1 73.45 9.375 L 73.352 9.375 A 1.58 1.58 0 0 0 72.924 9.041 A 1.376 1.376 0 0 0 72.278 8.887 L 72.18 8.887 A 0.486 0.486 0 0 0 72.076 8.906 Q 71.803 8.976 70.938 9.31 A 66.265 66.265 0 0 0 70.52 9.473 L 68.469 9.473 Q 67.932 9.07 67.932 8.838 L 68.03 8.789 L 72.376 8.789 A 2.301 2.301 0 0 0 72.91 8.733 Q 73.792 8.521 73.792 7.52 L 73.792 7.324 A 4.391 4.391 0 0 0 72.913 4.639 Z M 41.553 9.668 L 41.602 9.668 Q 42.157 9.978 42.227 10.604 A 1.688 1.688 0 0 1 42.237 10.791 L 42.237 10.986 Q 42.237 12.244 39.698 13.135 A 5.959 5.959 0 0 1 39.037 13.278 Q 38.694 13.333 38.303 13.362 A 11.013 11.013 0 0 1 38.037 13.379 A 5.135 5.135 0 0 1 36.252 13.08 A 4.509 4.509 0 0 1 34.424 11.816 L 34.473 11.816 A 4.674 4.674 0 0 0 37.093 12.691 A 5.77 5.77 0 0 0 37.305 12.695 L 37.598 12.695 A 5.624 5.624 0 0 0 39.227 12.472 A 4.217 4.217 0 0 0 41.455 10.889 Q 41.579 10.57 41.598 10.303 A 1.349 1.349 0 0 0 41.602 10.205 Q 41.602 10.102 41.559 9.722 A 27.623 27.623 0 0 0 41.553 9.668 Z M 73.548 9.668 L 73.596 9.668 Q 74.151 9.978 74.221 10.604 A 1.688 1.688 0 0 1 74.231 10.791 L 74.231 10.986 Q 74.231 12.244 71.692 13.135 A 5.959 5.959 0 0 1 71.032 13.278 Q 70.689 13.333 70.298 13.362 A 11.013 11.013 0 0 1 70.032 13.379 A 5.135 5.135 0 0 1 68.247 13.08 A 4.509 4.509 0 0 1 66.419 11.816 L 66.468 11.816 A 4.674 4.674 0 0 0 69.087 12.691 A 5.77 5.77 0 0 0 69.3 12.695 L 69.593 12.695 A 5.624 5.624 0 0 0 71.221 12.472 A 4.217 4.217 0 0 0 73.45 10.889 Q 73.573 10.57 73.593 10.303 A 1.349 1.349 0 0 0 73.596 10.205 Q 73.596 10.102 73.554 9.722 A 27.623 27.623 0 0 0 73.548 9.668 Z M 98.657 10.352 L 98.755 10.303 L 102.466 10.303 A 0.081 0.081 0 0 1 102.525 10.337 Q 102.611 10.437 102.697 10.826 A 5.531 5.531 0 0 1 102.71 10.889 L 102.613 10.938 L 99.292 10.938 A 6.86 6.86 0 0 1 99.038 11.829 Q 98.676 12.812 98.089 13.172 A 1.407 1.407 0 0 1 97.339 13.379 Q 96.509 13.379 95.972 12.598 Q 96.021 12.598 96.021 12.549 A 1.256 1.256 0 0 0 96.224 12.643 Q 96.348 12.687 96.466 12.694 A 0.746 0.746 0 0 0 96.509 12.695 L 96.802 12.695 A 1.355 1.355 0 0 0 97.862 12.172 Q 98.273 11.69 98.547 10.766 A 8.159 8.159 0 0 0 98.657 10.352 Z M 7.813 1.074 L 7.862 1.074 A 1.714 1.714 0 0 1 8.308 1.483 Q 8.594 1.866 8.594 2.393 L 8.594 2.441 A 1.543 1.543 0 0 1 8.494 3.013 Q 8.329 3.431 7.889 3.661 A 2.034 2.034 0 0 1 7.52 3.809 A 1.465 1.465 0 0 1 7.219 3.855 A 1.699 1.699 0 0 1 7.129 3.857 L 7.031 3.857 L 4.932 3.467 L 4.883 3.467 Q 4.004 3.516 4.004 4.053 L 3.906 4.102 A 2.447 2.447 0 0 1 3.678 3.963 Q 3.455 3.808 3.371 3.654 A 0.388 0.388 0 0 1 3.321 3.467 Q 3.461 2.941 3.963 2.82 A 1.421 1.421 0 0 1 4.297 2.783 A 76.299 76.299 0 0 0 4.943 2.933 Q 6.068 3.187 6.413 3.218 A 0.925 0.925 0 0 0 6.494 3.223 A 2.632 2.632 0 0 0 7.081 3.087 Q 7.866 2.796 7.949 2.002 A 1.873 1.873 0 0 0 7.959 1.807 L 7.959 1.66 Q 7.959 1.551 7.815 1.08 A 13.691 13.691 0 0 0 7.813 1.074 Z M 13.55 3.711 L 13.599 3.711 Q 14.296 4.131 14.408 5.189 A 4.067 4.067 0 0 1 14.429 5.615 L 14.429 8.496 Q 14.429 9.155 14.527 9.57 Q 14.478 9.57 14.478 9.619 A 0.53 0.53 0 0 1 13.993 9.308 Q 13.849 9.045 13.81 8.561 A 4.973 4.973 0 0 1 13.794 8.154 L 13.794 4.932 A 2.464 2.464 0 0 0 13.766 4.577 Q 13.711 4.203 13.55 3.711 Z M 86.756 7.715 L 86.756 7.764 A 3.357 3.357 0 0 0 86.839 8.543 Q 87.092 9.603 88.118 9.877 A 2.491 2.491 0 0 0 88.269 9.912 L 88.66 9.912 Q 89.783 9.912 90.174 8.057 L 90.174 7.666 A 3.009 3.009 0 0 0 90.079 6.88 Q 89.795 5.832 88.66 5.566 L 88.269 5.566 Q 86.756 5.859 86.756 7.715 Z M 24.317 7.666 L 24.317 7.91 Q 24.417 8.82 24.742 9.336 A 1.372 1.372 0 0 0 25.977 10.01 A 1.603 1.603 0 0 0 26.853 9.778 Q 27.588 9.313 27.735 7.91 L 27.735 7.764 A 3.637 3.637 0 0 0 27.62 6.996 Q 27.341 5.966 26.416 5.664 A 2.793 2.793 0 0 0 26.105 5.622 A 2.342 2.342 0 0 0 25.928 5.615 Q 24.317 5.92 24.317 7.666 Z M 110.254 7.666 L 110.254 7.91 Q 110.355 8.82 110.68 9.336 A 1.372 1.372 0 0 0 111.914 10.01 A 1.603 1.603 0 0 0 112.79 9.778 Q 113.525 9.313 113.672 7.91 L 113.672 7.764 A 3.637 3.637 0 0 0 113.558 6.996 Q 113.278 5.966 112.354 5.664 A 2.793 2.793 0 0 0 112.043 5.622 A 2.342 2.342 0 0 0 111.865 5.615 Q 110.254 5.92 110.254 7.666 Z M 121.338 7.666 L 121.338 7.91 Q 121.439 8.82 121.764 9.336 A 1.372 1.372 0 0 0 122.998 10.01 A 1.603 1.603 0 0 0 123.874 9.778 Q 124.609 9.313 124.756 7.91 L 124.756 7.764 A 3.637 3.637 0 0 0 124.642 6.996 Q 124.362 5.966 123.438 5.664 A 2.793 2.793 0 0 0 123.127 5.622 A 2.342 2.342 0 0 0 122.949 5.615 Q 121.338 5.92 121.338 7.666 Z M 99.488 7.52 L 101.734 7.52 L 101.978 7.471 L 101.978 7.373 A 0.681 0.681 0 0 0 101.959 7.259 Q 101.845 6.744 101.049 4.128 A 445.377 445.377 0 0 0 100.757 3.174 L 100.611 3.174 Q 100.452 3.174 99.781 5.615 A 10.111 10.111 0 0 0 99.563 6.195 Q 99.471 6.463 99.379 6.77 A 21.866 21.866 0 0 0 99.195 7.422 A 0.809 0.809 0 0 0 99.301 7.477 Q 99.399 7.52 99.488 7.52 Z M 88.416 5.859 L 88.513 5.859 Q 88.94 5.859 89.335 6.259 A 2.508 2.508 0 0 1 89.539 6.494 L 89.539 6.592 L 89.099 6.494 A 1.151 1.151 0 0 0 88.049 7.077 Q 87.815 7.463 87.732 8.105 L 87.732 8.496 A 2.259 2.259 0 0 0 87.927 9.424 L 87.83 9.473 A 2.05 2.05 0 0 1 87.057 7.977 A 2.78 2.78 0 0 1 87.049 7.764 A 2.894 2.894 0 0 1 87.122 7.089 A 1.647 1.647 0 0 1 87.976 5.957 A 4.84 4.84 0 0 1 88.114 5.917 Q 88.307 5.864 88.402 5.86 A 0.348 0.348 0 0 1 88.416 5.859 Z M 27.1 6.641 L 27.051 6.641 L 26.758 6.592 L 26.514 6.592 Q 25.501 6.592 25.293 8.252 L 25.293 8.594 A 2.289 2.289 0 0 0 25.386 9.226 A 2.839 2.839 0 0 0 25.489 9.521 L 25.44 9.521 A 1.588 1.588 0 0 1 24.709 8.548 Q 24.628 8.267 24.613 7.925 A 3.658 3.658 0 0 1 24.61 7.764 A 4.343 4.343 0 0 1 24.735 7.086 Q 25.063 5.908 26.026 5.908 Q 26.993 6.15 27.089 6.55 A 0.385 0.385 0 0 1 27.1 6.641 Z M 113.037 6.641 L 112.989 6.641 L 112.696 6.592 L 112.451 6.592 Q 111.438 6.592 111.231 8.252 L 111.231 8.594 A 2.289 2.289 0 0 0 111.323 9.226 A 2.839 2.839 0 0 0 111.426 9.521 L 111.377 9.521 A 1.588 1.588 0 0 1 110.646 8.548 Q 110.566 8.267 110.551 7.925 A 3.658 3.658 0 0 1 110.547 7.764 A 4.343 4.343 0 0 1 110.673 7.086 Q 111 5.908 111.963 5.908 Q 112.931 6.15 113.027 6.55 A 0.385 0.385 0 0 1 113.037 6.641 Z M 124.121 6.641 L 124.073 6.641 L 123.78 6.592 L 123.535 6.592 Q 122.522 6.592 122.315 8.252 L 122.315 8.594 A 2.289 2.289 0 0 0 122.407 9.226 A 2.839 2.839 0 0 0 122.51 9.521 L 122.461 9.521 A 1.588 1.588 0 0 1 121.73 8.548 Q 121.65 8.267 121.635 7.925 A 3.658 3.658 0 0 1 121.631 7.764 A 4.343 4.343 0 0 1 121.757 7.086 Q 122.084 5.908 123.047 5.908 Q 124.015 6.15 124.111 6.55 A 0.385 0.385 0 0 1 124.121 6.641 Z M 1.123 6.494 L 1.123 6.445 L 1.172 6.445 A 5.89 5.89 0 0 0 1.721 6.741 Q 2.67 7.198 4.46 7.786 A 52.548 52.548 0 0 0 4.541 7.813 Q 5.053 8.105 5.127 8.348 A 0.379 0.379 0 0 1 5.127 8.35 L 5.127 8.398 Q 5.078 8.398 5.078 8.447 A 37.056 37.056 0 0 1 3.846 8.014 Q 1.453 7.121 1.131 6.51 A 0.54 0.54 0 0 1 1.123 6.494 Z M 54.81 0.83 L 54.859 0.83 A 1.514 1.514 0 0 1 55.533 1.659 Q 55.689 2.087 55.689 2.686 L 55.689 4.59 Q 55.689 4.667 55.627 4.683 A 0.144 0.144 0 0 1 55.591 4.687 L 55.152 4.688 Q 55.074 4.688 55.058 4.626 A 0.144 0.144 0 0 1 55.054 4.59 L 55.054 2.002 A 2.229 2.229 0 0 0 55.028 1.677 Q 54.974 1.314 54.81 0.83 Z M 35.498 6.689 L 35.596 6.738 L 38.819 6.738 Q 38.896 6.738 38.912 6.677 A 0.144 0.144 0 0 0 38.916 6.641 A 2.47 2.47 0 0 0 38.663 6.005 Q 38.254 5.31 37.419 5.234 A 2.335 2.335 0 0 0 37.207 5.225 A 1.581 1.581 0 0 0 35.89 5.888 Q 35.702 6.134 35.556 6.472 A 3.638 3.638 0 0 0 35.547 6.494 A 0.372 0.372 0 0 0 35.501 6.643 A 0.461 0.461 0 0 0 35.498 6.689 Z M 67.493 6.689 L 67.591 6.738 L 70.813 6.738 Q 70.891 6.738 70.907 6.677 A 0.144 0.144 0 0 0 70.911 6.641 A 2.47 2.47 0 0 0 70.657 6.005 Q 70.249 5.31 69.413 5.234 A 2.335 2.335 0 0 0 69.202 5.225 A 1.581 1.581 0 0 0 67.885 5.888 Q 67.697 6.134 67.551 6.472 A 3.638 3.638 0 0 0 67.542 6.494 A 0.372 0.372 0 0 0 67.495 6.643 A 0.461 0.461 0 0 0 67.493 6.689 Z M 100.366 7.178 L 99.634 7.178 L 99.634 7.129 Q 100.46 4.265 100.63 3.985 A 0.053 0.053 0 0 1 100.659 3.955 A 79.879 79.879 0 0 1 100.751 4.24 Q 101.05 5.177 101.05 5.273 A 83.636 83.636 0 0 1 100.909 5.717 Q 100.441 7.167 100.366 7.178 Z M 37.207 5.566 L 37.403 5.566 A 1.003 1.003 0 0 1 38.004 5.773 Q 38.254 5.956 38.477 6.299 L 38.428 6.299 A 4.84 4.84 0 0 0 38.29 6.258 Q 38.097 6.205 38.003 6.201 A 0.348 0.348 0 0 0 37.989 6.201 L 37.842 6.201 A 1.586 1.586 0 0 0 37.516 6.233 Q 37.248 6.289 37.061 6.445 L 35.938 6.445 L 35.938 6.348 A 1.94 1.94 0 0 1 36.266 5.936 A 1.332 1.332 0 0 1 37.207 5.566 Z M 69.202 5.566 L 69.397 5.566 A 1.003 1.003 0 0 1 69.998 5.773 Q 70.248 5.956 70.471 6.299 L 70.423 6.299 A 4.84 4.84 0 0 0 70.285 6.258 Q 70.092 6.205 69.997 6.201 A 0.348 0.348 0 0 0 69.983 6.201 L 69.837 6.201 A 1.586 1.586 0 0 0 69.511 6.233 Q 69.243 6.289 69.055 6.445 L 67.932 6.445 L 67.932 6.348 A 1.94 1.94 0 0 1 68.261 5.936 A 1.332 1.332 0 0 1 69.202 5.566 Z"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>
      </header>
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
                  disabled
                  onClick={() => addHeroToMyTeam(chosenHero)}
                  className="p-1 text-xs font-bold h-12 w-36 rounded-lg border bg-gray-500  "
                >
                  ALREDY IN TEAM
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
        <div className="w-full h-12 text-center bg-gray-700 absolute bottom-0 flex flex-col justify-around">
          <div className="h-4 text-xs w-full flex justify-around items-center">
            <div>▲</div>
            <div>MY TEAM</div>
            <div>▲</div>
          </div>
          <div className="flex justify-evenly w-full">
            <div className="rounded-full bg-gray-900 h-6 w-6"></div>
            <div className="rounded-full bg-gray-900 h-6 w-6"></div>
            <div className="rounded-full bg-gray-900 h-6 w-6"></div>
            <div className="rounded-full bg-gray-900 h-6 w-6"></div>
            <div className="rounded-full bg-gray-900 h-6 w-6"></div>
            <div className="rounded-full bg-gray-900 h-6 w-6"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
