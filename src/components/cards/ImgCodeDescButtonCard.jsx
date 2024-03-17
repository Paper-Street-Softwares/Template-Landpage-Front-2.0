import PropTypes from "prop-types";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";

export default function ImgCodeDescButtonCard(props) {
  const { img, button1Label, button1Link, description, code, category } = props;

  ImgCodeDescButtonCard.propTypes = {
    img: PropTypes.any,
    description: PropTypes.any,
    button1Label: PropTypes.any,
    button1Link: PropTypes.any,
    code: PropTypes.any,
    category: PropTypes.any,
  };

  return (
    <div className="w-full tablet1:w-[45%] desktop1:w-[25%] bg-white p-[15px] my-[14px] rounded-[10px] flex flex-col gap-[10px]">
      <MotionDivLeftToRight>
        <div className="flex justify-center items-center h-[200px] phone3:h-[200px] tablet1:h-[200px]">
          <img
            src={img}
            alt="hthLogo"
            className="max-h-[190px] max-w-[150px]"
          />
        </div>
      </MotionDivLeftToRight>
      <p className="font-medium text-left font-mainFont text-paragraph3 text-quaternary">
        <MotionDivLeftToRight>Código: {code}</MotionDivLeftToRight>
      </p>
      <h3 className="font-medium text-left text-black font-mainFont text-paragraph3">
        <MotionDivLeftToRight>Descrição</MotionDivLeftToRight>
      </h3>
      <p className="text-left font-mainFont text-paragraph3 text-quaternary">
        <MotionDivLeftToRight>{description}</MotionDivLeftToRight>
      </p>
      <a href={button1Link} target="_blank" className="w-full">
        <button className="text-white bg-red-700 rounded-[10px] py-[8px] px-[31px] font-mainFont font-medium w-full transition hover:bg-red-900">
          <MotionDivLeftToRight>{button1Label}</MotionDivLeftToRight>
        </button>
      </a>
    </div>
  );
}
