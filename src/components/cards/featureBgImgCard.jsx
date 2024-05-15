import PropTypes from "prop-types";
import bgHouse from "../../assets/cards/bgCardHouses.jpg";

export default function featureBgImgCard(props) {
  const { bgImg, title, description } = props;

  featureBgImgCard.propTypes = {
    bgImg: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
  };

  return (
    <div
      className="h-[464px] w-[100%]  tablet1:w-[47%] desktop1:w-[22%] bg-blue-500 rounded-2xl p-[10px] flex flex-col justify-end bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgHouse})` }}
    >
      <div className="w-full h-auto bg-white rounded-2xl p-[20px] gap-[18px] flex flex-col">
        <h3 className="font-mainFont font-medium text-[26px]">Casas</h3>
        <p className="font-secondFont text-paragraph4 text-quaternary">
          It is a long established fact that a reader will be aacted by the
          readable.
        </p>
      </div>
    </div>
  );
}
