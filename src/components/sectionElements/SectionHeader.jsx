import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import PropTypes from "prop-types";
import SectionTitles from "./SectionTitles";
import SectionSubtitles from "./SectionSubtitles";

export default function SectionHeader(props) {
  const sectionHeaderTitle = props.sectionHeaderTitle;
  const sectionHeaderSubtitle = props.sectionHeaderSubtitle;
  const className = props.className;

  SectionHeader.propTypes = {
    sectionHeaderTitle: PropTypes.any,
    sectionHeaderSubtitle: PropTypes.any,
    className: PropTypes.any,
  };

  return (
    <div
      className={`w-[90%] tablet1:w-[80%] desktop1:w-[60%] max-w-[729px] ${className}`}
    >
      <SectionTitles>{sectionHeaderTitle}</SectionTitles>
      <SectionSubtitles>{sectionHeaderSubtitle}</SectionSubtitles>
    </div>
  );
}
