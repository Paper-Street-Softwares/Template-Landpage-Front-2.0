import SectionHeader from "../sectionElements/SectionHeader";

export default function AboutUs() {
  return (
    <div className="font-mainFont text-quaternary">
      <SectionHeader
        sectionHeaderTitleFirst="Sobre nós"
        sectionHeaderDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      />
      <div className="container flex justify-between w-[100%]  items-center pt-[3%]">
        <div className="textos">
          <h3 class=' font-medium leading-[1.5rem] text-[1rem] tracking-[0rem] text-left'>Nossa História</h3>
          <h1 class='w-[100%] h-[22.5%] text-[1.875rem] font-medium leading-[45px] tracking-[0em] text-left text-indigo-900'>Experiência em Grandes Volumes</h1>
          <h5 class='w-[437px] h-[251px] size-14 font-normal leading-[21px] text-[0.875rem]'>A Mpa é uma empresa familiar criada especialmente para oferecer atendimento personalizado a proprietários de piscinas com grandes volumes de água. Sua criação remonta ao ano de 2003, embora seus idealizadores sejam pessoas ligadas a esse segmento e que contam com pelo menos 45 anos de experiência nesse tipo de atendimento. <span class='flex pt-[5%]'>Nossa missão como empresa é nos aprimorar a cada dia que passa, subir degrau por degrau, avançar no sentido de cumprir sempre nossos objetivos e para que isso aconteça, temos a clara consciência de que precisamos contar sempre com você, cliente. Junte-se a nós!</span></h5>
        </div>
        <div className="image-container">
          <img src="./src/assets/importAssets/piscina.png" alt="" />
        </div>
        
      </div>
    </div>
  );
}
