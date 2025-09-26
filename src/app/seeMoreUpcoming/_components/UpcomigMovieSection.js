"use client";
import { useState } from "react";
import { useEffect } from "react";
import { MovieCard } from "@/app/_features/MovieCard";
import { Pre } from "../_icons/Pre";
import { Next } from "../_icons/Next";

// import { MovieSectionUpcomingSeeMore } from "./_features/MovieSectionUpcomingSeeMore";

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

export const UpcomingMovieSection = (props) => {
  const { title } = props;
  const [upcomingMovieData, setUpcomingMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const data = await fetch(ApiLink, options);
    const jsonData = await data.json();
    console.log(jsonData);
    setUpcomingMovieData(jsonData.results);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(upcomingMovieData);

  if (loading) {
    return <div className="text-black text-[100px]">...loading test</div>;
  }
  if (!loading && typeof upcomingMovieData === "undefined") {
    return <div className="text-black text-[100px]">Something wrong Test</div>;
  }

  return (
    <div className=" flex flex-col gap-[36px] justify-center items-center">
      <div className="w-[1275px]">
        <div className="flex items-center justify-between flex-row">
          <p className="text-black text-[24px] font-semibold">Upcoming</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-[32px] justify-center">
        {upcomingMovieData.map((movie, index) => {
          return (
            <MovieCard
              key={index}
              title={movie.title}
              rating={movie.vote_average.toFixed(1)}
              imageSrc={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          );
        })}
      </div>
      <div className="flex flex-row items-end h-[40px] justify-center w-[1275px]">
        <button className="w-[114px] [h-40px] text-[16px] flex items-center justify-center cursor-pointer gap-[2px] text-black">
          <Pre />
          Previous
        </button>
        <button className="w-[88px] h-[40px] text-[16px] flex items-center justify-center cursor-pointer gap-[2px] text-black">
          Next
          <Next />
        </button>
      </div>
    </div>
  );
};
