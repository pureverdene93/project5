import { SeeMore } from "../_icons/SeeMoreIcon";

export const MovieType = (props) => {
  const { titles } = props;
  return (
    <div className="w-[1277spx] h-[36px] flex items-center justify-around gap-[882] flex-row">
      <p className="text-black text-[24px] font-semibold">Upcoming</p>
      <button className="text-black flex items-center gap-[14px] cursor-pointer">
        See more <SeeMore />
      </button>
    </div>
  );
};
