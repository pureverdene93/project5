import { RatingIcon } from "../_icons/ratingIcon";
import { PlayBtn } from "../_icons/playbtn";
import { NextIcon } from "../_icons/nexticon";
export const HeroSLider = () => {
  return (
    <div className="w-full  relative z-[5] flex items-center justify-between h-[600px]">
      <img
        src="Feature (4).png"
        className="w-full h-[600px] object-cover absolute z-[-1]"
      />
      <div className="flex flex-col gap-[16px] ml-[140px]">
        <div className="flex flex-col ">
          <p className="text-[16px]">Now Playing:</p>
          <p className="text-[36px]">Wicked</p>
          <p className="flex items-center gap-[5px]">
            <RatingIcon /> 6.9 <span className="text-zinc-400">/10</span>
          </p>
        </div>
        <div className="flex flex-col gap-[16px] text-[14px]">
          <p className="w-[400px]">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.{" "}
          </p>
          <button className="w-[145px] h-[40px] flex items-center justify-evenly rounded-[5px] bg-white text-black text-[16px] cursor-pointer">
            <PlayBtn /> Watch Trailer
          </button>
        </div>
      </div>
      <button className="w-[40px] h-[40px] bg-white text-black rounded-[100%] flex items-center justify-center cursor-pointer mr-[44px]">
        <NextIcon />
      </button>
    </div>
  );
};
