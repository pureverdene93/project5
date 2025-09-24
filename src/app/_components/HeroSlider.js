"use client";
import { RatingIcon } from "../_icons/ratingIcon";
import { PlayBtn } from "../_icons/playbtn";
import { NextIcon } from "../_icons/nextIcon";
import { useState } from "react";
import { useEffect } from "react";

const ApiLink =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const HeroSLider = () => {
  const [heroSliderData, setHeroSliderData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const data = await fetch(ApiLink, options);
    const jsonData = await data.json();
    setHeroSliderData(jsonData.results.splice(19));
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("This is hero slider data", heroSliderData);

  if (loading) {
    return <div className="text-black text-[100px]">...loading test</div>;
  }
  if (!loading && typeof heroSliderData === "undefined") {
    return (
      <div className="text-black text-[100px]">...something wrong test</div>
    );
  }

  return (
    <div className="w-1500px  relative z-[16] flex items-center justify-between h-[600px] overflow-scroll ">
      {heroSliderData.map((movie, index) => {
        return (
          <>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="w-full h-[600px] object-cover absolute z-[-1]"
              key={index}
            />

            <div className="flex flex-col gap-[16px] ml-[140px]">
              <div className="flex flex-col ">
                <p className="text-[16px]">Now Playing:</p>
                <p className="text-[36px]">{movie.title}</p>
                <p className="flex items-center gap-[5px]">
                  <RatingIcon /> {movie.vote_average.toFixed(1)}
                  <span className="text-zinc-400">/10</span>
                </p>
              </div>
              <div className="flex flex-col gap-[16px] text-[14px]">
                <p className="w-[400px]">{movie.overview}</p>

                <button className="w-[145px] h-[40px] flex items-center justify-evenly rounded-[5px] bg-white text-black text-[16px] cursor-pointer">
                  <PlayBtn /> Watch Trailer
                </button>
              </div>
            </div>
          </>
        );
      })}

      <button className="w-[40px] h-[40px] bg-white text-black rounded-[100%] flex items-center justify-center cursor-pointer mr-[44px]">
        <NextIcon />
      </button>
    </div>
  );
};
