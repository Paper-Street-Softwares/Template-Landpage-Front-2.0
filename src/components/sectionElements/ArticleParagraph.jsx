import { Children } from "react";
export default function ArticleParagraph ({ children }) {
    ArticleParagraph.propTypes = {
        children: PropTypes.any,
      };
      const childrenArray = Children.toArray(children);
    return (
        <div className="text-quaternary font-normal text-paragraph3 leading-[150%] phone3:text-paragraph4 tablet1:text-paragraph3 desktop1:text-paragraph2 desktop2:text-paragraph3">
            {childrenArray}
        </div>
    );
}