import React from "react";
import ImagesGallerySlides from "../sectionElements/Galeria";
import HeroImg1 from "../../assets/imgs/hero/heroImg1.png";
import HeroImg2 from "../../assets/imgs/hero/heroImg2.jpeg";
import HeroImg3 from "../../assets/imgs/hero/heroImg3.jpeg";
import HeroImg4 from "../../assets/imgs/hero/heroImg4.jpeg";
import HeroImg5 from "../../assets/imgs/hero/heroImg5.jpeg";

const HomePage = () => {
  return (
    <div>
      <ImagesGallerySlides
        slide1={HeroImg1}
        slide2={HeroImg2}
        slide3={HeroImg3}
        slide4={HeroImg4}
        slide5={HeroImg5}
      />
    </div>
  );
};

export default HomePage;
