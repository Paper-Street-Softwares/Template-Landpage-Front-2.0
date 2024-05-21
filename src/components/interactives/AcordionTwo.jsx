import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionExpandDefault() {
  // Estado para controlar qual painel está expandido
  const [expanded, setExpanded] = useState("panel1");

  // Função para alternar o estado do painel
  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Função para obter o estilo de sombra baseado no painel expandido
  const getPanelStyle = (panel) => {
    return {
      boxShadow:
        expanded === panel ? "0px 5px 10px rgba(0, 0, 0, 0.1)" : "none",
      border:
        expanded === panel
          ? "1px solid transparent"
          : "1px solid rgba(0, 0, 0, 0.05) ",
    };
  };

  return (
    <div>
      {/* Accordion 1 */}
      <Accordion
        className="mb-[2%]"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={getPanelStyle("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <b>Quero financiar um imóvel, como eu faço?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Primeiro passo é ter renda comprovada e não ter restrições no CPF, e
            depois, fazer a simulação.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 2 */}
      <Accordion
        className="mb-[2%]"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        style={getPanelStyle("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            <b>Fui aprovado(a), quais documentos eu preciso?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            É preciso que me envie em PDF: RG, CPF, certidão de nascimento ou de
            casamento (se for casado é necessário a documentação do cônjuge),
            comprovante de endereço no nome do titular e por último, imposto de
            renda ou contracheque, caso clt, é necessário carteira de trabalho
            digital, e caso queira utilizar o FGTS é necessário o extrato dele
            também.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 3 */}
      <Accordion
        className="mb-[2%]"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        style={getPanelStyle("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>
            <b>Quero que venda/alugue meu imóvel, como proceder?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Entre em contato para negociações e contratação.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 4 */}
      <Accordion
        className="mb-[2%]"
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        style={getPanelStyle("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>
            <b>Qual o valor da parcela do financiamento?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Depende do valor do imóvel e da renda de cada pessoa.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
