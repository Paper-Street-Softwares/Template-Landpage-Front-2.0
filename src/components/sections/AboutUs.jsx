import SectionHeader from "../sectionElements/SectionHeader";

export default function AboutUs() {
  return (
    <div className="font-mainFont text-quaternary">
      <SectionHeader
        sectionHeaderTitleFirst="Sobre nós"
        sectionHeaderDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      />
      <div className= "container desktop3:flex desktop3:justify-between desktop3:w-[100%] desktop3:items-center desktop3:pt-[3%] phone1:min-w-full">
        <div className="textos phone1:w-full phone1:h-full phone1:border-[1]">
          <h3 className='texto-h3 desktop3:font-mainFont desktop3:font-medium desktop3:leading-[1.5rem] desktop3:text-paragraph4 desktop3:tracking-[0rem] desktop3:text-left phone1:w-full phone1:h-[21%] phone1:font-mainFont phone1:font-medium phone1:size-paragraph3 phone1:leading[21%] '>Nossa História</h3>
          <h1 className='texto-h1 desktop3:font-mainFont desktop3:w-[100%] desktop3:h-[22.5%] desktop3:text-title4 desktop3:font-medium desktop3:leading-[45px] desktop3:tracking-[0em] desktop3:text-left desktop3:text-indigo-900 phone1:w-full phone1:h-[66%] phone1:font-mainFont phone1:font-medium phone1:text-title2 phone1:leading-[33px] phone1:text-indigo-900'>Experiência em Grandes Volumes</h1>
          <h5 className='texto-h5 desktop3:font-mainFont  desktop3:w-[437px] desktop3:h-[251px] desktop3:size-14 desktop3:font-normal desktop3:leading-[21px] desktop3:text-paragraph3 phone1:w-full phone1:h-[399px] phone1:font-mainFont phone1:font-normal phone1:text-paragraph3 phone1:leading-[21px]'>A Mpa é uma empresa familiar criada especialmente para oferecer atendimento personalizado a proprietários de piscinas com grandes volumes de água. Sua criação remonta ao ano de 2003, embora seus idealizadores sejam pessoas ligadas a esse segmento e que contam com pelo menos 45 anos de experiência nesse tipo de atendimento. <span class='flex pt-[5%]'>Nossa missão como empresa é nos aprimorar a cada dia que passa, subir degrau por degrau, avançar no sentido de cumprir sempre nossos objetivos e para que isso aconteça, temos a clara consciência de que precisamos contar sempre com você, cliente. Junte-se a nós!</span></h5>
        </div>
        <div className="image-container">
          <img src="./src/assets/importAssets/piscina.png" alt="" />
        </div>
        
      </div>
    </div>
  );
}
