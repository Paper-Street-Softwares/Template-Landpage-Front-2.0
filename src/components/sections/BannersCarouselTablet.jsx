import ImagesGallery2Slides from "../interactives/ImagesGallery2Slides";
import imgAtendimentoTablet from "../../assets/banners/bannersCarousel/atendimento-tablet.png";
import imgEntregasTablet from "../../assets/banners/bannersCarousel/entregas-tablet.png";

export default function TabletBannersCarousel() {
  return (
    <div className="full py-[26px] phone3:py-[48px]">
      <ImagesGallery2Slides
        slide1={imgAtendimentoTablet}
        slide2={imgEntregasTablet}
      />
    </div>
  );
}
