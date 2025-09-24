"use client";
import { MovieCard } from "./MovieCard";
import { MovieType } from "./MovieType";
import { useState } from "react";
import { useEffect } from "react";

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
    console.log(jsonData);
    setTopRatedMovieData(jsonData.results.splice(10));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(topRatedMovieData);

  if (loading) {
    return <div className="text-black text-[100px]">...loading test</div>;
  }
  if (!loading && typeof topRatedMovieData === "undefined") {
    return <div className="text-black text-[100px]">Something wrong Test</div>;
  }
  return (
    <div className=" flex flex-col gap-[36px] justify-center items-center">
      <div className="w-[1275px]">
        <MovieType title={title} />
      </div>
      <div className="flex flex-wrap gap-[32px] justify-center">
        {topRatedMovieData.map((movie, index) => {
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
    </div>
  );
};
