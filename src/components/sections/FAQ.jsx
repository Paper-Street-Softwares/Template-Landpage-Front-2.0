import Acordion from "../interactives/Acordion";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import faqImg from "../../assets/imgs/faq/faq.png";
import SectionHeader from "../sectionElements/SectionHeader";

export default function FAQ() {
  return (
    <div>
      <SectionHeader
        sectionHeaderTitleSecond="Perguntas Frequentes"
        sectionHeaderDescription="Ficou com alguma dúvida? Clique na pergunta abaixo e obtenha a resposta. 
        Caso não tenha encontrado a resposta que precisa, entre em contato conosco e iremos te esclarecer."
      />
      <div className="flex justify-between ">
        <div className="w-full desktop1:w-[60%] desktop2:w-[63%]">
          <Acordion />
        </div>
        <div className="hidden desktop1:block">
          <MotionDivRightToLeft>
            <img src={faqImg} alt="Faq Img"></img>
          </MotionDivRightToLeft>
        </div>
      </div>
    </div>
  );
}
