import { MovieCard } from "./MovieCard";
import { MovieType } from "./MovieType";
export const MovieSectionUpcoming = () => {
  return (
    <div>
      <MovieType />
      <div className="w-[1290px] h-[978px] flex flex-wrap gap-[32px] justify-center">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};
