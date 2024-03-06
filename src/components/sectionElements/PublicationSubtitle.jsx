// Subtitulo do artigo....
import React from 'react';

const PublicationSubtitle = ({text}) => {
  return (
    <div className= " flex w-full justify-between items-center flex-col desktop1:flex-row phone1:pt-[5%]">
      <div className=" w-[100%] gap-[10%] desktop1:w-[32%] desktop2:w-[47%] ">
        <h3 className=' pb-[3%] text-quaternary font-medium text-paragraph3 leading-[24%] phone3:pb-[2%] phone3:text-paragraph4 phone3:leading-[27%] desktop1:pb-[3%] '>Nossa História</h3>
      </div>
    </div>
  );
}

export default PublicationSubtitle;