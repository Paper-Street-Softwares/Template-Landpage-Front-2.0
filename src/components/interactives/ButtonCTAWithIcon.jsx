import React from "react";

export default function ButtonCTAWithIcon({
  icon,
  label,
  onClick,
  buttonLink,
}) {
  return (
    <a href={buttonLink} target="_blank">
      <button
        onClick={onClick}
        className={`flex flex-row items-center justify-around transition rounded-[15px] px-[30px] py-[16px] bg-primary hover:bg-secondary hover:text-primary text-secondary hover:text-bg-yellow-400 hover:border-bg-yellow-400 hover:border-solid border-[1px] border-primary hover:border-secondary`}
      >
        <div className="flex items-center text-center gap-[20px]">
          <div className="">{icon}</div>
          <p className="flex items-center text-paragraph4 font-mainFont">
            {label}
          </p>
        </div>
      </button>
    </a>
  );
}
