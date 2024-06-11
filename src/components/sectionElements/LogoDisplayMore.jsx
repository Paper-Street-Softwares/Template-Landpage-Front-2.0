import React from "react";

const LogoDisplayMore = ({ images }) => {
  return (
    <div className="flex  flex-wrap justify-between tablet1:justify-evenly w-full gap-y-[40px] tablet1:gap-y-[60px] p-[20px] phone2:p-[20px] desktop1:py-0 desktop1:px-[80px]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="max-h-[40px]  w-[45.3%] phone3:max-h-[50px] phone3:w-[39.3%] object-contain tablet1:w-[26.1%] tablet2:max-h-[60px] desktop1:p-[20px] desktop1:w-[28.3%] desktop1:max-h-[80px] desktop3:w-[29.7%]"
        />
      ))}
    </div>
  );
};

export default LogoDisplayMore;
