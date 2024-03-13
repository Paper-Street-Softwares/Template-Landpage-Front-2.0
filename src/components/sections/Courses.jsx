import SectionHeader from "../sectionElements/SectionHeader";
import SectionContent from "../sectionElements/SectionContent";
import hthLogo from "../../assets/imgs/brands/hthLogo.png";
import gencoLogo from "../../assets/imgs/brands/gencoLogo.png";
import hidroazulLogo from "../../assets/imgs/brands/hidroazulLogo.png";

export default function Courses() {
  return (
    <div className="full">
      <div className="bg-quinary content py-[26px] phone3:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="Aprimore seu conhecimento"
          sectionHeaderDescription="Nesta seção, você será direcionado para agendar o curso ou palestra de forma espontânea, de acordo com seu interesse no aprendizado que o assunto desperta. Nosso objetivo é que você se sinta livre para escolher entre diferentes fabricantes, sem sentir que está sendo direcionado de forma alguma. Estamos aqui para apoiá-lo em sua jornada de conhecimento."
        />
        <SectionContent>
          <di>a</di>
        </SectionContent>
      </div>
    </div>
  );
}
