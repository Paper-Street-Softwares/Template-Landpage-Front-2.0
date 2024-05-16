import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";

export default function Faq() {
  return (
    <SectionArea className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Perguntas Frequentes"
        sectionHeaderSubtitle="Confira as perguntas abaixo para esclarecer suas dúvidas. Estamos aqui para ajudar!"
      />
      <SectionWrapper className="flex justify-center">
        <div className="w-[90%] tablet1:w-[80%] desktop1:w-[80%] max-w-[860px] h-[400px] bg-gray-300 mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]"></div>
        <MotionDivDownToUp>
          <Paragraphs>
            Para demais dúvidas,{" "}
            <a
              href="#"
              target="_blank"
              className="transition text-tertiary hover:underline"
            >
              {" "}
              clique aqui
            </a>
          </Paragraphs>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
