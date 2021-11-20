import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewItem from "../components/NewItem";
import { api } from "../index";

export interface ArticleT {
  id: number;
  imageUrl: string;
  newsSite: string;
  publishedAt: string;
  title: string;
  summary: string;
  url: string;
}

export const Articles: FC = () => {
  const [news, setNews] = useState<ArticleT[]>([]);
  useEffect(() => {
    fetchArticles();
  }, []);
  async function fetchArticles() {
    const res = await fetch(api + "/articles");
    const data: ArticleT[] = await res.json();
    console.log(data);
    setNews(data);
  }
  return (
    <div className="container">
      <h2>Articles</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "1rem",
        }}
      >
        {news.map((item) => (
          <NewItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
