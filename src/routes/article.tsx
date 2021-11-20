import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "..";
import { ArticleT } from "./articles";

const Article: FC = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<ArticleT>();
  useEffect(() => {
    fetchArticle();
  }, []);

  async function fetchArticle() {
    const res = await fetch(`${api}/articles/${id}`);
    const data: ArticleT = await res.json();
    console.log(data);
    setArticle(data);
  }
  function formatDate(isoString?: string): string {
    if (isoString) {
      return new Date(isoString).toLocaleDateString();
    }
    return new Date().toLocaleDateString();
  }
  return (
    <div className="container">
      <h2>Article {article?.title}</h2>
      <p>From {article?.newsSite}</p>
      <img
        style={{
          width: "80vw",
        }}
        src={article?.imageUrl}
        alt=""
      />
      <p>{article?.summary}</p>
      <a href={article?.url} target="_blank" rel="noreferrer">
        Ver en el la fuente
      </a>
      <p>{formatDate(article?.publishedAt)}</p>
    </div>
  );
};

export default Article;
