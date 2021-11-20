import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <h2>Articles </h2>

      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        }}
      >
        {news.map(({ id, title, imageUrl }) => (
          <div key={id}>
            <img
              style={{
                width: "300px",
              }}
              src={imageUrl}
              alt={title}
            />
            <h4>{title}</h4>
            <p>
              <Link to={`/articles/${id}`}>Ver mas</Link>
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};
