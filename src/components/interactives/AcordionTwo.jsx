import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionExpandDefault() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getPanelStyle = (panel) => {
    return {
      boxShadow:
        expanded === panel ? "0px 0px 10px -5px rgba(0, 0, 0, 0.1)" : "none",
      border:
        expanded === panel
          ? "1px solid transparent"
          : "1px solid rgba(0, 0, 0, 0.1)",
      borderTop: expanded === panel ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
    };
  };

  return (
    <div>
      {/* Accordion 1 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={getPanelStyle("panel1")}
      >
        <AccordionSummary
          className=" h-[76px]"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              Qual é o tipo de seguro mais adequado para mim?
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              A resposta a essa pergunta depende muito das suas necessidades
              específicas. Nossa equipe de corretores está aqui para ajudá-lo a
              entender suas opções e recomendar o tipo de seguro que melhor se
              adapta à sua situação. Isso pode incluir seguro de vida, seguro de
              saúde, seguro de automóvel, seguro residencial, entre outros.
              Entre em contato conosco para uma consulta personalizada.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 2 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        style={getPanelStyle("panel2")}
      >
        <AccordionSummary
          className=" h-[76px]"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              Como posso economizar dinheiro no meu seguro?
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              Existem várias maneiras de economizar dinheiro no seguro. Uma
              delas é agrupar várias apólices de seguro sob o mesmo provedor, o
              que geralmente resulta em descontos. Além disso, manter um bom
              histórico de condução, um histórico de saúde sólido ou instalar
              dispositivos de segurança em sua casa ou veículo pode diminuir os
              custos do seguro. Nossos corretores podem revisar suas opções e
              oferecer conselhos sobre como maximizar sua cobertura enquanto
              economiza dinheiro.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 3 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        style={getPanelStyle("panel3")}
      >
        <AccordionSummary
          className=" h-[76px]"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              O que devo fazer em caso de sinistro?
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              Em caso de sinistro, é importante nos contatar imediatamente para
              iniciar o processo de reivindicação. Nosso objetivo é tornar o
              processo o mais simples possível para você. Coletaremos todas as
              informações necessárias e orientaremos você em cada etapa do
              processo de reivindicação, garantindo que você receba a
              assistência de que precisa o mais rápido possível.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 4 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        style={getPanelStyle("panel4")}
      >
        <AccordionSummary
          className=" h-[76px]"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              Como faço para entender minha apólice de seguro?
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              Compreender os termos e condições de sua apólice de seguro pode
              parecer complicado, mas estamos aqui para ajudar. Nossos
              corretores estão à disposição para explicar todos os detalhes da
              sua apólice, incluindo cobertura, exclusões, limites e quaisquer
              outros aspectos importantes. Não hesite em nos contatar se tiver
              alguma dúvida sobre sua cobertura ou qualquer aspecto do seu
              seguro.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
