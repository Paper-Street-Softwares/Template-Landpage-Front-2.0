import PropTypes from "prop-types";
import ImagesGallery from "../interactives/ImagesGallery";

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
		<div className= "flex w-100% justify-between items-center flex-col desktop1:flex-row phone1:mt-[2%] tablet2:mt-[1%] desktop1:mt-[0.8%] desktop3:w-[100%] ">
			<div className=" w-[100%] gap-[10%] desktop1:w-[41.5%] desktop3:w-[50%]">
				<h3 className='mb-[6.3%] size-[103.7%] phone2:size-[97.3%] phone2:mb-[5.8%] phone3:size-[100.2%] phone3:mb-[5.3%] phone3:text-paragraph4 phone3:leading-[27%] tablet1:mb-[3.5%] tablet2:size-[100.1%] tablet2:mb-[3%] text-quaternary font-medium text-paragraph3 leading-[24%] desktop1:size-[34.1%] desktop1:mb-[5.2%] desktop3:text-paragraph4 desktop3:size-[23.7%] desktop3:mb-[5%] '>{articleSubtitle}</h3>
				<h1 className=' mb-[0%] size-[103.7%] phone2:size-[100.3%] phone2:mb-[5%] phone3:size-[100.2%] phone3:mb-[0%] font-medium text-title2 leading-[150%] text-primary phone3:text-title5 tablet1:size-[100.1%] tablet1:font-medium tablet1:text-title4 desktop1:size-[99.8%] desktop1:mb-[0%] desktop3:size-[92.6%] desktop3:mb-[4%]'>{articleTitle}</h1>
				<p className=' size-[103.7%]  text-quaternary font-normal text-paragraph3 leading-[150%] phone2:w-[96%] phone3:size-[100.2%] phone3:text-paragraph4 tablet1:text-paragraph3 tablet1:size-[100.1%] desktop1:text-paragraph2 desktop1:size-[99.8%] desktop3:text-paragraph3 desktop3:size-[75.5%] mb-6'>{articleParagraphfirst}</p>
				<p className=" size-[103.7%] text-quaternary font-normal text-paragraph3 leading-[150%] phone2:size-[100.3%] phone2:w-[100%] phone3:size-[100.2%] phone3:text-paragraph4 tablet1:text-paragraph3 tablet1:size-[100.1%] desktop1:text-paragraph2 desktop1:size-[99.8%] desktop2:text-paragraph3 desktop3:size-[79%] desktop3:pt-[3%] ">{articleParagraphTwo}</p>
			</div>
			<div className="flex justify-center mt-[8%] w-[103.7%] phone2:w-[100.5%] phone3:w-[100.2%] phone3:mt-[5%] tablet1:size-[100.1%] tablet1:mt-[4%] tablet2:mt-[4%] desktop1:w-[43.5%] desktop3:size-[60%] desktop3:w-[50%] desktop3:mb-[3%]">
				 <div>
					<ImagesGallery />
				 </div>
			</div>
        </div>
	)
}

export default Article