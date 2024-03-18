import PropTypes from "prop-types";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";

export default function ImgAndButtonsCard(props) {
  const { img, button1Label, button1Link } = props;

  ImgAndButtonsCard.propTypes = {
    img: PropTypes.any,
    button1Label: PropTypes.any,
    button1Link: PropTypes.any,
  };

  return (
    <div className="w-full phone3:w-[45%] desktop1:w-[23%]  bg-white p-[15px] my-[14px] rounded-[10px] flex flex-col gap-[15px]">
      <div className="flex justify-center items-center h-[125px] phone3:h-[80px] tablet1:h-[125px]">
        <MotionDivLeftToRight>
          <img src={img} alt="hthLogo" className="max-h-[90px] max-w-[150px]" />
        </MotionDivLeftToRight>
      </div>

      <a href={button1Link} target="_blank" className="w-full">
        <button className="text-white bg-red-700 rounded-[10px] text-paragraph3 py-[8px] px-[31px] font-mainFont font-medium w-full transition hover:bg-red-900">
          <MotionDivLeftToRight>{button1Label}</MotionDivLeftToRight>
        </button>
      </a>
    </div>
  );
}
