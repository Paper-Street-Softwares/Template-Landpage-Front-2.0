import SectionHeader from "../sectionElements/SectionHeader";

export default function AboutUs() {
  return (
    <div className="font-mainFont">
      <SectionHeader
        sectionHeaderTitleFirst="Sobre nós"
        sectionHeaderDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      />
      <div className= "Caixa flex w-full justify-between items-center phone1:flex-col desktop1:flex-row phone1:pt-[5%] tablet1:pt-[5%]">
        <div className="textos w-100% h-100% phone1:w-[100%] phone1:h-[100%] phone1:gap-[10%] phone2:w-[100%] phone2:h-[100%] phone2:gap-[10%] phone3:w-[100%] phone3:h-[100%] phone3:gap-[10%] tablet1:w-[100%] tablet1:h-[100%] tablet1:gap-[10%] tablet2:w-[100%] tablet2:h-[100%] tablet2:gap-[10%] desktop1:w-[32%] desktop1:h-[100%] desktop1:gap-[10%] desktop2:w-[47%] desktop2:h-[100%] desktop2:gap-[10%] ">
          <h3 className='texto-h3 phone1:font-medium phone1:text-paragraph3 phone1:leading-[24%] phone3:text-paragraph4 phone3:leading-[27%] tablet1:font-medium '>Nossa História</h3>
          <h1 className='texto-h1 phone1:font-medium phone1:text-title2 phone1:leading-[150%] phone1:text-primary phone3:text-title5 phone3:leading-[150%] tablet1:font-medium tablet1:text-title4 tablet1:leading-[150%]'>Experiência em Grandes Volumes</h1>
          <h5 className='texto-h5 phone1:font-normal phone1:text-paragraph3 phone1:leading-[150%] phone3:text-paragraph4 phone3:leading-[150%] tablet1:text-paragraph3 tablet1:leading-[150%] desktop1:text-paragraph2 desktop1:leading-[150%] desktop2:text-paragraph3 desktop2:leading-[150%]'>A Mpa é uma empresa familiar criada especialmente para oferecer atendimento personalizado a proprietários de piscinas com grandes volumes de água. Sua criação remonta ao ano de 2003, embora seus idealizadores sejam pessoas ligadas a esse segmento e que contam com pelo menos 45 anos de experiência nesse tipo de atendimento. <span class='flex pt-[5%]'>Nossa missão como empresa é nos aprimorar a cada dia que passa, subir degrau por degrau, avançar no sentido de cumprir sempre nossos objetivos e para que isso aconteça, temos a clara consciência de que precisamos contar sempre com você, cliente. Junte-se a nós!</span></h5>
        </div>
        <div className="image-container flex justify-center phone1:pt-[10%] phone1:w-[100%] phone1:h-[100%] phone2:w-[100%] phone2:h-[100%] phone3:pt-[15%] phone3:w-[100%] phone3:h-[100%] tablet1:pt-[8%] tablet1:w-[100%] tablet1:h-[100%] tablet2:pt-[8%] tablet2:w-[100%] tablet2:h-[100%] desktop1:pt-[2%] desktop1:w-[50%] desktop1:h-[100%] desktop2:w-[40%] desktop2:h-[100%]">
          <img className="img phone1:size-[100%] tablet1:size-[100%]" src="./src/assets/importAssets/piscina.png" alt="" />
        </div>
      </div>
    </div>
  );
}
