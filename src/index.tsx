import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import App from "./App";
import Article from "./routes/article";
import { Articles } from "./routes/articles";
import Blog from "./routes/blog";
import { Blogs } from "./routes/blogs";
import "./index.css";
export const api = "https://api.spaceflightnewsapi.net/v3";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Articles />} />
        <Route path="articles" element={<Articles />} />
        <Route path="articles/:id" element={<Article />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<Blog />} />
      </Route>

      {/* default */}
      <Route
        path="*"
        element={
          <main className="container mt-4">
            <Link to="/" className="btn btn-primary">
              Inicio
            </Link>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
