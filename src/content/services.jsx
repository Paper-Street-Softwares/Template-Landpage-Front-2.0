import mainServicesImg1 from "../assets/imgs/services/servicesImg1.png";
import mainServicesImg2 from "../assets/imgs/services/servicesImg2.png";
import mainServicesImg3 from "../assets/imgs/services/servicesImg3.png";
import mainServicesImg4 from "../assets/imgs/services/servicesImg4.png";
import mainServicesImg5 from "../assets/imgs/services/servicesImg5.png";
import morePessoalServicesImg1 from "../assets/imgs/services/servicesImg1.png";
import morePessoalServicesImg2 from "../assets/imgs/services/servicesImg2.png";
import imgCardModal1 from "../assets/imgs/cardModal/imgCardModal1.png";
import imgCardModal2 from "../assets/imgs/cardModal/imgCardModal2.png";
import imgCardModal3 from "../assets/imgs/cardModal/imgCardModal3.png";
import imgCardModal4 from "../assets/imgs/cardModal/imgCardModal4.png";
import imgCardModal5 from "../assets/imgs/cardModal/imgCardModal5.png";
import imgCardModal6 from "../assets/imgs/cardModal/imgCardModal6.png";
import imgCardModal7 from "../assets/imgs/cardModal/imgCardModal7.png";
import imgCardModal8 from "../assets/imgs/cardModal/imgCardModal8.png";
import imgCardModal9 from "../assets/imgs/cardModal/imgCardModal9.png";
import imgCardModal10 from "../assets/imgs/cardModal/imgCardModal10.png";
import imgCardModal11 from "../assets/imgs/cardModal/imgCardModal11.png";
import imgCardModal12 from "../assets/imgs/cardModal/imgCardModal12.png";
import imgCardModal13 from "../assets/imgs/cardModal/imgCardModal13.png";
import imgCardModal14 from "../assets/imgs/cardModal/imgCardModal14.png";
import imgCardModal15 from "../assets/imgs/cardModal/imgCardModal15.png";
import imgCardModal16 from "../assets/imgs/cardModal/imgCardModal16.png";
import imgCardModal17 from "../assets/imgs/cardModal/imgCardModal17.png";
import imgCardModal18 from "../assets/imgs/cardModal/imgCardModal18.png";
import imgCardModal19 from "../assets/imgs/cardModal/imgCardModal19.png";

import imgCardModal20 from "../assets/imgs/cardModal/imgCardModal20.png";
import imgCardModal21 from "../assets/imgs/cardModal/imgCardModal21.png";
import imgCardModal22 from "../assets/imgs/cardModal/imgCardModal22.png";
import imgCardModal23 from "../assets/imgs/cardModal/imgCardModal23.png";
import imgCardModal24 from "../assets/imgs/cardModal/imgCardModal24.png";
import imgCardModal25 from "../assets/imgs/cardModal/imgCardModal25.png";
import imgCardModal26 from "../assets/imgs/cardModal/imgCardModal26.png";
import imgCardModal27 from "../assets/imgs/cardModal/imgCardModal27.png";
import imgCardModal28 from "../assets/imgs/cardModal/imgCardModal28.png";

const services = {
  main: {
    card1: {
      img: { img: mainServicesImg1, alt: "" },
      title: "Seguro Automóvel",
      description:
        "Proteção completa para seu veículo, com assistência 24 horas e serviços personalizados.",
      buttonLink: "",
    },
    card2: {
      img: { img: mainServicesImg2, alt: "" },
      title: "Seguro Residencial e Condomínio",
      description:
        "Coberturas abrangentes para sua casa ou apartamento, incluindo danos estruturais e responsabilidade civil.",
      buttonLink: "",
    },
    card3: {
      img: { img: mainServicesImg3, alt: "" },
      title: "Seguro de Vida e Acidentes",
      description:
        "Segurança financeira para sua família em casos de imprevistos, com coberturas adaptadas às suas necessidades.",
      buttonLink: "",
    },
    card4: {
      img: { img: mainServicesImg4, alt: "" },
      title: "Seguro Empresarial",
      description:
        "Segurança financeira para sua família em casos de imprevistos, com coberturas adaptadas às suas necessidades.",
      buttonLink: "",
    },
    card5: {
      img: { img: mainServicesImg5, alt: "" },
      title: "Planos de Saúde",
      description:
        "Segurança financeira para sua família em casos de imprevistos, com coberturas adaptadas às suas necessidades.",
      buttonLink: "",
    },
    card6: {
      title: "Demais seguros",
      description: "Confira nossa lista completa de seguros clicando abaixo.",
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
      buttonLabel: "Simular",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M893.8 130.2c-58.8-58.8-154.5-58.8-213.3 0l-453 453c-4.3 4.3-7.4 9.6-9.1 15.4L136.5 873.2c-5.3 17.9-0.8 37.5 12.1 50.4 12.9 12.9 32.5 17.4 50.4 12.1l274.5-81.8c5.8-1.7 11.1-4.8 15.4-9.1l453-453c58.8-58.8 58.8-154.5 0-213.3zM378 791.4l-169.4 50.5 50.5-169.4 378.3-378.3 118.8 118.8L378 791.4zM803.1 366.3L684.3 247.5l75.1-75.1c19.5-19.5 51.1-19.5 70.6 0l48.2 48.2c19.5 19.5 19.5 51.1 0 70.6L803.1 366.3z" />
          <path d="M165.3 877.9l-.6.4-28 8.3 8.3-28.1.4-.6zM1024 960v64H0v-64z" />
        </svg>
      ),
    },
    pessoal: {
      service1: {
        name: "Seguro 1",
        img: {
          img: imgCardModal1,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Ideal para viajantes que querem transcender fronteiras com segurança, desfrutando de cada destino sem preocupações.",
        buttonLink: "#",
      },
      service2: {
        name: "Seguro 2",
        img: {
          img: imgCardModal2,
        },
        cardSubtitle: "Pra quem é esse seguro?",
        cardDescription:
          "Recomendado para motoristas que desejam proteger seu veículo, embarcando em suas jornadas com segurança e confiança.",
        buttonLink: "#",
      },
      service3: {
        name: "Seguro 3",
        img: {
          img: imgCardModal3,
        },
        cardSubtitle: "Seguro Vida On",
        cardDescription:
          "Para indivíduos que desejam garantir o futuro de seus entes queridos, tecendo um legado de cuidado e proteção.",
        buttonLink: "#",
      },
      service4: {
        name: "Seguro 4",
        img: {
          img: imgCardModal4,
        },
        cardSubtitle: "Seguro Fiança",
        cardDescription:
          "Ideal para inquilinos e proprietários que buscam segurança nos contratos de locação, tecendo uma relação de confiança.",
        buttonLink: "#",
      },
      service5: {
        name: "Seguro 5",
        img: {
          img: imgCardModal5,
        },
        cardSubtitle: "Seguro Auto Jovem",
        cardDescription:
          "Destinado a jovens motoristas que buscam proteção e segurança ao iniciarem sua jornada no trânsito.",
        buttonLink: "#",
      },
      service6: {
        name: "Seguro 6",
        img: {
          img: imgCardModal6,
        },
        cardSubtitle: "Seguro de Acidentes Pessoais Individual Prazo Curto",
        cardDescription:
          "Para quem busca proteção em situações específicas e temporárias, garantindo segurança em momentos cruciais.",
        buttonLink: "#",
      },
      service7: {
        name: "Seguro 7",
        img: {
          img: imgCardModal7,
        },
        cardSubtitle: "Seguro de Acidentes Pessoais Escolar",
        cardDescription:
          "Para escolas que desejam garantir a segurança de seus alunos, protegendo-os em suas atividades diárias.",
        buttonLink: "#",
      },
      service8: {
        name: "Seguro 8",
        img: {
          img: imgCardModal8,
        },
        cardSubtitle: "Previdência para Crianças",
        cardDescription:
          "Para pais que querem assegurar o futuro financeiro de seus filhos, entrelaçando segurança e prosperidade.",
        buttonLink: "#",
      },
      service9: {
        name: "Seguro 9",
        img: {
          img: imgCardModal9,
        },
        cardSubtitle: "Seguro Vida",
        cardDescription:
          "Para indivíduos que querem garantir a segurança financeira de seus entes queridos, criando um legado de cuidado.",
        buttonLink: "#",
      },
      service10: {
        name: "Seguro 10",
        img: {
          img: imgCardModal10,
        },
        cardSubtitle: "Seguro Auto Mulher",
        cardDescription:
          "Destinado a mulheres motoristas que desejam proteção especial, navegando com segurança pelo trânsito diário.",
        buttonLink: "#",
      },
      service11: {
        name: "Seguro 11",
        img: {
          img: imgCardModal11,
        },
        cardSubtitle: "Seguro de Vida em Grupo",
        cardDescription:
          "Para empresas que desejam proteger seus funcionários, orquestrando uma rede de segurança coletiva.",
        buttonLink: "#",
      },
      service12: {
        name: "Seguro 12",
        img: {
          img: imgCardModal12,
        },
        cardSubtitle: "Seguro Saúde",
        cardDescription:
          "Para quem busca proteção abrangente para sua saúde, promovendo bem-estar e tranquilidade.",
        buttonLink: "#",
      },
      service13: {
        name: "Seguro 13",
        img: {
          img: imgCardModal13,
        },
        cardSubtitle: "Consórcio",
        cardDescription:
          "Para quem deseja adquirir bens de forma planejada, orquestrando um futuro seguro e próspero.",
        buttonLink: "#",
      },
      service14: {
        name: "Seguro 14",
        img: {
          img: imgCardModal14,
        },
        cardSubtitle: "Previdência",
        cardDescription:
          "Para quem planeja o futuro financeiro, garantindo tranquilidade e segurança nos anos vindouros.",
        buttonLink: "#",
      },
      service15: {
        name: "Seguro 15",
        img: {
          img: imgCardModal15,
        },
        cardSubtitle: "Seguro Odontológico",
        cardDescription:
          "Para quem deseja cuidar da saúde bucal, garantindo sorrisos saudáveis e seguros.",
        buttonLink: "#",
      },
      service16: {
        name: "Seguro 16",
        img: {
          img: imgCardModal16,
        },
        cardSubtitle: "Seguro de Vida Mais Mulher",
        cardDescription:
          "Destinado a mulheres que desejam uma proteção diferenciada, entrelaçando cuidado e segurança.",
        buttonLink: "#",
      },
      service17: {
        name: "Seguro 17",
        img: {
          img: imgCardModal17,
        },
        cardSubtitle: "Seguro de Vida Individual",
        cardDescription:
          "Para quem deseja proteção personalizada, garantindo segurança financeira aos entes queridos.",
        buttonLink: "#",
      },
      service18: {
        name: "Seguro 18",
        img: {
          img: imgCardModal18,
        },
        cardSubtitle: "Seguro Auto Sênior",
        cardDescription:
          "Para motoristas seniores que querem garantir segurança e tranquilidade ao dirigir, protegendo-se no trânsito.",
        buttonLink: "#",
      },
      service19: {
        name: "Seguro 19",
        img: {
          img: imgCardModal19,
        },
        cardSubtitle: "Seguro de Acidentes Pessoais Plus",
        cardDescription:
          "Para quem deseja uma proteção ampla contra acidentes, garantindo segurança em várias situações.",
        buttonLink: "#",
      },
    },
    empresarial: {
      service1: {
        name: "Seguro 1",
        img: {
          img: imgCardModal20,
        },
        cardSubtitle: "Seguro Auto Empresarial",
        cardDescription:
          "Para empresas que desejam proteger sua frota de veículos, garantindo segurança e tranquilidade nas operações.",
        buttonLink: "#",
      },
      service2: {
        name: "Seguro 2",
        img: {
          img: imgCardModal21,
        },
        cardSubtitle: "Seguro de Vida Empresarial",
        cardDescription:
          "Para empresários que desejam proteger seus sócios e funcionários, tecendo uma rede de segurança corporativa.",
        buttonLink: "#",
      },
      service3: {
        name: "Seguro 3",
        img: {
          img: imgCardModal22,
        },
        cardSubtitle: "Seguro Imobiliária",
        cardDescription:
          "Para imobiliárias que desejam proteger seus negócios, garantindo uma gestão tranquila e segura dos imóveis.",
        buttonLink: "#",
      },
      service4: {
        name: "Seguro 4",
        img: {
          img: imgCardModal23,
        },
        cardSubtitle: "Seguro Saúde Ocupacional",
        cardDescription:
          "Para empresas que querem assegurar a saúde de seus funcionários, promovendo um ambiente de trabalho seguro e saudável.",
        buttonLink: "#",
      },
      service5: {
        name: "Seguro 5",
        img: {
          img: imgCardModal24,
        },
        cardSubtitle: "Seguro para Convenções Coletivas",
        cardDescription:
          "Ideal para sindicatos ou organizações que precisam se proteger de mudanças proveniente de decisões em grupo.",
        buttonLink: "#",
      },
      service6: {
        name: "Seguro 6",
        img: {
          img: imgCardModal25,
        },
        cardSubtitle: "Seguro Condomínio",
        cardDescription:
          "Para síndicos e moradores que desejam proteger áreas comuns e privativas, promovendo um ambiente seguro.",
        buttonLink: "#",
      },
    },
  },
};

export default services;
