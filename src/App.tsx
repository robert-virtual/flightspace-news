import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav
        style={{
          position: "sticky",
          top: 0,
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
          backgroundColor: "#222",
        }}
      >
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to="/"
        >
          Flights App (react router v6)
        </Link>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "50%",
          }}
        >
          <Link className="text-light" to="/articles">
            Articles
          </Link>
          <Link className="text-light" to="/blogs">
            Blogs
          </Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
