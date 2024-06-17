import React from "react";

export default function ButtonWithIcon({
  icon,
  label,
  onClick,
  link,
  className,
}) {
  return (
    <button
      onClick={onClick}
      className={`flex ${className} flex-row items-center justify-around transition rounded-[15px] px-[30px] py-[16px] bg-primary hover:bg-secondary text-secondary hover:text-primary hover:border-primary hover:border-solid border-[1px] border-primary`}
    >
      <a href={link} target="_blank">
        <div className="flex items-center text-center gap-[20px]">
          <div className="">{icon}</div>
          <p className="flex items-center text-paragraph4 font-mainFont">
            {label}
          </p>
        </div>
      </a>
    </button>
  );
}
