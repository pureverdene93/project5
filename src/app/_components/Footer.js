import { LogoIcon } from "../_icons/LogoIcon";
import { EmailIcon } from "../_icons/EmailIcon";
import { PhoneIcon } from "../_icons/PhoneIcon";

export const Footer = () => {
  return (
    <div className="w-full h-[280px] bg-indigo-700 flex items-center justify-around">
      <div className="w-[247px] h-[130px] flex justify-start items-start flex-col gap-[8px]">
        <LogoIcon />
        <p className="text-white text-[14px] ">
          {"© 2024 Movie Z. All Rights Reserved."}
        </p>
      </div>
      <div className="flex flex-row gap-[96px]">
        <div className="flex flex-col gap-[24px]">
          <div>
            <p>Contact Information</p>
            <div className="flex items-center gap-[12px]">
              <EmailIcon />
              <p className="w-[20px]">Email: support@movieZ.com</p>
            </div>
          </div>
          <div className="flex items-center gap-[12px]">
            <PhoneIcon />
            <p>
              Phone:
              <br /> +976 (11) 123-4567
            </p>
          </div>
        </div>
        <div className="flex gap-[12px] flex-col">
          <p>Follow Us</p>
          <div className="flex gap-[12px]">
            <button className="font-medium text-[15px] cursor-pointer">
              Facebook
            </button>
            <button className="font-medium text-[15px] cursor-pointer">
              Instagram
            </button>
            <button className="font-medium text-[15px] cursor-pointer">
              Twitter
            </button>
            <button className="font-medium text-[15px] cursor-pointer">
              Youtube
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
