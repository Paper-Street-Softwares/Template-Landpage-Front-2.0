import SectionHeader from "../sectionElements/SectionHeader";
import imgPastilhaCloro from "../../assets/imgs/avoidAccidents/pastilhaCloro.jpg";
import resgateAcidente from "../../assets/imgs/avoidAccidents/resgateAcidente.jpg";
import AcidentComponent from "../sectionElements/AcidentComponent";
import ArticleAcident from "../sectionElements/ArticleAcident";

export default function AboutUs() {
  return (
    <div>
      <div className="font-mainFont py-[26px] phone3:py-[48px] phone1:w-[100%]">
        <SectionHeader
          sectionHeaderTitleSecond="Evite Acidentes"
          sectionHeaderDescription="Nesta seção, abordaremos as práticas de segurança essenciais para o armazenamento e manuseio correto de produtos para sua piscina."
        />
        <div className="desktop1:mt-[5%]">
          <AcidentComponent>
            <div className=" desktop1:flex desktop1:flex-row-reverse desktop1: desktop1:justify-between">
              <div className="mb-[10%] tablet1:mb-[5%] desktop1:w-[50%]">
                <img
                  className="size-[100%] desktop1:size-[95%] desktop1:ml-[5%] desktop3:size-[94%] desktop3:ml-[6%]"
                  src={imgPastilhaCloro}
                />
              </div>
              <div className="desktop1:w-[48%] desktop3:w-[46%]">
                <ArticleAcident
                  articleSubtitle="Atenção"
                  articleTitle="Cuidados com o manuseio dos produtos"
                  articleParagraphOne="Os produtos que você vai utilizar na sua piscina devem ser armazenados de forma segura, longe do alcance de crianças e em lugar seco e ventilado."
                  articleParagraphTwo="Guarde sempre os produtos separadamente. Existem produtos que não são compatíveis uns com os outros e, se misturados, podem gerar gases nocivos à saúde e até incêndio, já que alguns são inflamáveis."
                  articleParagraphThree="Nunca reutilize embalagens vazias, mesmo depois de serem lavadas. Elas podem acabar sendo usadas por pessoas desavisadas, crianças e até animais, e isso pode causar grande desconforto e danos à saúde."
                />
              </div>
            </div>
          </AcidentComponent>
        </div>

        <div className=" desktop1:mt-[3%] desktop2:mt-[0%] desktop3:mt-[0%]">
          <AcidentComponent>
            <div className=" desktop1:flex desktop1:flex-row desktop1: desktop1:justify-between">
              <div className="mb-[10%] mt-[5%] phone2:mb-[5%] phone3:mb-[0%] tablet1:mt-[4%] tablet2:mb-[3%] desktop1:w-[65%] desktop1:mt-[0%] desktop3:w-[62%]">
                <img
                  className="size-[100%] desktop1:size-[90%] desktop3:size-[90%]"
                  src={resgateAcidente}
                />
              </div>
              <div className=" mt-[-4%] desktop1:w-[60%] desktop3:w-[55%] ">
                <ArticleAcident
                  articleParagraphOne="Utilize sempre um balde plástico pequeno para fazer a dissolução do cloro ou de outro produto em pó, como barrilha, sulfato de alumínio, elevador de alcalinidade, entre outros. Esse balde deverá sempre estar guardado em lugar seguro e não poderá ser utilizado para outros fins."
                  articleParagraphTwo="Tomando todos esses cuidados e outros relacionados à segurança da sua piscina, você garante uma diversão alegre e segura para todos os usuários, inclusive crianças e idosos. Boa diversão para todos!"
                />
              </div>
            </div>
          </AcidentComponent>
        </div>
      </div>
    </div>
  );
}
