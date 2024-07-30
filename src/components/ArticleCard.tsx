import { ArticleCardProps } from "@/types";
import React from "react";

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { title, description, url, source, publishedAt, urlToImage } = article;

  return (
    <div className="bg-white md:shadow-lg border rounded-lg p-4 mb-4 md:mb-0 hover:bg-gray-100">
      <h2 className="text-xl font-bold text-black">{title}</h2>
      {urlToImage && (
        <img
          src={urlToImage}
          alt="Image description"
          width={500}
          height={300}
        />
      )}
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-600">Source : {source?.name ?? source}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Read more
      </a>
    </div>
  );
};

export default ArticleCard;
