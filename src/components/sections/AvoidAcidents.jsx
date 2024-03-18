import SectionHeader from "../sectionElements/SectionHeader";
import imgPastilhaCloro from "../../assets/imgs/avoidAccidents/pastilhaCloro.jpg";
import Article from "../sectionElements/SectionArticle";

export default function AvoidAccidents() {
  return (
    <div className="font-mainFont py-[26px] phone3:py-[48px]">
      <SectionHeader
        sectionHeaderTitleSecond="Evite acidentes"
        sectionHeaderDescription="Nesta seção, abordaremos as práticas de segurança essenciais para o armazenamento e manuseio correto de produtos para sua piscina."
      />
      <div>
      <div>
        <img className="pb-[3%] w-full" src={imgPastilhaCloro}/>
        <Article
          articleSubtitle="Atenção"
          articleTitle="Cuidados com o manuseio dos produtos"
          articleParagraphfirst="Os produtos que você vai utilizar na sua piscina devem ser armazenados de forma segura, longe do alcance de crianças e em lugar seco e ventilado."
          articleParagraphTwo="Guarde sempre os produtos separadamente. Existem produtos que não são compatíveis uns com os outros e, se misturados, podem gerar gases nocivos à saúde e até incêndio, já que alguns são inflamáveis."
        />
          <div className="mt-[-10%]">
            <Article
              articleParagraphfirst="Nunca reutilize embalagens vazias, mesmo depois de serem lavadas. Elas podem acabar sendo usadas por pessoas desavisadas, crianças e até animais, e isso pode causar grande desconforto e danos à saúde."
            />
          </div>
      </div>
      </div>
      
      
      
      
    </div>
  );
}
