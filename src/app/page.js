import { NavBar } from "./_features/navBar";
import { MovieType } from "./_features/MovieType";
import { HeroSLider } from "./_components/HeroSlider";
import { MovieCard } from "./_features/MovieCard";
import { MovieSectionUpcoming } from "./_features/MovieSection";
import "./index.css";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <div className="back">
      <NavBar />
      <HeroSLider />
      <MovieSectionUpcoming />
      <MovieSectionUpcoming />
      <MovieSectionUpcoming />
      <Footer />
    </div>
  );
}
