"use client";
import { useState } from "react";
import { useEffect } from "react";
import { MovieCard } from "@/app/_features/MovieCard";
import { Pre } from "@/app/seeMoreUpcoming/_icons/Pre";
import { Next } from "@/app/seeMoreUpcoming/_icons/Next";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const PopularMovieSection = (props) => {
  const [page, setPage] = useState(1);
  const ApiLink = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;

  const { title } = props;

  const [popularMovieData, setPopularMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [pagination, setPagination] = useState(false);

  const getData = async () => {
    setLoading(true);
    const data = await fetch(ApiLink, options);
    const jsonData = await data.json();
    setTotalPages(jsonData.total_pages);
    console.log("how many pages are in here", jsonData.total_pages);
    setPopularMovieData(jsonData.results);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [page]);
  // console.log("Upcoming movie data page 1", upcomingMovieData);
  // console.log("Upcoming movie data length", upcomingMovieData.length);
  // console.log(ApiLink.length);

  const nextPage = () => {
    setPage(page + 1);
  };
  const prePage = () => {
    if (page === 1) {
      setPage(page);
    }
    if (page > 1) {
      setPage(page - 1);
    }
    if (page === totalPages) {
      setPage(page);
    }
    if (page > 7) {
      setPagination(true);
    }
  };
  const pageNum = (num) => {
    setPage(num);
  };

  if (loading) {
    return <div className="text-black text-[100px]">...loading test</div>;
  }
  if (!loading && typeof popularMovieData === "undefined") {
    return <div className="text-black text-[100px]">Something wrong Test</div>;
  }
  return (
    <div className=" flex flex-col gap-[36px] justify-center items-center">
      <div className="w-[1275px]">
        <div className="flex items-center justify-between flex-row">
          <p className="text-black text-[24px] font-semibold">Popular</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-[32px] justify-center">
        {popularMovieData.map((movie, index) => {
          return (
            <MovieCard
              key={index}
              title={movie.title}
              rating={movie.vote_average.toFixed(1)}
              imageSrc={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              popularMovieId={movie.id}
            />
          );
        })}
      </div>
      <div className="flex flex-row items-center h-[40px] justify-end w-[1275px]">
        <button
          className="w-[114px] [h-40px] text-[16px] flex items-center justify-center cursor-pointer gap-[2px] text-black"
          onClick={prePage}
        >
          <Pre />
          Previous
        </button>
        <div className="flex flex-row gap-[5px]">
          {Array.from({ length: 10 }, (_, i) => {
            const num = i + 1;

            return (
              <button
                key={num}
                onClick={() => pageNum(num)}
                className={`px-3 py-1 cursor-pointer rounded-md ${
                  page === num ? "bg-black text-white" : "text-black border"
                }`}
              >
                {num}
              </button>
            );
          })}
        </div>

        <button
          className="w-[88px] h-[40px] text-[16px] flex items-center justify-center cursor-pointer gap-[2px] text-black"
          onClick={nextPage}
        >
          Next
          <Next />
        </button>
      </div>
    </div>
  );
};
