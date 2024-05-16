import PropTypes from "prop-types";

export default function FeatureImgOnBgCard(props) {
  const { bgImg, title, description } = props;

  FeatureImgOnBgCard.propTypes = {
    bgImg: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
  };

  return (
    <div
      className="h-[464px] w-[100%]  tablet1:w-[47%] desktop1:w-[22%] bg-blue-500 rounded-2xl p-[10px] flex flex-col justify-end bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="w-full h-auto bg-white rounded-2xl p-[20px] gap-[18px] flex flex-col">
        <h3 className="font-mainFont font-medium text-[26px] desktop1:text-paragraph5 desktop2:text-[26px]">
          {title}
        </h3>
        <p className="font-secondFont text-paragraph4 text-quaternary">
          {description}
        </p>
      </div>
    </div>
  );
}
