"use client";
import { MovieCard } from "./MovieCard";
import { MovieType } from "./MovieType";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { SeeMore } from "../_icons/SeeMoreIcon";

const ApiLink =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const MovieSectionTopRated = (props) => {
  const { title } = props;
  const [topRatedMovieData, setTopRatedMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const data = await fetch(ApiLink, options);
    const jsonData = await data.json();
    // console.log(jsonData);
    setTopRatedMovieData(jsonData.results);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log(topRatedMovieData);

  if (loading) {
    return <div className="text-black text-[100px]">...loading test</div>;
  }
  if (!loading && typeof topRatedMovieData === "undefined") {
    return <div className="text-black text-[100px]">Something wrong Test</div>;
  }
  return (
    <div className=" flex flex-col gap-[36px] justify-center items-center">
      <div className="w-[1275px]">
        <div className="flex items-center justify-between flex-row">
          <p className="text-black text-[24px] font-semibold">Top Rated</p>
          <Link href={"/seeMoreTopRated"}>
            <button
              className="text-black flex items-center gap-[14px] cursor-pointer"
              // onClick={seeMore}
            >
              See more <SeeMore />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap gap-[32px] justify-center">
        {topRatedMovieData.slice(0, 10).map((movie, index) => {
          return (
            <MovieCard
              key={index}
              title={movie.title}
              rating={movie.vote_average.toFixed(1)}
              imageSrc={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              upcomingMovieId={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
};
