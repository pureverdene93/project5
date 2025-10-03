"use client";
import { RatingIconSmall } from "@/app/_icons/RatingIconSmall";

export const SimilarMovieCard = (props) => {
  const { imageSrc, rating, title } = props;
  return (
    <div className="w-[190px] h-[372px] bg-white rounded-[5px] flex flex-col gap-[8px]">
      <button className="cursor-pointer">
        <img
          src={imageSrc}
          alt="Image Not Found"
          className="object-cover w-full h-[281px] rounded-[5px]"
        />
      </button>
      <div className="ml-[8px] flex flex-col gap-[5px]">
        <p className="flex text-[14px] text-black items-center">
          <span className="mr-[5px]">
            <RatingIconSmall />
          </span>
          10 <span className="text-zinc-400 text-[13px] ">/{rating}</span>
        </p>
        <p className="text-black text-[14px] font-[350] ">{title}</p>
      </div>
    </div>
  );
};
