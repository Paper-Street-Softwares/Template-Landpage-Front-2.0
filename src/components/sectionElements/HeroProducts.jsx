import PropTypes from "prop-types";
import bgImage from "../../assets/importAssets/bg2.jpg";
import MotionDivUpToDown from "../animation/MotionDivUpToDown";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function HeroProducts(props) {
  const heroTitle = props.heroTitle;
  const heroImg = props.heroImg;
  const heroParagraph = props.heroParagraph;

  HeroProducts.propTypes = {
    heroTitle: PropTypes.any,
    heroImg: PropTypes.any,
    heroParagraph: PropTypes.any,
  };

  return (
    <div className="w-full full font-mainFont">
    <div
      className="flex justify-center w-full h-auto bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="content">
        <div className="flex flex-col w-auto mx-auto justify-between mb-[16px] text-center text-white mt-[144px] desktop1:gap-[100px] desktop1:flex-row">
          <div>
            <h1 className="font-bold text-title1 desktop1:text-start">
              <MotionDivUpToDown>{heroTitle}</MotionDivUpToDown>
            </h1>
            <h1 className="flex justify-center w-full desktop1:justify-start">
              <MotionDivDownToUp>
                <img
                  className="w-auto h-[64px] p-[8px] my-[8px] bg-white rounded-md max-h-[64px] max-w-auto"
                  src={heroImg}
                  alt="Logo HTH"
                />
              </MotionDivDownToUp>
            </h1>
          </div>

          <div className="">
            <p className="text-paragraph4 tablet1:font-bold">
              <MotionDivDownToUp>{heroParagraph}</MotionDivDownToUp>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}