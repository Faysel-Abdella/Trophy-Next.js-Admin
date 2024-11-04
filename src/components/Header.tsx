import React from "react";

const Header = ({
  buttonLabel,
  title,
  subtitle,
}: {
  buttonLabel: string;
  title: string;
  subtitle?: string;
}) => {
  return (
    <header>
      <div className="flex justify-end">
        <button className=" text-mainGray font-normal text-base text-right">
          {buttonLabel}
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <span className="text-mainGray font-normal text-base">
          {subtitle || ""}
        </span>
        <h2 className=" font-bold text-[30px] leading-[42px] text-mainBlack">
          {title}
        </h2>
      </div>
    </header>
  );
};

export default Header;
