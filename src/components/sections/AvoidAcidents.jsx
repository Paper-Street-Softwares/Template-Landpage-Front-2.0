import SectionHeader from "../sectionElements/SectionHeader";
import imgPastilhaCloro from "../../assets/imgs/avoidAccidents/pastilhaCloro.jpg";
import resgateAcidente from "../../assets/imgs/avoidAccidents/resgateAcidente.jpg";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";

export default function AboutUs() {
  return (
    <div className="">
      <div className="font-mainFont phone1:w-[100%] pb-[8px] phone1:pt-[48px] tablet1:pb-0">
        <SectionHeader
          sectionHeaderTitleSecond="Evite Acidentes"
          sectionHeaderDescription="Conheça regras básicas de segurança e armazenamento de produtos químicos em geral."
        />
        <div className=" desktop1:flex desktop1:flex-row-reverse desktop1:justify-between desktop1:py-[54px] desktop3:py-[48px]">
          <div className=" pb-[28px] desktop1:w-[48%] desktop1:py-0 desktop3:w-[46.3%]">
            <MotionDivRightToLeft>
              <img
                className="size-[100%] desktop1:size-auto desktop3:"
                src={imgPastilhaCloro}
                alt="mão segurando produto"
              />
            </MotionDivRightToLeft>
          </div>
          <div className="desktop1:w-[48.5%] desktop3:w-[46.3%]">
            <MotionDivLeftToRight>
              <h1 className="  text-primary flex items-center phone1:w-[100%] phone1:font-medium phone1:text-title2 phone3:text-title2 phone1:pb-[10px] tablet1:text-title2 desktop1:text-title4">
                Cuidados com o manuseio dos produtos
              </h1>
              <div className=" text-quaternary phone1:w-[100%] phone1:font-normal phone1:text-paragraph3 phone1:leading-[21px] desktop3:w-[100%]">
                <p>
                  Os produtos que você vai utilizar na sua piscina devem ser
                  armazenados de forma segura, longe do alcance de crianças e em
                  lugar seco e ventilado. <br />
                  <br />
                  Guarde os produtos separadamente e sempre em suas embalagens
                  originais. Produtos químicos, no geral, possuem fórmulas
                  específicas e, portanto, alguns não são compatíveis uns com os
                  outros. Se misturados, podem gerar gases nocivos à saúde,
                  queimaduras na pele e até incêndios, como é o caso dos
                  oxidantes e dos corrosivos. <br />
                  <br />
                  Nunca reutilize embalagens vazias, mesmo depois de serem
                  lavadas. Elas podem acabar sendo usadas por pessoas
                  desavisadas, crianças e até animais, e isso pode causar grande
                  desconforto e danos à saúde.
                </p>
              </div>
            </MotionDivLeftToRight>
          </div>
        </div>
        <div className="desktop1:flex desktop1:flex-row desktop1:justify-between ">
          <div className=" py-[28px] desktop1:w-[48%] desktop1:py-0 desktop3:w-[46.3%]">
            <MotionDivLeftToRight>
              <img
                className=" size-[100%] desktop1:size-[100%] desktop3:w-[100%]"
                src={resgateAcidente}
                alt="atendimento submerso"
              />
            </MotionDivLeftToRight>
          </div>
          <div className=" desktop1:w-[47.5%] desktop3:w-[46.3%]">
            <div className=" text-quaternary phone1:w-[100%] phone1:font-normal phone1:text-paragraph3 phone1:leading-[21px] desktop3:w-[100%]">
              <MotionDivRightToLeft>
                <p>
                  Utilize sempre um balde plástico pequeno para fazer a
                  dissolução do cloro ou de outro produto em pó, como barrilha,
                  sulfato de alumínio, elevador de alcalinidade, entre outros.
                  Esse balde deverá sempre estar guardado em lugar seguro e não
                  poderá ser utilizado para outros fins. <br />
                  <br />
                  Finalmente, nunca esqueça de utilizar luvas descartáveis em
                  ambas as mãos durante o manuseio de qualquer produto químico,
                  seja ele para piscina ou não. <br />
                  <br />
                  Tomando todos esses cuidados e alguns relacionados à
                  integridade física dos usuários, você estará garantindo
                  diversão segura para todos os banhistas, inclusive crianças e
                  idosos. <br />
                  <br />
                  Boa diversão para todos!
                </p>
              </MotionDivRightToLeft>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
