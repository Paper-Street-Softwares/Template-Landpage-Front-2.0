import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const CustomTabs = styled(Tabs)`
  .nav-link {
    color: #fff; /* Exemplo de cor personalizada */
    background-color: #007bff; /* Exemplo de cor de fundo */
  }

  .nav-link.active {
    background-color: #0056b3; /* Exemplo de cor de fundo ativa */
  }

  .nav-link: {
    background-color: #6c757d; /* Exemplo de cor de fundo para aba desativada */
  }
`;

function UncontrolledExample() {
  return (
    <CustomTabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="home" title="Home">
        Tab um
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab dois
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        Tab três
      </Tab>
    </CustomTabs>
  );
}

export default UncontrolledExample;
