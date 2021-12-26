import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="dark:bg-slate-700 bg-slate-300 flex-0 rounded-b p-2 flex items-center md:gap-4 md:justify-start justify-between">
      <Link to="/" className="text-2xl pr-2">
        typistt
      </Link>
      <Link
        to="quote"
        className="hover:bg-slate-800 hover:transition-all duration-200 rounded p-1"
      >
        quote
      </Link>
      <Link
        to="words"
        className="hover:bg-slate-800 hover:transition-all duration-200 rounded p-1"
      >
        words
      </Link>
      <Link
        to="custom"
        className="hover:bg-slate-800 hover:transition-all duration-200 rounded p-1"
      >
        custom
      </Link>
      <div className="select-none">|</div>
      <Link
        to="settings"
        className="hover:bg-slate-800 hover:transition-all duration-200 rounded p-1"
      >
        settings
      </Link>
      <Link
        to="about"
        className="hover:bg-slate-800 hover:transition-all duration-200 rounded p-1"
      >
        about
      </Link>
      <a
        href="https://github.com/BasicPixel"
        target="_blank"
        rel="noreferrer"
        className="hover:bg-slate-800 hover:transition-all duration-200 rounded p-1"
      >
        github
      </a>
    </div>
  );
};

export default Navbar;
