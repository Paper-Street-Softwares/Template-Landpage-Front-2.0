import mainServicesImg1 from "../assets/imgs/services/servicesImg1.png";
import mainServicesImg2 from "../assets/imgs/services/servicesImg2.png";
import mainServicesImg3 from "../assets/imgs/services/servicesImg3.png";
import mainServicesImg4 from "../assets/imgs/services/servicesImg4.png";
import mainServicesImg5 from "../assets/imgs/services/servicesImg5.png";
import morePessoalServicesImg1 from "../assets/imgs/services/servicesImg1.png";
import morePessoalServicesImg2 from "../assets/imgs/services/servicesImg1.png";

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
          img: morePessoalServicesImg1,
          alt: "Foto de pessoa andando",
        },
        cardSubtitle: "Pra quem é esse seguro? Seguro 1",
        cardDescription: "Ideal para viajantes... etc.. Seguro 1",
        buttonLink: "#",
      },
      service2: {
        name: "Seguro 2",
        img: {
          img: morePessoalServicesImg2,
          alt: "Foto de pessoa andando",
        },
        cardSubtitle: "",
        cardDescription: "",
        buttonLink: "#",
      },
    },
    empresarial: {
      service1: {
        name: "Seguro 1",
        img: {
          img: { morePessoalServicesImg1 },
          alt: "",
        },
        cardSubtitle: "",
        cardDescription: "",
        buttonLink: "#",
      },
    },
  },
};

export default services;
