import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "..";
import { ArticleT } from "./articles";

const Blog: FC = () => {
  const [blog, setBlog] = useState<ArticleT>();
  const { id } = useParams();
  useEffect(() => {
    fetchBlog();
  }, []);
  async function fetchBlog() {
    const res = await fetch(`${api}/blogs/${id}`);
    const data = await res.json();
    setBlog(data);
  }

  return (
    <div className="container">
      <h2>{blog?.title}</h2>
      <span>From {blog?.newsSite}</span>
      <br />
      <a href={blog?.url}>ir a la fuente</a>
      <img
        style={{
          width: "80vw",
        }}
        src={blog?.imageUrl}
        alt={blog?.title}
      />
      <p>{blog?.summary}</p>
    </div>
  );
};

export default Blog;
