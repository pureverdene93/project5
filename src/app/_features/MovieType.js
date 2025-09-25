import { SeeMore } from "../_icons/SeeMoreIcon";

export const MovieType = (props) => {
  const { title, seeMore } = props;
  return (
    <div className="flex items-center justify-between flex-row">
      <p className="text-black text-[24px] font-semibold">{title}</p>
      <button
        className="text-black flex items-center gap-[14px] cursor-pointer"
        // onClick={seeMore}
      >
        See more <SeeMore />
      </button>
    </div>
  );
};
