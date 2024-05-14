import React, { useEffect, useState } from "react";
import imgOfficeGreenBackground from "../../assets/imgs/paralaxe/bgDarkHouse.webp";
import ResultsCard from "../cards/ResultsCard";
import AnimatedCounter from "../util/AnimatedCounter";
import { Handshake, Building, Box, Truck } from "lucide-react";

export default function Numbers() {
  const [yearsOfService, setYearsOfService] = useState(0);

  useEffect(() => {
    const startDate = new Date("2003-01-01");
    const currentDate = new Date();
    const differenceInYears =
      currentDate.getFullYear() - startDate.getFullYear();

    if (
      currentDate.getMonth() < startDate.getMonth() ||
      (currentDate.getMonth() === startDate.getMonth() &&
        currentDate.getDate() < startDate.getDate())
    ) {
      setYearsOfService(differenceInYears - 1);
    } else {
      setYearsOfService(differenceInYears);
    }
  }, []);

  return (
    <div
      className="flex justify-center bg-center bg-cover h-[300px]"
      style={{
        backgroundImage: `url(${imgOfficeGreenBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-[90%] max-w-[1215px] flex justify-between items-center py-[40px] tablet1:py-[64px] desktop1:py-[96px] text-white">
        <div className="flex flex-col items-center desktop1:w-[30%]">
          <h1 className="text-[72px] font-mainFont leading-[76px] font-bold">
            18
          </h1>
          <p className="font-secondFont text-title1 tablet1:text-title3">
            Anos de experiência
          </p>
        </div>
        <div className="flex flex-col items-center desktop1:w-[30%]">
          <h1 className="text-[72px] font-mainFont leading-[76px] font-bold">
            18
          </h1>
          <p className="font-secondFont text-title1 tablet1:text-title3">
            Anos de experiência
          </p>
        </div>
        <div className="flex flex-col items-center desktop1:w-[30%]">
          <h1 className="text-[72px] font-mainFont leading-[76px] font-bold">
            18
          </h1>
          <p className="font-secondFont text-title1 tablet1:text-title3">
            Anos de experiência
          </p>
        </div>
      </div>
    </div>
  );
}
