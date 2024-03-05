import { Children } from "react";
export default function ArticleSubtitle ({ children }) {
    ArticleSubtitle.propTypes = {
        children: PropTypes.any,
      };
      const childrenArray = Children.toArray(children);
    return (
        <div className="pb-[3%] text-quaternary font-medium text-paragraph3 leading-[24%] phone3:pb-[2%] phone3:text-paragraph4 phone3:leading-[27%] desktop1:pb-[3%]">
            {childrenArray}
        </div>
    );
}