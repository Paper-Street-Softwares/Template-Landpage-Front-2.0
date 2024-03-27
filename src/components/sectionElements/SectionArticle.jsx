import PropTypes from "prop-types";

function SectionArticle(props) {
  const articleTitle = props.articleTitle;
  const articleSubtitle = props.articleSubtitle;
  const articleParagraphOne = props.articleParagraphOne;
  const articleParagraphTwo = props.articleParagraphTwo;
  const articleParagraphThree = props.articleParagraphThree;

  SectionArticle.propTypes = {
    articleTitle: PropTypes.any,
    articleSubtitle: PropTypes.any,
    articleParagraphOne: PropTypes.any,
    articleParagraphTwo: PropTypes.any,
    articleParagraphThree: PropTypes.any,
  };

  return (
    <div className=" desktop1:flex desktop1:flex-row desktop1:items-center desktop1:justify-between desktop1:gap-[10%]">
      <div className=" gap-[10px] phone1:w-[100%] ">
        <h3 className="hidden flex items-center phone1:w-[100%] desktop1:w-[131px] phone1:font-medium phone1:text-paragraph3 leading-[21px] phone3:text-paragraph4 phone3:leading-6  text-quaternary">
          {articleSubtitle}
        </h3>
        <h1 className=" flex items-center phone1:w-[100%] phone1:font-medium text-title2 phone1:leading-[33px] phone3:leading-[54px] tablet1:text-title4 tablet1:leading-[45px] text-primary">
          {articleTitle}
        </h1>
        <div className=" phone1:w-[100%] phone1:font-normal phone1:text-paragraph3 phone1:leading-[21px] text-quaternary desktop3:w-full">
          <p className="pt-[0%] desktop3:pt-[2%]">{articleParagraphOne}</p>
          <p className="pt-[2%]">{articleParagraphTwo}</p>
          <p className="pt-[2%]">{articleParagraphThree}</p>
        </div>
      </div>

      <div className=" mt-[10%] tablet1:mt-[5%]">
        <div className=""></div>
      </div>
    </div>
  );
}

export default SectionArticle;
