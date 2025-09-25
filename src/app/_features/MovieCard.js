"use client";

import { RatingIconSmall } from "../_icons/RatingIconSmall";

export const MovieCard = (props) => {
  const { title, rating, imageSrc } = props;
  return (
    <div className="w-[230px] h-[439px] bg-white rounded-[5px] flex flex-col gap-[8px]">
      <button className="cursor-pointer">
        <img
          src={imageSrc}
          alt="haha"
          className="object-cover w-[230px] h-[340px] rounded-[5px]"
        />
      </button>
      <div className="ml-[8px] flex flex-col gap-[5px]">
        <p className="flex text-[14px] text-black items-center">
          <span className="mr-[5px]">
            <RatingIconSmall />{" "}
          </span>
          10 <span className="text-zinc-400 text-[13px] ">/{rating}</span>
        </p>
        <p className="text-black text-[16px] font-[350] ">{title}</p>
      </div>
    </div>
  );
};
