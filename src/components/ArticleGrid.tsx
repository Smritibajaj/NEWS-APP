import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types";

const ArticleGrid = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleGrid;
