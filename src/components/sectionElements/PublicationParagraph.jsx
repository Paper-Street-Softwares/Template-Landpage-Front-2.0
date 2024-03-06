// Parágrafo do artigo....
import React from 'react';

const PublicationParagraph = ({text}) => {
  return (
    <div className= " flex w-full justify-between items-center flex-col desktop1:flex-row phone1:pt-[5%]">
      <div className=" w-[100%] gap-[10%] desktop1:w-[32%] desktop2:w-[47%] ">
        <p className=' text-quaternary font-normal text-paragraph3 leading-[150%] phone3:text-paragraph4 tablet1:text-paragraph3 desktop1:text-paragraph2 desktop2:text-paragraph3'>A Mpa é uma empresa familiar criada especialmente para oferecer atendimento personalizado a proprietários de piscinas com grandes volumes de água. Sua criação remonta ao ano de 2003, embora seus idealizadores sejam pessoas ligadas a esse segmento e que contam com pelo menos 45 anos de experiência nesse tipo de atendimento. <span class='flex pt-[5%]'>Nossa missão como empresa é nos aprimorar a cada dia que passa, subir degrau por degrau, avançar no sentido de cumprir sempre nossos objetivos e para que isso aconteça, temos a clara consciência de que precisamos contar sempre com você, cliente. Junte-se a nós!</span></p>
      </div>
    </div>  
  );
}

export default PublicationParagraph;