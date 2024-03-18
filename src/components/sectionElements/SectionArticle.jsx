import PropTypes from "prop-types";

function Article(props) {
	const articleTitle = props.articleTitle;
	const articleSubtitle = props.articleSubtitle;
	const articleParagraphfirst = props.articleParagraphfirst;
	const articleParagraphTwo = props.articleParagraphTwo;
    const articleImage = props.articleImage;
    
	

	Article.propTypes = {
		articleTitle: PropTypes.any,
		articleSubtitle: PropTypes.any,
		articleParagraphfirst: PropTypes.any,
		articleParagraphTwo: PropTypes.any,
		articleImage: PropTypes.any,
        
		
	  };

	
	return (
		<div className= "flex w-100% justify-between items-center flex-col desktop1:flex-row phone1:pt-[5%] ">
			<div className="  w-[100%] gap-[10%] desktop1:w-[32%] desktop2:w-[47%] desktop3:w-[60%]">
				<h3 className='pb-[3%] text-quaternary font-medium text-paragraph3 leading-[24%] phone3:pb-[2%] phone3:text-paragraph4 phone3:leading-[27%] desktop1:pb-[3%]'>{articleSubtitle}</h3>
				<h1 className='ont-medium text-title2 leading-[150%] text-primary phone3:text-title5 tablet1:font-medium tablet1:text-title4'>{articleTitle}</h1>
				<p className=' text-quaternary font-normal text-paragraph3 leading-[150%] phone3:text-paragraph4 tablet1:text-paragraph3 desktop1:text-paragraph2 desktop2:text-paragraph3 desktop3:size-[79%]'>{articleParagraphfirst}</p>
				<p className=" flex pt-[5%] text-quaternary font-normal text-paragraph3 leading-[150%] phone3:text-paragraph4 tablet1:text-paragraph3 desktop1:text-paragraph2 desktop2:text-paragraph3 desktop3:size-[79%] ">{articleParagraphTwo}</p>
                
			</div>
			<div className="flex justify-center mt-[8%] w-[103.7%] phone2:w-[100.5%] phone3:w-[100.2%] phone3:mt-[5%] tablet1:size-[100.1%] tablet1:mt-[4%] tablet2:mt-[4%] desktop1:w-[43.5%] desktop3:size-[60%] desktop3:w-[50%] desktop3:mb-[3%]">{articleImage}
				 
			</div>
        </div>
	)
}

export default Article