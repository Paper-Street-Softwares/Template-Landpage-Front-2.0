import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";

export default function TrustedBy() {
  return (
    <SectionArea className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Trabalhamos com os principais condomínios"
        sectionHeaderSubtitle="Confira as perguntas abaixo para esclarecer suas dúvidas. Estamos aqui para ajudar!"
      />
      <SectionWrapper>
        <div className="flex flex-wrap justify-between w-full gap-[20px] tablet1:gap-[24px] desktop1:gap-0">
          <img
            src=""
            className="bg-gray-300 w-[45%] max-h-[50px] tablet1:w-[30%] desktop1:w-[15%]"
          />
          <img
            src=""
            className="bg-gray-300 w-[45%] max-h-[50px] tablet1:w-[30%] desktop1:w-[15%]"
          />
          <img
            src=""
            className="bg-gray-300 w-[45%] max-h-[50px] tablet1:w-[30%] desktop1:w-[15%]"
          />
          <img
            src=""
            className="bg-gray-300 w-[45%] max-h-[50px] tablet1:w-[30%] desktop1:w-[15%]"
          />
          <img
            src=""
            className="bg-gray-300 w-[45%] max-h-[50px] tablet1:w-[30%] desktop1:w-[15%]"
          />
          <img
            src=""
            className="bg-gray-300 w-[45%] max-h-[50px] tablet1:w-[30%] desktop1:w-[15%]"
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
