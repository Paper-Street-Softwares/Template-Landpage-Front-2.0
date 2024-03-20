import PropTypes from "prop-types";

function SectionArticle(props) {
  const articleTitle = props.articleTitle;
  const articleSubtitle = props.articleSubtitle;
  const articleParagraphfirst = props.articleParagraphfirst;
  const articleParagraphTwo = props.articleParagraphTwo;
  const articleParagraphThree = props.articleParagraphThree;
  const articleImage = props.articleImage;

  SectionArticle.propTypes = {
    articleTitle: PropTypes.any,
    articleSubtitle: PropTypes.any,
    articleParagraphfirst: PropTypes.any,
    articleParagraphTwo: PropTypes.any,
    articleParagraphThree: PropTypes.any,
    articleImage: PropTypes.any,
  };

  return (
    <div className="flex w-100% justify-between items-center flex-col desktop1:flex-row phone1:pt-[5%] desktop1:pt-[0%] ">
      <div className="  w-[100%] gap-[5%] desktop1:w-[200%] desktop3:w-[200%]">
        <h3 className=" text-quaternary font-medium text-paragraph3 leading-[24%] phone2:pb-[5%] phone3:text-paragraph4 phone3:leading-[27%] tablet1:pb-[3%] desktop1:text-paragraph4 desktop1:pt-[2%]">
          {articleSubtitle}
        </h3>
        <h1 className=" pt-[3%] font-medium text-title2 leading-[150%] text-primary tablet2:mb-[-2%] desktop1:text-title4 desktop1:size-[120%] desktop3:pt-[3%] ">
          {articleTitle}
        </h1>
        <p className=" phone1:pt-[5%] text-quaternary font-normal text-paragraph3 leading-[150%] desktop1:size-[104%] desktop3:size-[90%] desktop3:pt-[3%]">
          {articleParagraphfirst}
        </p>
        <p className=" flex pt-[4%] text-quaternary font-normal text-paragraph3 leading-[150%] desktop1:size-[100%] desktop3:size-[90%] desktop3:pt-[3%] ">
          {articleParagraphTwo}
        </p>
        <p className=" flex pt-[4%] text-quaternary font-normal text-paragraph3 leading-[150%] desktop1:size-[100%] desktop3:size-[90%] desktop3:pt-[3%]">
          {articleParagraphThree}
        </p>
      </div>
      <div className="flex justify-center mt-[0%] w-[103.7%] phone2:w-[100.5%] phone3:w-[100.2%] phone3:mt-[5%] tablet1:size-[100.1%] tablet1:mt-[2%] tablet2:mt-[3%] desktop1:w-[50%] desktop1:mt-[8%]  desktop3:size-[60%] desktop3:w-[50%]">
        {articleImage}
      </div>
    </div>
  );
}

export default SectionArticle;
