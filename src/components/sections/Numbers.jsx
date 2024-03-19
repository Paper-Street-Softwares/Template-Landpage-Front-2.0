import React, { useEffect, useState } from "react";
import imgOfficeGreenBackground from "../../assets/importAssets/bg2.jpg";
import imgIcon from "../../assets/importAssets/expertise.png";
import ResultsCard from "../cards/ResultsCard";
import AnimatedCounter from "../util/AnimatedCounter";

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
      className="bg-center bg-cover full"
      style={{
        backgroundImage: `url(${imgOfficeGreenBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className=" content">
        <div className="py-[26px] phone3:py-[48px]">
          <h1 className="flex flex-col items-center w-full tablet1:flex-row tablet1:justify-between tablet1:flex-wrap desktop1:flex-nowrap">
            <ResultsCard
              img={imgIcon}
              number={<AnimatedCounter endValue={yearsOfService} />}
              text="Anos de serviços prestados"
            />
            <ResultsCard
              img={imgIcon}
              number={<AnimatedCounter endValue={2000} />}
              text="Produtos no catálogo"
            />
            <ResultsCard
              img={imgIcon}
              number={<AnimatedCounter endValue={2700} />}
              text="Clientes cadastrados na base"
            />
            <ResultsCard
              img={imgIcon}
              number={<AnimatedCounter endValue={8} />}
              text="Toneladas em capacidade diária de transporte da frota"
            />
          </h1>
        </div>
      </div>
    </div>
  );
}
