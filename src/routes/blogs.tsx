import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "..";
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
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        }}
      >
        {blogs.map(({ title, id, imageUrl }) => (
          <div key={id}>
            <img
              style={{
                width: "300px",
              }}
              src={imageUrl}
              alt=""
            />
            <h2>{title}</h2>
            <Link to={`/blogs/${id}`}>Ver mas</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};
