import ButtonWithIcone from "../interactives/ButtonWithIcon";
import bgImgCard from "../../assets/imgs/hero/bgHero.webp";

export default function FeatureCard() {
  return (
    <div className="bg-white p-[36px] rounded-2xl desktop1:w-[30%] flex flex-col tablet1:flex-row gap-[36px] desktop1:flex-col w-full">
      <img
        src={bgImgCard}
        alt=""
        className="tablet1:w-[50%] desktop1:w-full h-auto rounded-2xl"
      />
      <div className="">
        <h1 className="font-mainFont text-[32px] leading-[36px] mb-[16px]">
          Aquisição e Locação
        </h1>
        <p className="font-secondFont text-paragraph4 mb-[36px] text-quaternary">
          Nosso seguro automotivo abrangente garante sua proteção e
          tranquilidade em cada viagem.
        </p>
        <ButtonWithIcone label="Saiba mais" />
      </div>
    </div>
  );
}
