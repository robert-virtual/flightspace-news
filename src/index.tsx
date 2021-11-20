import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./App";
import Article from "./routes/article";
import { Articles } from "./routes/articles";
import Blog from "./routes/blog";
import { Blogs } from "./routes/blogs";
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
          <main className="container">
            <h2>Ruta no implementada</h2>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
