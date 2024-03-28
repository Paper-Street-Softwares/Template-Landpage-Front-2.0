import PropTypes from "prop-types";
import bgImage from "../../assets/importAssets/bg2.jpg"

export default function HeroProducts(props) {
  const heroTitle = props.heroTitle;
  const heroName = props.heroName;
  const heroParagraph = props.heroParagraph;

  HeroProducts.propTypes = {
    heroTitle: PropTypes.any,
    heroName: PropTypes.any,
    heroParagraph: PropTypes.any,
  }

  return (
    <div className="z-10 full font-mainFont">
      <div
        className="w-full bg-center bg-cover"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="h-36" />
        <div className="mx-auto content">
    <div className="flex flex-col text-center text-white justify-evenly desktop1:gap-10 desktop1:flex-row">
      <div>
        <h1 className="font-bold text-title1 desktop1:text-start">
          {heroTitle}
        </h1>
        <h1 className="font-black text-title6 desktop1:text-start">
          {heroName}
        </h1>
      </div>              
      <div className="">
        <p className="text-paragraph4 tablet1:font-bold">{heroParagraph}</p>
      </div>
  </div>
  <div className="h-4" />
        </div>
      </div>
    </div>
  );
}
