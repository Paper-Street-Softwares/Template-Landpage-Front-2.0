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
    <div className="z-10 full font-mainFont">
      <div
        className="w-full bg-center bg-cover content"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="h-36" />
        <div className="mx-auto">
          <div className="flex flex-col justify-between mb-4 text-center text-white desktop1:gap-10 desktop1:flex-row">
            <div>
              <h1 className="font-bold text-title1 desktop1:text-start">
                <MotionDivUpToDown>{heroTitle}</MotionDivUpToDown>
              </h1>
              <h1 className="flex justify-center w-full desktop1:justify-start">
                <MotionDivDownToUp>
                  <img
                    className="w-auto h-16 p-2 my-2 bg-white rounded-md max-h-16 max-w-auto"
                    src={heroImg}
                    alt="Logo HTH"
                  />
                </MotionDivDownToUp>
              </h1>
            </div>

            <div>
              <p className="desktop1:p-12 text-paragraph4 tablet1:font-bold">
                <MotionDivDownToUp>{heroParagraph}</MotionDivDownToUp>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
