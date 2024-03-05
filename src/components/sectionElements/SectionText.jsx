import ArticleSubtitle from "./ArticleSubtitle";
import ArticleParagraph from "./ArticleParagraph";
import ArticleTitle from "./ArticleTitle";

export default function SectionText () {
      return (
        <div className="flex w-full justify-between items-center flex-col desktop1:flex-row phone1:pt-[5%]">
            <ArticleSubtitle />
            <ArticleTitle />
            <ArticleParagraph />
        </div>
      )
}