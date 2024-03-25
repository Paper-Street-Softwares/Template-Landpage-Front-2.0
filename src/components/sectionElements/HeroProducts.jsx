import PropTypes from "prop-types";

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
    <div className="flex flex-col text-center text-white desktop1:gap-10 justify-evenly desktop1:flex-row">
      <div>
        <h1 className="font-bold text-title1 desktop1:text-start whitespace-nowrap">
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
  );
}
