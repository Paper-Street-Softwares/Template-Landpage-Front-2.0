import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Paragraphs from "../sectionElements/Paragraphs";
import LogoDisplay from "../sectionElements/LogoDisplay";
import content from "../../abstractions/content";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const images = [
  {
    src: content.texts.trustedBy.images.img1.img.trustedByImg1,
    alt: content.texts.trustedBy.images.img1.alt,
  },
  {
    src: content.texts.trustedBy.images.img2.img.trustedByImg2,
    alt: content.texts.trustedBy.images.img2.alt,
  },
  {
    src: content.texts.trustedBy.images.img3.img.trustedByImg3,
    alt: content.texts.trustedBy.images.img3.alt,
  },
  {
    src: content.texts.trustedBy.images.img4.img.trustedByImg4,
    alt: content.texts.trustedBy.images.img4.alt,
  },
  {
    src: content.texts.trustedBy.images.img5.img.trustedByImg5,
    alt: content.texts.trustedBy.images.img5.alt,
  },
  {
    src: content.texts.trustedBy.images.img6.img.trustedByImg6,
    alt: content.texts.trustedBy.images.img6.alt,
  },
];

export default function TrustedBy() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle("Sobre mim");
    setModalContent(
      <p>
        Creci: 11798/PE<br></br> Ensino Superior: Administração - Facape
        <br></br>
        <br></br> Olá, me chamo Rita Almeida, sou corretora de imóveis há mais
        de 10 anos e sou formada em Administração há 30. Decidi entrar no ramo
        quando um colega me fez um elogio: "Rita, você é tão comunicativa,
        deveria ser corretora de imóveis." Eu ainda fiquei receosa: "Ah, isso
        não é para mim," mas decidi arriscar. Fiz o curso quando minha filha
        ainda era pequena e não me arrependo da decisão que tomei.<br></br>
        <br></br> Com a minha formação em Administração, percebi rapidamente que
        muitas das habilidades adquiridas durante o curso eram essenciais no
        mercado imobiliário. A capacidade de negociar, organizar finanças e
        entender os fundamentos econômicos são apenas algumas das competências
        que me ajudaram a destacar-me na profissão.<br></br>
        <br></br> Nos primeiros anos, equilibrar a vida pessoal com a
        profissional foi um desafio, especialmente sendo mãe de uma criança
        pequena. Contudo, sempre busquei manter um alto padrão de ética e
        dedicação, o que me permitiu construir uma reputação sólida e uma base
        de clientes fiéis.
        <br></br>
        <br></br> Ao longo dos anos, vi muitas mudanças no setor imobiliário. A
        tecnologia transformou a maneira como interagimos com clientes e como os
        imóveis são apresentados e comercializados. Adaptar-me a essas mudanças
        foi essencial, e sempre procurei estar atualizada, seja através de
        cursos de formação continuada ou participando de seminários e workshops.
        <br></br>
        <br></br> Hoje, posso dizer que minha carreira é uma grande paixão. Cada
        dia traz um novo desafio e a oportunidade de ajudar alguém a encontrar o
        lugar ideal para chamar de lar. Continuo empregando as habilidades de
        administração no meu dia a dia, gerenciando não apenas propriedades, mas
        também sonhos e expectativas.
      </p>
    );
    setVisible(true);
  };

  return (
    <SectionArea className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle={content.texts.trustedBy.title}
        sectionHeaderSubtitle={content.texts.trustedBy.subtitle}
      />
      <SectionWrapper>
        <MotionDivDownToUp className="w-full mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
          <LogoDisplay images={images} />
        </MotionDivDownToUp>
        <MotionDivDownToUp className="">
          <Paragraphs className="text-center">
            Para ver todas seguradoras que trabalhamos,{" "}
            <span
              className="transition cursor-pointer text-tertiary hover:underline"
              onClick={onClick}
            >
              clique aqui
            </span>
          </Paragraphs>
        </MotionDivDownToUp>
      </SectionWrapper>
      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <p className="m-0 ">{modalContent}</p>
      </Dialog>
    </SectionArea>
  );
}
