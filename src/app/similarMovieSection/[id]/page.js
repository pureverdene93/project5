"use client";
import "../../index.css";
import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";
import { MovieCard } from "@/app/_features/MovieCard";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { MoreLikeThisSection } from "../_similarMoviesComponents/moreLikeThisSection";
import { MovieType } from "@/app/_features/MovieType";

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
//   },
// };

export default function Home() {
  //   const param = useParams();
  //   const { id } = param;
  //   console.log(id);

  //   const similarMovieApiLink = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;

  //   const getData = async () => {
  //     const data = await fetch(similarMovieApiLink, options);
  //     const jsonData = await data.json();
  //     console.log(jsonData);
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, [id]);

  return (
    <div className="back">
      <div className="flex flex-col gap-[56px] mb-[76px]">
        <Header />
        <MoreLikeThisSection />
      </div>
      <Footer />
    </div>
  );
}
