import { Children } from "react";
export default function ArticleTitle ({ children }) {
    ArticleTitle.propTypes = {
        children: PropTypes.any,
      };
      const childrenArray = Children.toArray(children);
    return (
        <div className="font-medium text-title2 leading-[150%] text-primary phone3:text-title5 tablet1:font-medium tablet1:text-title4">
            {childrenArray}
        </div>
    );
}