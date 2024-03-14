import SectionHeader from "../sectionElements/SectionHeader";
import imgPastilhaCloro from "../../assets/imgs/avoidAccidents/pastilhaCloro.jpg";

export default function AvoidAccidents() {
  return (
    <div className="font-mainFont py-[26px] phone3:py-[48px]">
      <SectionHeader
        sectionHeaderTitleSecond="Evite acidentes"
        sectionHeaderDescription="Nesta seção, abordaremos as práticas de segurança essenciais para o armazenamento e manuseio correto de produtos para sua piscina."
      />
      <div className="flex w-100% justify-between items-center flex-col desktop1:flex-row phone1:pt-[5%] ">
        <div className=" w-[100%] gap-[10%] desktop1:w-[32%] desktop2:w-[47%] desktop3:w-[60%]">
          <h3 className="pb-[3%] text-quaternary font-medium text-paragraph3 leading-[24%] phone3:pb-[2%] phone3:text-paragraph4 phone3:leading-[27%] desktop1:pb-[3%] ">
            Atenção
          </h3>
          <h1 className="font-medium text-title2 leading-[150%] text-primary phone3:text-title5 tablet1:font-medium tablet1:text-title4">
            Cuidado com o manuseio dos produtos
          </h1>
          <p className="text-quaternary font-normal text-paragraph3 leading-[150%] phone3:text-paragraph4 tablet1:text-paragraph3 desktop1:text-paragraph2 desktop2:text-paragraph3 desktop3:size-[79%]">
            A Mpa é uma empresa familiar criada especialmente para oferecer
            atendimento personalizado a proprietários de piscinas com grandes
            volumes de água. Sua criação remonta ao ano de 2003, embora seus
            idealizadores sejam pessoas ligadas a esse segmento e que contam com
            pelo menos 45 anos de experiência nesse tipo de atendimento.{" "}
            <span className="flex pt-[5%]">
              Nossa missão como empresa é nos aprimorar a cada dia que passa,
              subir degrau por degrau, avançar no sentido de cumprir sempre
              nossos objetivos e para que isso aconteça, temos a clara
              consciência de que precisamos contar sempre com você, cliente.
              Junte-se a nós!
            </span>
          </p>
        </div>
        <div className="flex justify-center pt-[8%] phone1:w-[100%] phone3:pt-[5%] tablet1:pt-[4%] tablet2:pt-[1%] desktop1:w-[55%] desktop2:w-[40%] desktop3:size-[60%]">
          <img src={imgPastilhaCloro} alt="pastilha de cloro" />
        </div>
      </div>
    </div>
  );
}
