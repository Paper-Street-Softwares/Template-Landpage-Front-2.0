// Titulo do artigo....
import React from 'react';

const PublicationTitle = ({text}) => {
  return (
    <div className= " flex w-full justify-between items-center flex-col desktop1:flex-row phone1:pt-[5%]">
      <div className=" w-[100%] gap-[10%] desktop1:w-[32%] desktop2:w-[47%] ">
        <h1 className=' font-medium text-title2 leading-[150%] text-primary phone3:text-title5 tablet1:font-medium tablet1:text-title4'>Experiência em Grandes Volumes</h1>
      </div>  
    </div>  
  );
}

export default PublicationTitle;