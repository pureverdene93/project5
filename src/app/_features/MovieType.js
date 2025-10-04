import { SeeMore } from "../_icons/SeeMoreIcon";

export const MovieType = (props) => {
  const { title } = props;
  return (
    <div className="flex items-center justify-between flex-row">
      <p className="text-black text-[24px] font-semibold">{title}</p>
    </div>
  );
};
