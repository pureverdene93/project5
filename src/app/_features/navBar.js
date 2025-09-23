import { DownIcon } from "../_icons/downIcon";
import { SearchIcon } from "../_icons/searchIcon";

export const NavBar = () => {
  return (
    <div className="w-[1280px] h-[59px] flex flex-row justify-around items-center">
      <img src="Logo.png" alt="logo" className="w-[92px] h-[20px]" />
      <div className="flex gap-[12px]">
        <button className="flex items-center justify-center gap-[8px] w-[97px] h-[36px] text-black rounded-[5px] cursor-pointer text-[14px] border-1 border-zinc-200">
          <DownIcon />
          Genre
        </button>

        <div className="w-[379px] h-[36px] border  rounded-[5px] flex items-center justify-center">
          <SearchIcon />
          <input
            className="w-[341px] h-[36px] rounded-[5px] text-black pl-[10px] text-[14px] inline-block focus:outline-none"
            placeholder="Search.."
          />
        </div>
      </div>
      <button>
        <img
          src="Modes.png"
          alt="lightMode"
          className="w-[36px] h-[36px] cursor-pointer"
        />
      </button>
    </div>
  );
};
