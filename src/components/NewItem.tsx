import React from "react";
import { Link } from "react-router-dom";
import { ArticleT } from "../routes/articles";

interface Props {
  item: ArticleT;
}

const NewItem: React.FC<Props> = ({ item: { title, id, imageUrl } }) => {
  return (
    <div className="new">
      <Link title="Ver mas" to={`/blogs/${id}`}>
        <i className="fas fa-expand-alt"></i>
      </Link>
      <img
        style={{
          width: "300px",
        }}
        src={imageUrl}
        alt=""
      />
      <h4>{title}</h4>
    </div>
  );
};

export default NewItem;
