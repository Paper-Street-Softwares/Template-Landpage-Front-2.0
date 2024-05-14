import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import PropTypes from "prop-types";
import SectionTitles from "./SectionTitles";

export default function SectionHeader(props) {
  const sectionHeaderTitle = props.sectionHeaderTitle;
  const sectionHeaderSubtext = props.sectionHeaderSubtext;
  const className = props.className;

  SectionHeader.propTypes = {
    sectionHeaderTitle: PropTypes.any,
    sectionHeaderSubtext: PropTypes.any,
    className: PropTypes.any,
  };

  return (
    <div
      className={`bg-green-500 w-[90%] tablet1:w-[80%] desktop1:w-[60%] max-w-[729px] ${className}`}
    >
      <SectionTitles>{sectionHeaderTitle}</SectionTitles>
    </div>
  );
}
