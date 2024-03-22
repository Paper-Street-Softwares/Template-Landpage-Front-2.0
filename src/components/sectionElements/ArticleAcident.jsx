import PropTypes from "prop-types";

function ArticleAcident(props) {
  const articleTitle = props.articleTitle;
  const articleSubtitle = props.articleSubtitle;
  const articleParagraphOne = props.articleParagraphOne;
  const articleParagraphTwo = props.articleParagraphTwo;
  const articleParagraphThree = props.articleParagraphThree;


  ArticleAcident.propTypes = {
    articleTitle: PropTypes.any,
    articleSubtitle: PropTypes.any,
    articleParagraphOne: PropTypes.any,
    articleParagraphTwo: PropTypes.any,
    articleParagraphThree: PropTypes.any,

  };

  return (
    <div className=" desktop1:flex desktop1:flex-row desktop1:items-center desktop1:justify-between">
        <div className="desktop1:w-[100%] desktop3:w-[100%]">
          <h3 className="text-quaternary flex items-center phone1:w-[100%] phone2:h-[24px] phone1:font-medium phone1:text-paragraph3 leading-[21px] phone3:text-paragraph4 phone3:leading-6 desktop1:w-[131px]">
            {articleSubtitle}
          </h3>
          <h1 className="  text-primary flex items-center phone1:w-[100%] phone1:font-medium phone1:text-title2 phone3:text-title2  tablet1:text-title4">
            {articleTitle}
          </h1>
          <div className=" text-quaternary phone1:w-[100%] phone1:font-normal phone1:text-paragraph3 phone1:leading-[21px] desktop3:w-[100%]">
              <p className=" phone1:pt-[0%] phone2:pt-[0%] phone3:pt-[4%] tablet2:pt-[2%] desktop3:pt-[2%]">{articleParagraphOne}</p>
              <p className="phone1:pt-[2%] tablet2:pt-[1%] desktop3:pt-[3%]">{articleParagraphTwo}</p>
              <p className="phone1:pt-[2%] tablet2:pt-[1%] desktop3:pt-[3%]">{articleParagraphThree}</p>
          </div>
        </div>
    </div>
  );
}

export default ArticleAcident;
