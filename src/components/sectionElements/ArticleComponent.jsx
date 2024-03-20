import { Children } from "react";
import PropTypes from "prop-types";

function ArticleComponent({ children }) {
  ArticleComponent.propTypes = {
    children: PropTypes.any,
  };
  const childrenArray = Children.toArray(children);
  return (
    <div className="flex w-100% justify-between items-center flex-col desktop1:flex-row phone1:pt-[5%] desktop3:w-[100%] ">
      <div className="  w-[100%] gap-[5%] desktop1:w-[100%] desktop2:w-[100%]">
        {childrenArray}
      </div>
    </div>
  );
}
export default ArticleComponent;