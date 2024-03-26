import SectionHeader from "../sectionElements/SectionHeader";
import imgPastilhaCloro from "../../assets/imgs/avoidAccidents/pastilhaCloro.jpg";
import resgateAcidente from "../../assets/imgs/avoidAccidents/resgateAcidente.jpg";
import AcidentComponent from "../sectionElements/AcidentComponent";
import ArticleAcident from "../sectionElements/ArticleAcident";

export default function AboutUs() {
  return (
    <div className="">
      <div className="font-mainFont py-[26px] phone1:w-[100%] phone2:py-[48px]">
        <SectionHeader
          sectionHeaderTitleSecond="Evite Acidentes"
          sectionHeaderDescription="Nesta seção, abordaremos as práticas de segurança essenciais para o armazenamento e manuseio correto de produtos para sua piscina."
        />
        <div className=" desktop1:mt-[-5%]">
          <AcidentComponent>
            <div className="desktop1:flex desktop1:flex-row-reverse desktop1:justify-between desktop1:py-[48px] ">
              <div className="mb-[5%] tablet1:mb-[5%] desktop1:w-[48%] desktop1:mb-[0%] desktop3:w-[46%]">
                <img
                  className=" size-[100%] desktop1:size-auto"
                  src={imgPastilhaCloro}
                />
              </div>
              <div className=" desktop1:w-[48%] desktop3:w-[46.3%]">
                <ArticleAcident
                
                  articleTitle="Cuidados com o manuseio dos produtos"
                  articleParagraphOne="Os produtos que você vai utilizar na sua piscina devem ser armazenados de forma segura, longe do alcance de crianças e em lugar seco e ventilado."
                  articleParagraphTwo="Guarde sempre os produtos separadamente. Existem produtos que não são compatíveis uns com os outros e, se misturados, podem gerar gases nocivos à saúde e até incêndio, já que alguns são inflamáveis."
                  articleParagraphThree="Nunca reutilize embalagens vazias, mesmo depois de serem lavadas. Elas podem acabar sendo usadas por pessoas desavisadas, crianças e até animais, e isso pode causar grande desconforto e danos à saúde."
                />
              </div>
            </div>
          </AcidentComponent>
        </div>

        <div className="">
          <AcidentComponent>
            <div className=" desktop1:flex desktop1:flex-row desktop1:justify-between">
              <div className="mb-[10%] mt-[5%] phone2:mb-[5%] phone3:mb-[0%] tablet1:mt-[4%] tablet1:mb-[-3%] tablet2:mb-[3%] desktop1:mb-[0%] desktop1:mt-[0%] desktop1:w-[48.5%] desktop2:w-[47%]">
                <img
                  className="size-[100%] "
                  src={resgateAcidente}
                />
              </div>
              <div className=" flex flex-col mt-[-4%] phone3:mt-[3%] desktop1:w-[48%] desktop1:mt-[-1%] desktop3:w-[46%] ">
                <div className=" desktop3:flex desktop3:w-[100%]">
                  <ArticleAcident
                    articleParagraphOne="Utilize sempre um balde plástico pequeno para fazer a dissolução do cloro ou de outro produto em pó, como barrilha, sulfato de alumínio, elevador de alcalinidade, entre outros. Esse balde deverá sempre estar guardado em lugar seguro e não poderá ser utilizado para outros fins."
                    articleParagraphTwo="Tomando todos esses cuidados e outros relacionados à segurança da sua piscina, você garante uma diversão alegre e segura para todos os usuários, inclusive crianças e idosos. Boa diversão para todos!"
                  />
                </div>
              </div>
            </div>
          </AcidentComponent>
        </div>
      </div>
    </div>
  );
}
