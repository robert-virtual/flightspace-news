import { FC, useEffect, useState } from "react";
import { api } from "..";
import NewItem from "../components/NewItem";
import { ArticleT } from "./articles";

export const Blogs: FC = () => {
  useEffect(() => {
    fetchBlogs();
  }, []);
  const [blogs, setBlogs] = useState<ArticleT[]>([]);
  async function fetchBlogs() {
    const res = await fetch(`${api}/blogs`);
    const data = await res.json();
    setBlogs(data);
  }
  return (
    <div className="container">
      <h2>Blogs</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "1rem",
        }}
      >
        {blogs.map((item) => (
          <NewItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
