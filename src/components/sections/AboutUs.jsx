import SectionHeader from "../sectionElements/SectionHeader";
import ImagesGallery3Slides from "../interactives/ImagesGallery3Slides";
import slide1 from "../../assets/banners/aboutUs/slide1bigPool.jpg";
import slide2 from "../../assets/banners/aboutUs/slide2smallPool.jpg";
import slide3 from "../../assets/banners/aboutUs/slide3cleanWater.jpg";
import ArticleComponent from "../sectionElements/ArticleComponent";
import SectionArticle from "../sectionElements/SectionArticle";


export default function AboutUs() {
  return (
    <div className="font-mainFont py-[26px] phone3:py-[48px]">
      <SectionHeader
        sectionHeaderTitleSecond="Sobre nós"
        sectionHeaderDescription="A Mpa destaca-se no mercado pela excelência no atendimento personalizado e vasta experiência em piscinas de grandes volumes."
      />
      <ArticleComponent>
        <div className="desktop1:flex desktop1:items-center">
          <div className="desktop1:w-[50%] desktop3:w-[58%] desktop3:mt-[0%] desktop3:ml-[3%]">
            <SectionArticle
              articleSubtitle="Nossa História"
              articleTitle="Experiência em Grandes Volumes"
              articleParagraphfirst="A MPA é uma empresa familiar criada especialmente para oferecer um atendimento exclusivo e personalizado a proprietários de piscinas com grandes volumes de água, tais como piscinas olímpicas e semi olímpicas, entre outras. "
              articleParagraphTwo="A sua criação remonta ao ano de 2003, mas seus idealizadores são pessoas ligadas a esse segmento há pelo menos 45 anos, dessa forma, contam com vasta experiência no atendimento diferenciado que esse tipo de negócio exige."
              articleParagraphThree="A sua missão enquanto empresa é se aprimorar a cada dia que passa, subir degrau por degrau, avançar sempre no sentido de cumprir objetivos, entregar ao cliente exatamente o que com ele foi negociado na sua plenitude, e ao final de tudo ter a certeza de ter oferecido a ele uma boa experiência de compra. E para que tudo isso aconteça, a empresa tem a clara convicção de que precisa contar sempre com você, cliente! Junte-se à MPA Piscinas!"
            />
          </div>
          <div className="flex justify-center mt-[0%] w-[103.7%] phone2:w-[100.5%] phone3:w-[100.2%] phone3:mt-[5%] tablet1:size-[100.1%] tablet1:mt-[2%] tablet2:mt-[3%] desktop1:w-[50%] desktop1:mt-[8%]  desktop3:size-[60%] desktop3:w-[40%] desktop3:mt-[10%]">
            <ImagesGallery3Slides
              slide1={slide1}
              slide2={slide2}
              slide3={slide3}
            />
          </div>
        </div>
      </ArticleComponent>
    </div>
  );
}