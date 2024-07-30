import ArticleGrid from "@/components/ArticleGrid";
import SearchAndSort from "@/components/SearchAndSort";
import SwipeableArticleCard from "@/components/SwipeableArticleCard";
import { useArticleData } from "@/hook/useAricleData";
import { Article } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [query] = useState<string>("latest");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [likedArticles, setLikedArticles] = useState<string[]>([]);
  const [dislikedArticles, setDislikedArticles] = useState<string[]>([]);
  const articles: Article[] = useArticleData(query)
    .filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortDirection === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

  useEffect(() => {
    const liked = JSON.parse(localStorage.getItem("likedArticles") || "[]");
    const disliked = JSON.parse(
      localStorage.getItem("dislikedArticles") || "[]"
    );
    setLikedArticles(liked);
    setDislikedArticles(disliked);
  }, []);

  useEffect(() => {
    localStorage.setItem("likedArticles", JSON.stringify(likedArticles));
  }, [likedArticles]);

  useEffect(() => {
    localStorage.setItem("dislikedArticles", JSON.stringify(dislikedArticles));
  }, [dislikedArticles]);

  const handleSwipe = (direction: string, article: Article) => {
    if (direction === "right") {
      setLikedArticles([...likedArticles, `${article.title}`]);
      setDislikedArticles(
        dislikedArticles.filter((id) => id !== `${article.title}`)
      );
    } else if (direction === "left") {
      setDislikedArticles([...dislikedArticles, `${article.title}`]);
      setLikedArticles(likedArticles.filter((id) => id !== `${article.title}`));
    }
  };

  return (
    <main className="bg-white h-screen w-screen overflow-scroll">
      <div className="container mx-auto p-4">
        <header>
          <h1 className="text-black text-center text-2xl font-bold">News App</h1>
        </header>
        <SearchAndSort
          onSearchChange={setSearchTerm}
          onSortChange={setSortDirection}
          sortDirection={sortDirection}
        />
        <div className="news-feed md:hidden">
          <SwipeableArticleCard articles={articles} />
        </div>
        <div className="hidden md:block">
          <ArticleGrid articles={articles} />
        </div>
      </div>
    </main>
  );
}
