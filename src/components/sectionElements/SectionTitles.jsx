import PropTypes from "prop-types";
import { Children } from "react";

export default function SectionTitles({ children, className }) {
  SectionTitles.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };
  const childrenArray = Children.toArray(children);
  return <div className={`text-title4 ${className}`}>{childrenArray}</div>;
}
