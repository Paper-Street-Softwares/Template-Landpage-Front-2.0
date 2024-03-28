import ImagesGallery2Slides from "../interactives/ImagesGallery2Slides";
import imgAtendimentoPhone from "../../assets/banners/bannersCarousel/atendimento-phone.png";
import imgEntregasPhone from "../../assets/banners/bannersCarousel/entregas-phone.png";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";

export default function PhoneBannersCarousel() {
  return (
    <MotionDivLeftToRight>
      <div className="full py-[26px] phone3:py-[48px]">
        <ImagesGallery2Slides
          slide1={imgAtendimentoPhone}
          slide2={imgEntregasPhone}
        />
      </div>
    </MotionDivLeftToRight>
  );
}
