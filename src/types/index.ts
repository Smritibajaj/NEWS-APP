export interface Article {
  title: string;
  description: string;
  url: string;
  source: { name: string };
  publishedAt: string;
  urlToImage?: string;
}
export interface ArticleCardProps {
  article: Article;
}
