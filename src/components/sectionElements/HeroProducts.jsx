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
    <div className="z-10 bg-red-500 full font-mainFont">
      <div
        className="w-full bg-green-500 bg-center bg-cover"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="bg-blue-500 h-36" />
        <div className="mx-auto bg-green-500 content">
          <div className="flex flex-col text-center text-white bg-yellow-500 justify-evenly desktop1:gap-10 desktop1:flex-row">
            <div>
              <h1 className="font-bold bg-green-500 text-title1 desktop1:text-start">
                <MotionDivUpToDown>{heroTitle}</MotionDivUpToDown>
              </h1>
              <h1 className="font-black bg-blue-600 text-title6 desktop1:text-start">
                <MotionDivDownToUp>
                  <img
                    className="h-20 p-2 bg-purple-500 rounded-md"
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
          <div className="h-4" />
        </div>
      </div>
    </div>
  );
}
