"use client";
import "../../index.css";
import { useEffect } from "react";
import { useState } from "react";
import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";
import { useParams } from "next/navigation";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export default function Home() {
  const param = useParams();
  const { id } = param;
  if (!id) {
    return <p className="text-[100px]">Something went Wrong</p>;
  }
  // console.log("this is params", param);

  const ApiLink = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const [movieDetail, setMovieDetail] = useState({});

  const getData = async () => {
    const data = await fetch(ApiLink, options);
    const jsonData = await data.json();
    setMovieDetail(jsonData);
    console.log("this is movie detail", jsonData);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="back h-[1880px]">
      <Header />
      <div className="w-[1080px] h-[72px] flex items-center justify-between">
        <div>
          <p className="text-black font-[700] text-[36px]">
            {movieDetail.title}
          </p>
          <p className="text-black">
            {movieDetail.release_date} {movieDetail.runtime}
          </p>
        </div>
        <div>
          <p className="text-black">Rating</p>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
