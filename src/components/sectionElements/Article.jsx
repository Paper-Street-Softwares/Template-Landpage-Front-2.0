import PropTypes from "prop-types";

function Article(props) {
	const articleTitle = props.articleTitle;
	const articleSubtitle = props.articleSubtitle;
	const articleParagraphfirst = props.articleParagraphfirst;
	const articleParagraphTwo = props.articleParagraphTwo;
	const articleImage = props.articleImage

	Article.propTypes = {
		articleTitle: PropTypes.any,
		articleSubtitle: PropTypes.any,
		articleParagraphfirst: PropTypes.any,
		articleParagraphTwo: PropTypes.any,
		articleImage: PropTypes.any,
	  };

	
	return (
		<div className= "flex w-100% justify-between items-center flex-col desktop1:flex-row phone1:pt-[5%] ">
			<div className=" w-[100%] gap-[10%] desktop1:w-[39%] desktop3:w-[60%]">
				<h3 className='pb-[3%] text-quaternary font-medium text-paragraph3 leading-[24%] phone3:pb-[2%] phone3:text-paragraph4 phone3:leading-[27%] desktop1:pb-[3%] '>{articleSubtitle}</h3>
				<h1 className='font-medium text-title2 leading-[150%] text-primary phone3:text-title5 tablet1:font-medium tablet1:text-title4'>{articleTitle}</h1>
				<p className='text-quaternary font-normal text-paragraph3 leading-[150%] phone3:text-paragraph4 tablet1:text-paragraph3 desktop1:text-paragraph2 desktop2:text-paragraph3 desktop3:size-[79%] mb-6'>{articleParagraphfirst}</p>
				<p className="text-quaternary font-normal text-paragraph3 leading-[150%] phone3:text-paragraph4 tablet1:text-paragraph3 desktop1:text-paragraph2 desktop2:text-paragraph3 desktop3:size-[79%] ">{articleParagraphTwo}</p>
			</div>
			<div className="flex justify-center pt-[8%] phone1:w-[100%] phone3:pt-[5%] tablet1:pt-[4%] tablet2:pt-[4%] desktop1:w-[55%] desktop3:size-[60%]">
				 <img className="size-[100%] desktop1:size-[95%] desktop1:pb-[5%] desktop3:pb-[9%] desktop3:size-[92%] desktop1:ml-[6%] desktop3:ml-[8%]" src= {articleImage} alt="" />
			</div>
        </div>
	)
}

export default Article