import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            A empresa abre nos finais de semana e nos feriados?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Não, nosso horário de atendimento é de segunda a sexta-feira, das
            8:00 às 18:00 horas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            A empresa conta com atendimento presencial?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Não, nosso atendimento é somente pelo WhatsApp, por telefone ou
            e-mail.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            A empresa oferece cursos ou treinamentos para profissionais ou
            proprietários de piscinas?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Os cursos e treinamentos são oferecidos pelos nossos parceiros
            comerciais. Clique no link do fabricante que você deseja e agende
            seu curso.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            Qual é o valor mínimo para faturamento e qual o prazo de pagamento?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            O valor mínimo por pedido é de R$ 1.200,00 e o prazo é de 21 dias
            para pagamento com boleto bancário.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            Existe um valor mínimo para entrega do pedido?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sim, segue o mesmo padrão do faturamento mínimo, ou seja, R$
            1.200,00 por pedido para entrega grátis no nosso território de
            atuação.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            Como faço para fazer o primeiro pedido?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Faça seu pré-cadastro com um dos nossos atendentes e aguarde a
            aprovação pelo nosso financeiro. Isso deve levar no máximo 2 dias.
            Para CNPJs novos, as primeiras compras deverão ser pagas à vista de
            forma antecipada.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            O que a empresa entende por CNPJs novos?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Aqueles cuja abertura oficial da empresa seja inferior a 3 anos.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
