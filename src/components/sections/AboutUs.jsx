import SectionHeader from "../sectionElements/SectionHeader";

export default function AboutUs() {
  return (
    <div className="font-mainFont">
      <SectionHeader
        sectionHeaderTitleFirst="Sobre nós"
        sectionHeaderDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      />
      <div className= "Caixa flex w-full justify-between items-center phone1:flex-col desktop1:flex-row">
        <div className="textos w-full h-full phone1:w-[292px] phone1:h-[506px] phone1:gap-[10px] phone2:w-[331px] phone2:h-[464px] phone2:gap-[10px] phone3:w-[375px] phone3:h-[560px] phone3:gap-[10px] tablet1:w-[564px] tablet1:h-[299px] tablet1:gap-[10px] tablet2:w-[676px] tablet2:h-[297px] tablet2:gap-[10px] desktop1:w-[297px] desktop1:h-[404px] desktop1:gap-[10px] desktop2:w-[512px] desktop2:h-[340px] desktop2:gap-[10px] ">
          <h3 className='texto-h3 phone1:font-medium phone1:text-paragraph3 phone1:leading-[21px] phone3:text-paragraph4 phone3:leading-[24px] tablet1:font-medium '>Nossa História</h3>
          <h1 className='texto-h1 phone1:font-medium phone1:text-title2 phone1:leading-[33px] phone1:text-primary phone3:text-title5 phone3:leading-[54px] tablet1:font-medium tablet1:text-title4 tablet1:leading-[45px]'>Experiência em Grandes Volumes</h1>
          <h5 className='texto-h5 phone1:font-normal phone1:text-paragraph3 phone1:leading-[21px] phone3:text-paragraph4 phone3:leading-[24px] tablet1:text-paragraph3 tablet1:leading-[21px] desktop1:text-paragraph2 desktop1:leading-[18px] desktop2:text-paragraph3 desktop2:leading-[21px]'>A Mpa é uma empresa familiar criada especialmente para oferecer atendimento personalizado a proprietários de piscinas com grandes volumes de água. Sua criação remonta ao ano de 2003, embora seus idealizadores sejam pessoas ligadas a esse segmento e que contam com pelo menos 45 anos de experiência nesse tipo de atendimento. <span class='flex pt-[5%]'>Nossa missão como empresa é nos aprimorar a cada dia que passa, subir degrau por degrau, avançar no sentido de cumprir sempre nossos objetivos e para que isso aconteça, temos a clara consciência de que precisamos contar sempre com você, cliente. Junte-se a nós!</span></h5>
        </div>
        <div className="image-container flex justify-center phone1:w-[292px] phone1:h-[195px] phone2:w-[331px] phone2:h-[228px] phone3:w-[375px] phone3:h-[258px] tablet1:w-[564px] tablet1:h-[388px] tablet2:w-[676px] tablet2:h-[465px] desktop1:w-[507px] desktop1:h-[363px]">
          <img className="img phone1:size-[100%] tablet1:size-[100%]" src="./src/assets/importAssets/piscina.png" alt="" />
        </div>
      </div>
    </div>
  );
}
