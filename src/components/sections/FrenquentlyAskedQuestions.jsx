import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import SectionHeader from "../sectionElements/SectionHeader";
import Acordion from "../interactives/Acordion";
import faqImg from "../../assets/imgs/faq/faq.png";

export default function FrequentlyAskedQuestions() {
  return (
    <div className="full">
      <div className="bg-quinary content py-[26px] phone3:py-[48px]">
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
    </div>
  );
}
