import mainServicesImg1 from "../assets/imgs/services/servicesImg1.png";
import mainServicesImg2 from "../assets/imgs/services/servicesImg2.png";
// import mainServicesImg3 from "../assets/imgs/services/servicesImg3.webp";
// import mainServicesImg4 from "../assets/imgs/services/servicesImg4.webp";
// import mainServicesImg5 from "../assets/imgs/services/servicesImg5.webp";
// import mainServicesImg6 from "../assets/imgs/services/servicesImg6.webp";

import morePessoalServicesImg1 from "../assets/imgs/cardModal/imgCardModal1.webp";
import morePessoalServicesImg2 from "../assets/imgs/cardModal/imgCardModal3.webp";
import morePessoalServicesImg3 from "../assets/imgs/cardModal/imgCardModal4.webp";
import morePessoalServicesImg4 from "../assets/imgs/cardModal/imgCardModal6.webp";
import morePessoalServicesImg5 from "../assets/imgs/cardModal/imgCardModal7.webp";
import morePessoalServicesImg6 from "../assets/imgs/cardModal/imgCardModal8.webp";
import morePessoalServicesImg7 from "../assets/imgs/cardModal/imgCardModal9.webp";
import morePessoalServicesImg8 from "../assets/imgs/cardModal/imgCardModal11.webp";
import morePessoalServicesImg9 from "../assets/imgs/cardModal/imgCardModal12.webp";
import morePessoalServicesImg10 from "../assets/imgs/cardModal/imgCardModal13.webp";
import morePessoalServicesImg11 from "../assets/imgs/cardModal/imgCardModal14.webp";
import morePessoalServicesImg12 from "../assets/imgs/cardModal/imgCardModal15.webp";
import morePessoalServicesImg13 from "../assets/imgs/cardModal/imgCardModal16.webp";
import morePessoalServicesImg14 from "../assets/imgs/cardModal/imgCardModal17.webp";
import morePessoalServicesImg15 from "../assets/imgs/cardModal/imgCardModal19.webp";

import moreEmpresarialServicesImg16 from "../assets/imgs/cardModal/imgCardModal20.webp";
import moreEmpresarialServicesImg17 from "../assets/imgs/cardModal/imgCardModal21.webp";
import moreEmpresarialServicesImg18 from "../assets/imgs/cardModal/imgCardModal22.webp";
import moreEmpresarialServicesImg19 from "../assets/imgs/cardModal/imgCardModal23.webp";
import moreEmpresarialServicesImg20 from "../assets/imgs/cardModal/imgCardModal24.webp";
import moreEmpresarialServicesImg21 from "../assets/imgs/cardModal/imgCardModal25.webp";

import morePatrimonialServicesImg22 from "../assets/imgs/cardModal/imgCardModal26.webp";
import morePatrimonialServicesImg23 from "../assets/imgs/cardModal/imgCardModal27.webp";
import morePatrimonialServicesImg24 from "../assets/imgs/cardModal/imgCardModal28.webp";
import morePatrimonialServicesImg25 from "../assets/imgs/cardModal/imgCardModal29.webp";
import morePatrimonialServicesImg26 from "../assets/imgs/cardModal/imgCardModal30.webp";
import morePatrimonialServicesImg27 from "../assets/imgs/cardModal/imgCardModal31.webp";
import morePatrimonialServicesImg28 from "../assets/imgs/cardModal/imgCardModal32.webp";
import morePatrimonialServicesImg29 from "../assets/imgs/cardModal/imgCardModal33.webp";
import morePatrimonialServicesImg30 from "../assets/imgs/cardModal/imgCardModal34.webp";
import morePatrimonialServicesImg31 from "../assets/imgs/cardModal/imgCardModal35.webp";
import morePatrimonialServicesImg32 from "../assets/imgs/cardModal/imgCardModal36.webp";
import morePatrimonialServicesImg33 from "../assets/imgs/cardModal/imgCardModal37.webp";
import morePatrimonialServicesImg34 from "../assets/imgs/cardModal/imgCardModal38.webp";
import morePatrimonialServicesImg35 from "../assets/imgs/cardModal/imgCardModal39.webp";
import morePatrimonialServicesImg36 from "../assets/imgs/cardModal/imgCardModal40.webp";
import morePatrimonialServicesImg37 from "../assets/imgs/cardModal/imgCardModal41.webp";
import morePatrimonialServicesImg38 from "../assets/imgs/cardModal/imgCardModal2.webp";
import morePatrimonialServicesImg39 from "../assets/imgs/cardModal/imgCardModal5.webp";
import morePatrimonialServicesImg40 from "../assets/imgs/cardModal/imgCardModal10.webp";
import morePatrimonialServicesImg41 from "../assets/imgs/cardModal/imgCardModal18.webp";

import links from "./links";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

const services = {
  main: {
    card1: {
      img: { img: mainServicesImg1, alt: "" },
      title: "Botox",
      description:
        "A aplicação de Botox suaviza rugas e linhas de expressão, proporcionando uma aparência mais jovem e descansada.",
      buttonLabel: "Agendar consulta",
      buttonLink:
        "https://villa.segfy.com:443/Publico/Segurados/Orcamentos/SolicitarCotacao?e=V%2BfN%2BEC0GstumVAM%2B2hIUA%3D%3D",
    },
    card2: {
      img: { img: mainServicesImg2, alt: "" },
      title: "Lentes em Resina Composta",
      description:
        "As lentes são finas camadas aplicadas sobre a superfície dos dentes para corrigir imperfeições estéticas, como manchas, desalinhamentos leves e pequenos espaços entre os dentes.",
      buttonLabel: "Agendar consulta",
      buttonLink:
        "https://villa.segfy.com:443/Publico/Segurados/Orcamentos/SolicitarCotacaoResidencial?e=V%2BfN%2BEC0GstumVAM%2B2hIUA%3D%3D",
    },
    card6: {
      title: "Demais procedimentos",
      description: "Confira todos os procedimentos clicando abaixo.",
      buttonLabel: "Ver todos",
      buttonLink: "",
    },
  },
  moreServices: {
    arrowIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-corner-down-right"
      >
        <polyline points="15 10 20 15 15 20" />
        <path d="M4 4v7a4 4 0 0 0 4 4h12" />
      </svg>
    ),
    ctaButtons: {
      buttonLabel: "Contratar",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-corner-down-right"
        >
          <polyline points="15 10 20 15 15 20" />
          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
        </svg>
      ),
    },
    pessoal: {
      service1: {
        name: "Seguro Viagem",
        img: {
          img: morePessoalServicesImg1,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Ideal para viajantes que querem transcender fronteiras com segurança, desfrutando de cada destino sem preocupações.",
        buttonLink: whatsappContactLink,
      },

      service2: {
        name: "Seguro Vida On",
        img: {
          img: morePessoalServicesImg2,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para indivíduos que desejam garantir o futuro de seus entes queridos, tecendo um legado de cuidado e proteção.",
        buttonLink: whatsappContactLink,
      },
      service3: {
        name: "Seguro Fiança",
        img: {
          img: morePessoalServicesImg3,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Ideal para inquilinos e proprietários que buscam segurança nos contratos de locação, tecendo uma relação de confiança.",
        buttonLink: whatsappContactLink,
      },

      service4: {
        name: "Seguro de Acidentes Pessoais Individual Prazo Curto",
        img: {
          img: morePessoalServicesImg4,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para quem busca proteção em situações específicas e temporárias, garantindo segurança em momentos cruciais.",
        buttonLink: whatsappContactLink,
      },
      service5: {
        name: "Seguro de Acidentes Pessoais Escolar",
        img: {
          img: morePessoalServicesImg5,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para escolas que desejam garantir a segurança de seus alunos, protegendo-os em suas atividades diárias.",
        buttonLink: whatsappContactLink,
      },
      service6: {
        name: "Previdência para Crianças",
        img: {
          img: morePessoalServicesImg6,
        },
        cardSubtitle: "Pra quem esta previdência é indicada?",
        cardDescription:
          "Para pais que querem assegurar o futuro financeiro de seus filhos, entrelaçando segurança e prosperidade.",
        buttonLink: whatsappContactLink,
      },
      service7: {
        name: "Seguro Vida",
        img: {
          img: morePessoalServicesImg7,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para indivíduos que querem garantir a segurança financeira de seus entes queridos, criando um legado de cuidado.",
        buttonLink: whatsappContactLink,
      },

      service8: {
        name: "Seguro de Vida em Grupo",
        img: {
          img: morePessoalServicesImg8,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para empresas que desejam proteger seus funcionários, orquestrando uma rede de segurança coletiva.",
        buttonLink: whatsappContactLink,
      },
      service9: {
        name: "Seguro Saúde",
        img: {
          img: morePessoalServicesImg9,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para quem busca proteção abrangente para sua saúde, promovendo bem-estar e tranquilidade.",
        buttonLink: whatsappContactLink,
      },
      service10: {
        name: "Consórcio",
        img: {
          img: morePessoalServicesImg10,
        },
        cardSubtitle: "Pra quem o consórcio é indicado?",
        cardDescription:
          "Para quem deseja adquirir bens de forma planejada, orquestrando um futuro seguro e próspero.",
        buttonLink: whatsappContactLink,
      },
      service11: {
        name: "Previdência",
        img: {
          img: morePessoalServicesImg11,
        },
        cardSubtitle: "Pra quem a previdência é indicada?",
        cardDescription:
          "Para quem planeja o futuro financeiro, garantindo tranquilidade e segurança nos anos vindouros.",
        buttonLink: whatsappContactLink,
      },
      service12: {
        name: "Seguro Odontológico",
        img: {
          img: morePessoalServicesImg12,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para quem deseja cuidar da saúde bucal, garantindo sorrisos saudáveis e seguros.",
        buttonLink: whatsappContactLink,
      },
      service13: {
        name: "Seguro de Vida Mais Mulher",
        img: {
          img: morePessoalServicesImg13,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Destinado a mulheres que desejam uma proteção diferenciada, entrelaçando cuidado e segurança.",
        buttonLink: whatsappContactLink,
      },
      service14: {
        name: "Seguro de Vida Individual",
        img: {
          img: morePessoalServicesImg14,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para quem deseja proteção personalizada, garantindo segurança financeira aos entes queridos.",
        buttonLink: whatsappContactLink,
      },

      service15: {
        name: "Seguro de Acidentes Pessoais Plus",
        img: {
          img: morePessoalServicesImg15,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para quem deseja uma proteção ampla contra acidentes, garantindo segurança em várias situações.",
        buttonLink: whatsappContactLink,
      },
    },
    empresarial: {
      service1: {
        name: "Seguro Auto Empresarial",
        img: {
          img: moreEmpresarialServicesImg16,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para empresas que desejam proteger sua frota de veículos, garantindo segurança e tranquilidade nas operações.",
        buttonLink: whatsappContactLink,
      },
      service2: {
        name: "Seguro de Vida Empresarial",
        img: {
          img: moreEmpresarialServicesImg17,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para empresários que desejam proteger seus sócios e funcionários, tecendo uma rede de segurança corporativa.",
        buttonLink: whatsappContactLink,
      },
      service3: {
        name: "Seguro Imobiliária",
        img: {
          img: moreEmpresarialServicesImg18,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para imobiliárias que desejam proteger seus negócios, garantindo uma gestão tranquila e segura dos imóveis.",
        buttonLink: whatsappContactLink,
      },
      service4: {
        name: "Seguro Saúde Ocupacional",
        img: {
          img: moreEmpresarialServicesImg19,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para empresas que querem assegurar a saúde de seus funcionários, promovendo um ambiente de trabalho seguro e saudável.",
        buttonLink: whatsappContactLink,
      },
      service5: {
        name: "Seguro para Convenções Coletivas",
        img: {
          img: moreEmpresarialServicesImg20,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Ideal para sindicatos ou organizações que precisam se proteger de mudanças proveniente de decisões em grupo.",
        buttonLink: whatsappContactLink,
      },
      service6: {
        name: "Seguro Condomínio",
        img: {
          img: moreEmpresarialServicesImg21,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para síndicos e moradores que desejam proteger áreas comuns e privativas, promovendo um ambiente seguro.",
        buttonLink: whatsappContactLink,
      },
    },
    patrimonial: {
      service1: {
        name: "Seguro Residência",
        img: {
          img: morePatrimonialServicesImg22,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para famílias que desejam proteger seu lar contra imprevistos, garantindo segurança e tranquilidade no mosaico de suas vidas.",
        buttonLink: whatsappContactLink,
      },
      service2: {
        name: "Seguro Moto",
        img: {
          img: morePatrimonialServicesImg23,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para motociclistas que querem proteger sua paixão sobre duas rodas, navegando o labirinto urbano com tranquilidade.",
        buttonLink: whatsappContactLink,
      },
      service3: {
        name: "Seguro Equipamentos Portáteis",
        img: {
          img: morePatrimonialServicesImg24,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Perfeito para quem carrega tecnologia valiosa no dia a dia, orquestrando proteção em sua rotina digital.",
        buttonLink: whatsappContactLink,
      },
      service4: {
        name: "Seguro para notebooks",
        img: {
          img: morePatrimonialServicesImg25,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para profissionais e estudantes que dependem de seus notebooks, garantindo segurança em seu trabalho e estudos.",
        buttonLink: whatsappContactLink,
      },
      service5: {
        name: "Seguro para Câmera Fotográfica",
        img: {
          img: morePatrimonialServicesImg26,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para fotógrafos que desejam proteger seus equipamentos, capturando momentos sem preocupações.",
        buttonLink: whatsappContactLink,
      },
      service6: {
        name: "Seguro Residência Veraneio",
        img: {
          img: morePatrimonialServicesImg27,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para quem possui casa de veraneio e quer desfrutar de momentos tranquilos, protegendo seu refúgio particular.",
        buttonLink: whatsappContactLink,
      },
      service7: {
        name: "Seguro Táxi",
        img: {
          img: morePatrimonialServicesImg28,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para taxistas que querem garantir a segurança de seu veículo, navegando a cidade com tranquilidade.",
        buttonLink: whatsappContactLink,
      },
      service8: {
        name: "Seguro Caminhão",
        img: {
          img: morePatrimonialServicesImg29,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para caminhoneiros que desejam proteger seu meio de vida, enfrentando as estradas com segurança.",
        buttonLink: whatsappContactLink,
      },
      service9: {
        name: "Seguro Residência Habitual",
        img: {
          img: morePatrimonialServicesImg30,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para famílias que querem proteger seu lar cotidiano, tecendo uma rede de segurança e tranquilidade.",
        buttonLink: whatsappContactLink,
      },
      service10: {
        name: "Seguro para Filmadora",
        img: {
          img: morePatrimonialServicesImg31,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para videomakers que buscam proteger suas filmadoras, capturando suas histórias com segurança.",
        buttonLink: whatsappContactLink,
      },
      service11: {
        name: "Seguro Residência Apartamento",
        img: {
          img: morePatrimonialServicesImg32,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para moradores de apartamentos que desejam proteger seu lar, garantindo segurança em cada detalhe do cotidiano.",
        buttonLink: whatsappContactLink,
      },
      service12: {
        name: "Seguro para Celular",
        img: {
          img: morePatrimonialServicesImg33,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para quem deseja proteger seu celular, transcendendo as preocupações e aproveitando a tecnologia sem medos.",
        buttonLink: whatsappContactLink,
      },
      service13: {
        name: "Consórcio de Imóvel",
        img: {
          img: morePatrimonialServicesImg34,
        },
        cardSubtitle: "Pra quem o consórcio é indicado?",
        cardDescription:
          "Para quem deseja adquirir um imóvel, entrelaçando economia e planejamento na realização de sonhos.",
        buttonLink: whatsappContactLink,
      },
      service14: {
        name: "Seguro Residência Premium",
        img: {
          img: morePatrimonialServicesImg35,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para quem busca proteção completa e sofisticada para seu lar, transcendendo as preocupações cotidianas.",
        buttonLink: whatsappContactLink,
      },
      service15: {
        name: "Seguro Auto Premium",
        img: {
          img: morePatrimonialServicesImg36,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para motoristas que buscam uma proteção superior, garantindo segurança e tranquilidade nas suas viagens.",
        buttonLink: whatsappContactLink,
      },
      service16: {
        name: "Seguro para Tablet",
        img: {
          img: morePatrimonialServicesImg37,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para quem depende de seu tablet no dia a dia, garantindo proteção e tranquilidade digital.",
        buttonLink: whatsappContactLink,
      },
      service17: {
        name: "Seguro Auto",
        img: {
          img: morePatrimonialServicesImg38,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Recomendado para motoristas que desejam proteger seu veículo, embarcando em suas jornadas com segurança e confiança.",
        buttonLink: whatsappContactLink,
      },
      service18: {
        name: "Seguro Auto Jovem",
        img: {
          img: morePatrimonialServicesImg39,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Destinado a jovens motoristas que buscam proteção e segurança ao iniciarem sua jornada no trânsito.",
        buttonLink: whatsappContactLink,
      },
      service19: {
        name: "Seguro Auto Mulher",
        img: {
          img: morePatrimonialServicesImg40,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Destinado a mulheres motoristas que desejam proteção especial, navegando com segurança pelo trânsito diário.",
        buttonLink: whatsappContactLink,
      },
      service20: {
        name: "Seguro Auto Sênior",
        img: {
          img: morePatrimonialServicesImg41,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Para motoristas seniores que querem garantir segurança e tranquilidade ao dirigir, protegendo-se no trânsito.",
        buttonLink: whatsappContactLink,
      },
    },
    harmonizacao: {
      label: "Harmonização Facial",
      service1: {
        name: "Seguro 1",
        img: {
          img: morePessoalServicesImg1,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Ideal para viajantes que querem transcender fronteiras com segurança, desfrutando de cada destino sem preocupações.",
        buttonLink: whatsappContactLink,
      },
      service1: {
        name: "Seguro 2",
        img: {
          img: morePessoalServicesImg1,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Ideal para viajantes que querem transcender fronteiras com segurança, desfrutando de cada destino sem preocupações.",
        buttonLink: whatsappContactLink,
      },
      service1: {
        name: "Seguro 3",
        img: {
          img: morePessoalServicesImg1,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Ideal para viajantes que querem transcender fronteiras com segurança, desfrutando de cada destino sem preocupações.",
        buttonLink: whatsappContactLink,
      },
    },
  },
};

export default services;
