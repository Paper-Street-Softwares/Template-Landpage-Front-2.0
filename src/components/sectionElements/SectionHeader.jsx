import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import PropTypes from "prop-types";

export default function SectionHeader(props) {
  const sectionHeaderTitleFirst = props.sectionHeaderTitleFirst;
  const sectionHeaderTitleSecond = props.sectionHeaderTitleSecond;
  const sectionHeaderDescription = props.sectionHeaderDescription;

  SectionHeader.propTypes = {
    sectionHeaderTitleFirst: PropTypes.string,
    sectionHeaderTitleSecond: PropTypes.string,
    sectionHeaderDescription: PropTypes.string,
  };

  return (
    <div className="flex flex-col items-center pb-3 mb-3">
      <div className="w-[79%] flex flex-col justify-center font-poppins text-title1 phone1:text-title2 phone3:text-title5 text-center font-bold ">
        <MotionDivLeftToRight>{sectionHeaderTitleFirst}</MotionDivLeftToRight>
      </div>
      <div className="w-[79%] flex flex-col justify-center font-poppins text-primary text-title1 phone1:text-title2 phone3:text-title5 text-center font-bold ">
        <MotionDivRightToLeft>{sectionHeaderTitleSecond}</MotionDivRightToLeft>
      </div>
      <div className="w-full h-px mt-6 mb-6 bg-neutral-200"></div>
      <div className="w-[79%] text-quaternary font-poppins text-paragraph3 phone3:text-paragraph4 text-center">
        <MotionDivLeftToRight>{sectionHeaderDescription}</MotionDivLeftToRight>
      </div>
    </div>
  );
}
