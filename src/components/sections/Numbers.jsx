import React, { useEffect, useState } from "react";
import imgOfficeGreenBackground from "../../assets/importAssets/bg2.jpg";
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
              icon={
                <Building size={32} strokeWidth={1} className="text-white" />
              }
              number={<AnimatedCounter endValue={yearsOfService} />}
              text="Anos de serviços prestados"
            />
            <ResultsCard
              icon={<Box size={32} strokeWidth={1} className="text-white" />}
              number={<AnimatedCounter endValue={1800} />}
              text="Quantidade de itens oferecidos"
            />
            <ResultsCard
              icon={
                <Handshake size={32} strokeWidth={1} className="text-white" />
              }
              number={<AnimatedCounter endValue={2400} />}
              text="Número de clientes atendidos anualmente"
            />
            <ResultsCard
              icon={<Truck size={32} strokeWidth={1} className="text-white" />}
              number={<AnimatedCounter endValue={8000} />}
              text="Capacidade de entregas diária em kilo/litro"
            />
          </h1>
        </div>
      </div>
    </div>
  );
}
