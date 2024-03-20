import SectionHeader from "../sectionElements/SectionHeader";
import imgPastilhaCloro from "../../assets/imgs/avoidAccidents/pastilhaCloro.jpg";
import ResgateAcidente from "../../assets/imgs/avoidAccidents/ResgateAcidente.jpg";
import Article from "../sectionElements/SectionArticle";
import ArticleComponent from "../sectionElements/ArticleComponent";

export default function AvoidAccidents() {
  return (
    <div className="font-mainFont py-[26px] phone3:py-[48px]">
      <SectionHeader
        sectionHeaderTitleSecond="Evite acidentes"
        sectionHeaderDescription="Nesta seção, abordaremos as práticas de segurança essenciais para o armazenamento e manuseio correto de produtos para sua piscina."
      />

      <ArticleComponent>
        <div className="desktop1:flex desktop1:flex-row-reverse ">
          <div className="desktop1:w-[86.2%]">
            <img className="w-full desktop1:pt-[4%]" src={imgPastilhaCloro} />
          </div>
          <div className="desktop1:w-[100%]">
            <Article
              articleSubtitle="Atenção"
              articleTitle="Cuidados com o manuseio dos produtos"
              articleParagraphfirst="Os produtos que você vai utilizar na sua piscina devem ser armazenados de forma segura, longe do alcance de crianças e em lugar seco e ventilado"
              articleParagraphTwo="Guarde sempre os produtos separadamente. Existem produtos que não são compatíveis uns com os outros e, se misturados, podem gerar gases nocivos à saúde e até incêndio, já que alguns são inflamáveis."
              articleParagraphThree="Nunca reutilize embalagens vazias, mesmo depois de serem lavadas. Elas podem acabar sendo usadas por pessoas desavisadas, crianças e até animais, e isso pode causar grande desconforto e danos à saúde."
            />
          </div>
        </div>
      </ArticleComponent>
      <ArticleComponent>
        <div className="desktop1:flex desktop1:flex-row desktop1:gap-[5%] desktop1:w-[100%]">
          <div className="desktop1:w-[100%]">
            <img
              className="phone3:mb-[-5%] rounded-[5%] w-full"
              src={ResgateAcidente}
            />
          </div>
          <div className="desktop1:w-[120%] desktop1:relative desktop1:left-[4.5%] desktop1:mt-[-8%] desktop2:mt-[-6.5%] desktop2:w-[115%]">
            <Article
              articleParagraphTwo="Utilize sempre um balde plástico pequeno para fazer a dissolução do cloro ou de outro produto em pó, como barrilha, sulfato de alumínio, elevador de alcalinidade, entre outros. Esse balde deverá sempre estar guardado em lugar seguro e não poderá ser utilizado para outros fins."
              articleParagraphThree="Tomando todos esses cuidados e outros relacionados à segurança da sua piscina, você garante uma diversão alegre e segura para todos os usuários, inclusive crianças e idosos. Boa diversão para todos!"
            />
          </div>
        </div>
      </ArticleComponent>
    </div>
  );
}
