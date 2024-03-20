import PropTypes from "prop-types";

function Article(props) {
	
	const articleTitle = props.articleTitle;
	const articleSubtitle = props.articleSubtitle;
	const articleParagraphfirst = props.articleParagraphfirst;
	const articleParagraphTwo = props.articleParagraphTwo;
	const articleParagraphThree = props.articleParagraphThree;
    const articleImage = props.articleImage;
    
	

	Article.propTypes = {
		
		articleTitle: PropTypes.any,
		articleSubtitle: PropTypes.any,
		articleParagraphfirst: PropTypes.any,
		articleParagraphTwo: PropTypes.any,
		articleParagraphThree: PropTypes.any,
		articleImage: PropTypes.any,
        
		
	  };

	
	return (
		<div className= "flex w-100% justify-between items-center flex-col desktop1:flex-row phone1:pt-[5%] ">
			<div className="  w-[100%] gap-[5%] desktop1:w-[510%] desktop2:w-[100%] desktop3:w-[100%]">
				<h3 className='pb-[3%] text-quaternary font-medium text-paragraph3 leading-[24%] phone3:pb-[2%] phone3:text-paragraph4 phone3:leading-[27%] desktop1:text-paragraph4 desktop1:pb-[3%]'>{articleSubtitle}</h3>
				<h1 className='font-medium text-title2 leading-[150%] text-primary tablet2:mb-[-2%] desktop1:text-title4 desktop1:size-[130%] '>{articleTitle}</h1>
				<p className=' phone1:pt-[5%] text-quaternary font-normal text-paragraph3 leading-[150%] desktop2:size-[120%]'>{articleParagraphfirst}</p>
				<p className=" flex pt-[4%] text-quaternary font-normal text-paragraph3 leading-[150%] desktop2:size-[130%] ">{articleParagraphTwo}</p>
                <p className=" flex pt-[4%] text-quaternary font-normal text-paragraph3 leading-[150%] desktop2:size-[130%] ">{articleParagraphThree}</p>

			</div>
			<div className="flex justify-center mt-[8%] w-[103.7%] phone2:w-[100.5%] phone3:w-[100.2%] phone3:mt-[5%] tablet1:size-[100.1%] tablet1:mt-[4%] tablet2:mt-[4%] desktop1:w-[43.5%] desktop3:size-[60%] desktop3:w-[50%] desktop3:mb-[3%]">{articleImage}
				 
			</div>
        </div>
	)
}

export default Article