import SectionHeader from "../sectionElements/SectionHeader";

export default function AboutUs() {
  return (
    <div className="font-mainFont text-quaternary">
      <SectionHeader
        sectionHeaderTitleFirst="Sobre nós"
        sectionHeaderDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      />
      <div className= "Caixa w-[100%] flex items-center desktop2:justify-between desktop2:items-center desktop2:pt-[3%] phone1:min-w-full phone1:flex-col">
        <div className="textos phone1:w-full phone1:h-full flex flex-col">
          <h3 className='texto-h3 flex desktop2:font-medium desktop2:leading-[24px] desktop2:text-paragraph4 phone1:w-[292px] phone1:h-[21px] phone1:font-mainFont phone1:font-medium phone1:size-paragraph3 phone1:leading[21px] phone2:font-medium phone2:text-paragraph3'>Nossa História</h3>
          <h1 className='texto-h1 flex desktop2:h-[45px] desktop2:text-title4 desktop2:font-medium desktop2:leading-[45px] desktop2:tracking-[0em] desktop3:text-left desktop3:text-primary phone1:w-full phone1:h-[66%] phone1:font-mainFont phone1:font-medium phone1:text-title2 phone1:leading-[33px] phone2:font-medium phone1:text-primary'>Experiência em Grandes Volumes</h1>
          <h5 className='texto-h5 flex flex-col desktop2:w-[437px] desktop2:h-[251px] desktop2:size-14 desktop2:font-normal desktop2:leading-[21px] desktop2:text-paragraph3 phone1:w-full phone1:h-[399px] phone1:font-mainFont phone1:font-normal phone1:text-paragraph3 phone1:leading-[21px] phone2:font-normal phone2:leading-[21px] '>A Mpa é uma empresa familiar criada especialmente para oferecer atendimento personalizado a proprietários de piscinas com grandes volumes de água. Sua criação remonta ao ano de 2003, embora seus idealizadores sejam pessoas ligadas a esse segmento e que contam com pelo menos 45 anos de experiência nesse tipo de atendimento. <span class='flex pt-[5%]'>Nossa missão como empresa é nos aprimorar a cada dia que passa, subir degrau por degrau, avançar no sentido de cumprir sempre nossos objetivos e para que isso aconteça, temos a clara consciência de que precisamos contar sempre com você, cliente. Junte-se a nós!</span></h5>
        </div>
        <div className="image-container phone1:w-[292px] phone1:h-[195px] phone2:w-[331px] phone2:h-[228px]">
          <img src="./src/assets/importAssets/piscina.png" alt="" />
        </div>
        
      </div>
    </div>
  );
}
