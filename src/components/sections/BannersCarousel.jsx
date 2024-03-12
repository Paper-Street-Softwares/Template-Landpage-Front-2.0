import ImagesGallery2Slides from "../interactives/ImagesGallery2Slides";
import imgAtendimentoDesktop from "../../assets/banners/bannersCarousel/atendimento-desktop.png";
import imgEntregasDesktop from "../../assets/banners/bannersCarousel/entregas-desktop.png";

export default function BannersCarousel() {
  return (
    <div className="bg-quinary full py-[48px]">
      <ImagesGallery2Slides
        slide1={imgEntregasDesktop}
        slide2={imgAtendimentoDesktop}
      />
    </div>
  );
}
