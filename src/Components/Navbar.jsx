import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to={"/"}>
          <h1>Personal-BookShelf</h1>
        </Link>
      </div>
      <div className="nav-right">
        <Link to={"/bookshelf"}>
          <h3>My BookShelf</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
