import { Outlet, Link } from "react-router-dom";
import Avatar from "./components/ui/avatar";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white-900 text-green-900 w-full fixed top-0 z-10">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/anouncement">Anouncement</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/developers">Developers</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            MMSU Connects
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/anouncement">Announcement</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/developers">Developers</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/profile">
            <Avatar />
          </Link>
        </div>
      </div>
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
