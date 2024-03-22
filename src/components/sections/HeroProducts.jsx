import bgImage from "../../assets/importAssets/HeroBanner.png";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";

export default function HeroProducts() {
  return (
    <div className="z-10 full font-mainFont">
      <div
        className="w-full h-auto bg-center bg-cover content"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="flex items-center">
          <div className="flex justify-between text-white min-h-[253px] mx-auto translate-y-28">
            <MotionDivLeftToRight>
            <div className="mt-10 ml-10">
              <div className="font-bold text-title1">Nossa linha de produtos</div>
              <div className="font-black text-title6">HTH</div>
            </div>
            </MotionDivLeftToRight>
            <MotionDivRightToLeft>
            <div className="justify-end mt-12 mx-auto font-bold text-center text-title1 w-[65%]">
            Aqui você encontrará tudo o que precisa para produtos  de tratamento para sua piscina.
            </div>
            </MotionDivRightToLeft>
          </div>
        </div>
      </div>
    </div>
  );
}
