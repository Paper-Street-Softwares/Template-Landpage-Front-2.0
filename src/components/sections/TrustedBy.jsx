import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";

export default function TrustedBy() {
  return (
    <SectionArea className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Trabalhamos com os principais condomínios"
        sectionHeaderSubtitle="Confira as perguntas abaixo para esclarecer suas dúvidas. Estamos aqui para ajudar!"
      />
      <div className="flex-wrap bg-reg-800">
        <img src="" className="bg-red-200 w-[130px] h-[40px]" />
        <img src="" className="bg-red-200 w-[130px] h-[40px]" />
        <img src="" className="bg-red-200 w-[130px] h-[40px]" />
        <img src="" className="bg-red-200 w-[130px] h-[40px]" />
        <img src="" className="bg-red-200 w-[130px] h-[40px]" />
        <img src="" className="bg-red-200 w-[130px] h-[40px]" />
      </div>
    </SectionArea>
  );
}
