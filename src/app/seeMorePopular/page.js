"use client";
import "../index.css";
import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { PopularMovieSection } from "./_components/PopularMovieSection";

export default function Home() {
  return (
    <>
      <div className="back">
        <div className="flex flex-col gap-[52px] items-center">
          <Header />
          <PopularMovieSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
