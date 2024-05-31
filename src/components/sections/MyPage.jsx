import React, { useState } from 'react';
import ButtonWithIcon from '../interactives/ButtonWithIcon';
import { Dialog } from 'primereact/dialog';
import TabComponent from '../sectionElements/TabComponent';

const MyPage = () => {
  const [visible, setVisible] = useState(false);

  const tabs = [
    {
      label: 'Tab 1',
      content: {
        title: 'Seguro Objetos Pessoais',
        links: [
          { label: 'Seguro Objetos Pessoais 1', url: '#' },
          { label: 'Seguro Objetos Pessoais 2', url: '#' },
          { label: 'Seguro Objetos Pessoais 3', url: '#' },
          { label: 'Seguro Objetos Pessoais 4', url: '#' },
          { label: 'Seguro Objetos Pessoais 5', url: '#' },
          { label: 'Seguro Objetos Pessoais 6', url: '#' },
        ],
      },
    },
    {
      label: 'Tab 2',
      content: {
        title: 'Outro Seguro',
        links: [
          { label: 'Outro Seguro 1', url: '#' },
          { label: 'Outro Seguro 2', url: '#' },
          { label: 'Outro Seguro 3', url: '#' },
          { label: 'Outro Seguro 4', url: '#' },
          { label: 'Outro Seguro 5', url: '#' },
          { label: 'Outro Seguro 6', url: '#' },
        ],
      },
    },
    {
      label: 'Tab 3',
      content: {
        title: 'Mais Seguros',
        links: [
          { label: 'Mais Seguros 1', url: '#' },
          { label: 'Mais Seguros 2', url: '#' },
          { label: 'Mais Seguros 3', url: '#' },
          { label: 'Mais Seguros 4', url: '#' },
          { label: 'Mais Seguros 5', url: '#' },
          { label: 'Mais Seguros 6', url: '#' },
        ],
      },
    },
  ];

  return (
    <div>
      <ButtonWithIcon
        label="Saiba mais"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-move-right"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        }
        onClick={() => setVisible(true)}
        className="text-white bg-black px-[2%] py-[0.8%]"
      />

      <Dialog
        header="Nossos Seguros"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <p className='pt-[6%]'>Selecione o tipo:</p>
        <TabComponent tabs={tabs} />
      </Dialog>
    </div>
  );
};

export default MyPage;
