// lib/api.ts
import axios from "axios";

const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const GUARDIAN_API_KEY = process.env.NEXT_PUBLIC_GUARDIAN_API_KEY;

const fetchNewsArticles = async (query: string) => {
  const response = await axios.get(`https://newsapi.org/v2/everything`, {
    params: {
      q: query,
      apiKey: NEWS_API_KEY,
    },
  });
  return response.data.articles;
};

const fetchGuardianArticles = async (query: string) => {
  const response = await axios.get(`https://content.guardianapis.com/search`, {
    params: {
      q: query,
      "api-key": GUARDIAN_API_KEY,
    },
  });
  return response.data.response.results;
};

export { fetchNewsArticles, fetchGuardianArticles };
