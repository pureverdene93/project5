import { LogoIcon } from "../_icons/LogoIcon";
import { EmailIcon } from "../_icons/EmailIcon";
import { PhoneIcon } from "../_icons/PhoneIcon";

export const Footer = () => {
  return (
    <div className="w-full h-[280px] bg-indigo-700">
      <div className="w-[247px] h-[200px] flex justify-start items-start flex-col gap-[8px]">
        <LogoIcon />
        <p className="text-white text-[14px] ">
          {"© 2024 Movie Z. All Rights Reserved."}
        </p>
      </div>
      <div>
        <p>Contact Information</p>
        <EmailIcon />
        <p className="w-[20px]">Email: support@movieZ.com</p>
      </div>
    </div>
  );
};
