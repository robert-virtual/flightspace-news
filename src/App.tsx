import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="top">
        <Link title="Flights App" className="brand" to="/">
          <i className="fas fa-space-shuttle"></i>
        </Link>
        <div className="links">
          <NavLink
            title="articles"
            style={{
              textDecoration: "none",
            }}
            className={({ isActive }) => (isActive ? "current" : "")}
            to="/articles"
          >
            <i className="fas fa-newspaper"></i>
          </NavLink>
          <NavLink
            title="blogs"
            style={{
              textDecoration: "none",
            }}
            className={({ isActive }) => (isActive ? "current" : "")}
            to="/blogs"
          >
            <i className="fab fa-blogger"></i>
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
