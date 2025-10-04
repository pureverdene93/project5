"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MovieCard } from "@/app/_features/MovieCard";
import { MovieType } from "@/app/_features/MovieType";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const MoreLikeThisSection = () => {
  const param = useParams();
  const { id } = param;
  console.log(id);

  const [similarData, setSimilarData] = useState([]);

  const similarMovieApiLink = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;

  const getData = async () => {
    const data = await fetch(similarMovieApiLink, options);
    const jsonData = await data.json();
    setSimilarData(jsonData.results);
    console.log(jsonData.results);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="w-[1280px] flex gap-[32px] flex-col">
      <MovieType title={"More like this"} />
      <div className="flex flex-wrap justify-between w-full  gap-[32px]">
        {similarData.map((movie) => {
          return (
            <div key={movie.id}>
              <MovieCard
                title={movie.title}
                rating={movie.vote_average.toFixed(1)}
                imageSrc={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                upcomingMovieId={movie.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
