import imgOfficeGreenBackground from "../../assets/importAssets/bg2.jpg";
import imgIcon from "../../assets/importAssets/expertise.png";
import ResultsCard from "../cards/ResultsCard";
import AnimatedCounter from "../util/AnimatedCounter";

export default function Numbers() {
  return (
    <div
      className="bg-center bg-cover full"
      style={{
        backgroundImage: `url(${imgOfficeGreenBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-blue-900 content">
        <div className="py-[26px] phone3:py-[48px] bg-green-900">
          <h1 className="flex flex-col items-center bg-red-900 tablet1:w-full tablet1:flex-row tablet1:justify-evenly tablet1:flex-wrap desktop1:flex-nowrap">
            <ResultsCard
              img={imgIcon}
              number={<AnimatedCounter endValue={40} />}
              text="Anos de serviços prestados."
            />
            <ResultsCard
              img={imgIcon}
              number={<AnimatedCounter endValue={85} />}
              text="Empresas abertas anualmente."
            />
            <ResultsCard
              img={imgIcon}
              number={<AnimatedCounter endValue={650} />}
              text="Impostos de Renda feitos anualmente."
            />
            <ResultsCard
              img={imgIcon}
              number={<AnimatedCounter endValue={208} />}
              text="Empresas atendidas mensalmente."
            />
          </h1>
        </div>
      </div>
    </div>
  );
}
