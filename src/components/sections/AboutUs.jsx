import SectionHeader from "../sectionElements/SectionHeader";
import ImagesGallery3Slides from "../interactives/ImagesGallery3Slides";
import slide1 from "../../assets/banners/aboutUs/slide1bigPool.jpg";
import slide2 from "../../assets/banners/aboutUs/slide2smallPool.jpg";
import slide3 from "../../assets/banners/aboutUs/slide3cleanWater.jpg";

export default function AboutUs() {
  return (
    <div
      className="font-mainFont py-[26px] phone3:py-[48px]"
      id="about"
    >
      <SectionHeader
        sectionHeaderTitleSecond="Sobre nós"
        sectionHeaderDescription="A MPA destaca-se no mercado pela excelência no atendimento personalizado e sua vasta experiência em piscinas com grandes volumes de água."
      />
      <div>
        <div className=" desktop1:flex desktop1:flex-row desktop1:justify-between desktop1:items-center">
          <div className=" desktop1:w-[41.4%] desktop3:w-[46.3%]">
            <h1 className=" flex items-center phone1:w-[100%] phone1:font-medium phone1:text-title2 phone1:leading-[33px] phone3:text-title5 phone3:leading-[54px] tablet1:text-title4 tablet1:leading-[45px] text-primary">
              Experiência em piscinas olímpicas e semiolímpicas
            </h1>
            <div className=" phone1:w-[100%] phone1:font-normal phone1:text-paragraph3 phone1:leading-[21px] text-quaternary desktop3:w-[84%]">
              <p className=" desktop3:mt-[2%]">
                A MPA é uma empresa familiar criada especialmente para oferecer
                um atendimento exclusivo e personalizado a proprietários de
                piscinas com grandes volumes de água, tais como piscinas
                olímpicas e semiolímpicas, entre outras. <br /><br />A sua criação
                remonta ao ano de 2003, mas seus idealizadores são pessoas
                ligadas a esse segmento há pelo menos 45 anos, dessa forma,
                contam com vasta experiência no atendimento diferenciado que
                esse tipo de negócio exige.
                <br /><br /> A sua missão enquanto empresa é se aprimorar a cada dia
                que passa, subir degrau por degrau, avançar sempre no sentido de
                cumprir objetivos, entregar ao cliente exatamente o que com ele
                foi negociado na sua plenitude, e ao final de tudo ter a certeza
                de ter oferecido a ele uma boa experiência de compra. E para que
                tudo isso aconteça, a empresa tem a clara convicção de que
                precisa contar sempre com você, cliente! Junte-se à MPA
                Piscinas!
              </p>
            </div>
          </div>
          <div className=" mt-[10%] tablet1:mt-[5%] desktop1:w-[50%] desktop3:w-[46.3%]">
            <div className="">
              <ImagesGallery3Slides
                slide1={slide1}
                slide2={slide2}
                slide3={slide3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
