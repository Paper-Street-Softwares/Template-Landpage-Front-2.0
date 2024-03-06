// Imagem do artigo....
import React from 'react';

const PublicationImage = ({src,alt}) => {
  return (
    <div className= " flex w-full justify-between items-center flex-col desktop1:flex-row phone1:pt-[5%]">
        <div className=" flex justify-center pt-[8%] phone1:w-[100%] phone3:pt-[5%] tablet1:pt-[4%] tablet2:pt-[3%] desktop1:pt-[2%] desktop1:w-[50%] desktop2:w-[40%]">
            <img className=" size-[100%] desktop1:size-[93%]" src="./src/assets/importAssets/piscina.png" alt="" />
        </div>
    </div>
  );
}

export default PublicationImage;