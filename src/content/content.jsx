import logo from "../assets/imgs/logo/logo.png";
import solidLogo from "../assets/imgs/logo/solidLogo.png";
import links from "./links";
import aboutImg1 from "../assets/imgs/about/aboutImg.webp";
import trustedByImg1 from "../assets/imgs/trustedBy/item1.webp";
import trustedByImg2 from "../assets/imgs/trustedBy/item2.webp";
import trustedByImg3 from "../assets/imgs/trustedBy/item3.webp";
import trustedByImg4 from "../assets/imgs/trustedBy/item4.webp";
import trustedByImg5 from "../assets/imgs/trustedBy/item5.webp";
import trustedByImg6 from "../assets/imgs/trustedBy/item6.webp";
import trustedByImg7 from "../assets/imgs/trustedBy/item7.webp";
import trustedByImg8 from "../assets/imgs/trustedBy/item8.webp";
import trustedByImg9 from "../assets/imgs/trustedBy/item9.webp";
import trustedByImg10 from "../assets/imgs/trustedBy/item10.webp";
import trustedByImg11 from "../assets/imgs/trustedBy/item11.webp";
import numbersImgBg from "../assets/imgs/paralaxe/bgParalaxe1.webp";
import featuresImg1 from "../assets/imgs/features/featuresImg1.png";
import featuresImg2 from "../assets/imgs/features/featuresImg2.png";
import featuresImg3 from "../assets/imgs/features/featuresImg3.png";
import featuresImg4 from "../assets/imgs/features/featuresImg4.png";
import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgParalaxe2.webp";

import teamMemberImg1 from "../assets/imgs/team/team1.webp";
import teamMemberImg2 from "../assets/imgs/team/team2.webp";
import teamMemberImg3 from "../assets/imgs/team/team3.webp";
import teamMemberImg4 from "../assets/imgs/team/team4.webp";

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        alt: "Logomarca",
      },
      solidLogo: {
        img: solidLogo,
        alt: "Logomarca",
      },
      menuItems: ["Início", "Sobre Nós", "Serviços", "Perguntas Frequentes"],
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      title: (
        <div>
          Proteja o que <br />
          <span className="text-primary">mais</span> importa
        </div>
      ),
      subtitle:
        "Cuidamos do seu patrimônio, para que você tenha sempre uma vida tranquila e segura!",
      ctaButtonText: "Fale com nossa equipe",
      images: {
        background: {},
        static: {
          img: {},
          alt: "",
        },
        slide1: {
          img: {},
          alt: "",
        },
        slide2: {
          img: {},
          alt: "",
        },
        slide3: {
          img: {},
          alt: "",
        },
      },
    },
    trustedBy: {
      title: "Parceria com as maiores seguradoras",
      subtitle: "Confiabilidade e excelência em proteção",
      trustedMore: {
        title: "Seguradoras",
        subtitle:
          "Confiança que apenas as maiores seguradoras do Brasil oferecem",
      },
      images: {
        img1: {
          img: { trustedByImg1 },
          alt: "Seguradora Porto Seguro",
        },
        img2: {
          img: { trustedByImg2 },
          alt: "Seguradora Bradesco",
        },
        img3: {
          img: { trustedByImg3 },
          alt: "Seguradora Liberty",
        },
        img4: {
          img: { trustedByImg4 },
          alt: "Seguradora Allianz",
        },
        img5: {
          img: { trustedByImg5 },
          alt: "Seguradora SulAmérica",
        },
        img6: {
          img: { trustedByImg6 },
          alt: "Seguradora Tokio Marine",
        },
        img7: {
          img: { trustedByImg7 },
          alt: "Seguradora Mapfre Seguros",
        },
        img8: {
          img: { trustedByImg8 },
          alt: "Seguradora Itaú Seguros",
        },
        img9: {
          img: { trustedByImg9 },
          alt: "Seguradora Azul Seguros",
        },
        img10: {
          img: { trustedByImg10 },
          alt: "Seguradora HDI Seguros",
        },
        img11: {
          img: { trustedByImg11 },
          alt: "Seguradora SUHAI Seguros",
        },
      },
    },
    numbers: {
      backgroundImg: numbersImgBg,
      number1: 30,
      number1Description: "Anos no mercado",
      number2: 40,
      number2Description: "Tipos de seguros",
      number3: 10,
      number3Description: "Seguradoras parceiras",
    },
    about: {
      imagem: {
        img: aboutImg1,
        alt: "Pessoas em negociação",
      },
      title: "Sobre nós 👋",
      paragraph: (
        <div>
          Após 15 anos de dedicação em diversas corretoras e acumulando valiosas
          experiências na solução dos problemas de seus clientes, o Sr.
          Uellinton Rodrigues de Matos fundou a URM Seguros.
          <br />
          <br />
          Com mais de 30 anos de história, a URM Seguros se consolidou como
          referência no mercado de seguros, compreendendo profundamente o que é
          necessário para garantir a sua proteção.
          <br />
          <br />
          Nosso compromisso é oferecer segurança e tranquilidade para você, sua
          família e seus bens mais preciosos.
        </div>
      ),
    },
    team: {
      title: "Nossa Equipe",
      subtitle: "Conheça as mentes brilhantes por trás do nosso sucesso",
      members: {
        member1: {
          img: {
            img: teamMemberImg1,
            alt: "Edison Matos",
          },
          name: "Edison Matos",
          role: "CEO & Diretor de Desenvolvimento",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/edison-matoss/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/EdisonMatos",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "https://edisonmatos.github.io/",
          },
        },
        member2: {
          img: {
            img: teamMemberImg2,
            alt: "Gabriel Adans",
          },
          name: "Gabriel Adans",
          role: "Marketing Outsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/gabriel-adans-2bb029227/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/GabrielAdans",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: "https://www.instagram.com/adansgabriel/",
          },
        },
        member3: {
          img: {
            img: teamMemberImg3,
            alt: "Gabriel Souza",
          },
          name: "Gabriel Souza",
          role: "Desenvolvedor Frontend",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: " https://www.linkedin.com/in/gabriel-souza-b9945929a",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/BiellSouza",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: " https://www.instagram.com/biel.souza.904",
          },
        },
        member4: {
          img: {
            img: teamMemberImg4,
            alt: "Luiz Felipe",
          },
          name: "Luiz Felipe",
          role: "Designer Ourtsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/luiz-felipe-leite-95a246192/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link2: "https://www.instagram.com/luizleitedesigner/",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="#000000"
                className=" bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            ),
            link3: "https://wa.me/+556596241854",
          },
        },
      },
    },
    features: {
      title: "Nossas especialidades",
      subtitle: "Conheça as áreas de atuação da Dra. Monique Adrielle",
      card1: {
        title: "Harmonização Orofacial",
        subtitle: "Realce sua beleza natural com HOF",
        img: featuresImg1,
        buttonLabel: "Saiba mais",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre sites.`,
      },
      card2: {
        title: "Estética Dental",
        subtitle: "Transformando sorrisos e renovando a autoestima",
        img: featuresImg2,
        buttonLabel: "Saiba mais",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre landing pages.`,
      },
      card3: {
        title: "Reabilitação do meio bucal",
        subtitle: "Reabilitação do meio bucal",
        img: featuresImg3,
        buttonLabel: "Saiba mais",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre landing pages.`,
      },
      card4: {
        title: "Odontologia Pediátrica",
        subtitle: "Dos primeiros dentes até a adolescência",
        img: featuresImg4,
        buttonLabel: "Saiba mais",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre landing pages.`,
      },
    },
    cta: {
      backgroundImg: ctaWhatsappImgBg,
      title: (
        <p className="">
          Simule e contrate agora mesmo
          <br />o seu <strong>seguro</strong>
        </p>
      ),
      subtitle: "#",
      ctaButtonText: "Fazer simulação",
    },
    faq: {
      title: "Perguntas Frequentes",
      subtitle:
        "Confira as perguntas abaixo para esclarecer suas dúvidas. Estamos aqui para ajudar!",
      questions: {
        question1: {
          question: "Qual é o tipo de seguro mais adequado para mim?",
          answer:
            "A resposta a essa pergunta depende muito das suas necessidades específicas. Nossa equipe de corretores está aqui para ajudá-lo a entender suas opções e recomendar o tipo de seguro que melhor se adapta à sua situação. Isso pode incluir seguro de vida, seguro de saúde, seguro de automóvel, seguro residencial, entre outros. Entre em contato conosco para uma consulta personalizada.",
        },
        question2: {
          question: "Como posso economizar dinheiro no meu seguro?",
          answer:
            "Existem várias maneiras de economizar dinheiro no seguro. Uma delas é agrupar várias apólices de seguro sob o mesmo provedor, o que geralmente resulta em descontos. Além disso, manter um bom histórico de condução, um histórico de saúde sólido ou instalar dispositivos de segurança em sua casa ou veículo pode diminuir os custos do seguro. Nossos corretores podem revisar suas opções e oferecer conselhos sobre como maximizar sua cobertura enquanto economiza dinheiro.",
        },
        question3: {
          question: "O que devo fazer em caso de sinistro?",
          answer:
            "Em caso de sinistro, é importante nos contatar imediatamente para iniciar o processo de reivindicação. Nosso objetivo é tornar o processo o mais simples possível para você. Coletaremos todas as informações necessárias e orientaremos você em cada etapa do processo de reivindicação, garantindo que você receba a assistência de que precisa o mais rápido possível.",
        },
        question4: {
          question: "Como faço para entender minha apólice de seguro?",
          answer:
            "Compreender os termos e condições de sua apólice de seguro pode parecer complicado, mas estamos aqui para ajudar. Nossos corretores estão à disposição para explicar todos os detalhes da sua apólice, incluindo cobertura, exclusões, limites e quaisquer outros aspectos importantes. Não hesite em nos contatar se tiver alguma dúvida sobre sua cobertura ou qualquer aspecto do seu seguro.",
        },
      },
    },
  },
};

export default content;
