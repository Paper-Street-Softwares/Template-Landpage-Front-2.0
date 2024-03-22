import { Children } from "react";
import PropTypes from "prop-types";

function AcidentComponent({ children }) {
  AcidentComponent.propTypes = {
    children: PropTypes.any,
  };
  const childrenArray = Children.toArray(children);
  return (
    <div className=" desktop1:flex desktop1:flex-row desktop1:items-center desktop1:justify-between desktop1:gap-[0%]">
        <div className="desktop1:w-[100%] desktop3:w-[100%]">
        {childrenArray}
      </div>
    </div>
  );
};
export default AcidentComponent