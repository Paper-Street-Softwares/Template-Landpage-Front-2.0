import { Children } from "react";
import PropTypes from "prop-types";

export default function SectionContent({ children }) {
  SectionContent.propTypes = {
    children: PropTypes.any,
  };
  const childrenArray = Children.toArray(children);
  return (
    <div className="flex flex-wrap items-start justify-around w-full h-auto tablet1:justify-between">
      {childrenArray}
    </div>
  );
}
