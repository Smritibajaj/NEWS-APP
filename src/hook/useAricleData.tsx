import { useQuery } from "@tanstack/react-query";
import { fetchGuardianArticles, fetchNewsArticles } from "@/utils/api";
import { Article } from "@/types";

// Define the type of the query parameter. It could be string or something more complex based on your use case.
type QueryType = string;

export function useArticleData(query: QueryType): Article[] {
  // Fetching news articles
  const { data: newsData } = useQuery({
    queryKey: ["newsArticles", query],
    queryFn: () => fetchNewsArticles(query),
  });

  // Fetching Guardian articles
  const { data: guardianData } = useQuery({
    queryKey: ["guardianArticles", query],
    queryFn: () => fetchGuardianArticles(query),
  });

  // Combine and map the data into a unified format
  const articles: Article[] = [
    ...(newsData || []),
    ...(guardianData
      ? guardianData.map((result: any) => ({
          id: result.id,
          title: result.webTitle,
          description: result.fields?.trailText || "No description available",
          url: result.webUrl,
          source: "The Guardian",
          publishedAt: result.webPublicationDate,
        }))
      : []),
  ];

  return articles;
}
