import "../index.css";
import { Link } from "react-router-dom";
import {
  CogIcon,
  InformationCircleIcon,
  CodeIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2 rounded-b dark:bg-slate-700 bg-slate-300 flex-0 md:gap-4 md:justify-start">
      <Link to="/" className="pr-2 text-2xl">
        typistt
      </Link>
      <Link
        to="quote"
        className="p-1 duration-200 rounded hover:bg-slate-400 dark:hover:bg-slate-800 hover:transition-all"
      >
        quote
      </Link>
      <Link
        to="words"
        className="p-1 duration-200 rounded hover:bg-slate-400 dark:hover:bg-slate-800 hover:transition-all"
      >
        words
      </Link>
      <Link
        to="custom"
        className="p-1 duration-200 rounded hover:bg-slate-400 dark:hover:bg-slate-800 hover:transition-all"
      >
        custom
      </Link>
      <div className="select-none">|</div>
      <Link
        to="settings"
        className="p-1 duration-200 rounded hover:bg-slate-400 dark:hover:bg-slate-800 hover:transition-all"
      >
        <CogIcon className="w-5 h-5" />
      </Link>
      <Link
        to="about"
        className="p-1 duration-200 rounded hover:bg-slate-400 dark:hover:bg-slate-800 hover:transition-all"
      >
        <InformationCircleIcon className="w-5 h-5" />
      </Link>
      <a
        href="https://github.com/BasicPixel/typistt"
        target="_blank"
        rel="noreferrer"
        className="p-1 duration-200 rounded hover:bg-slate-400 dark:hover:bg-slate-800 hover:transition-all"
      >
        <CodeIcon className="w-5 h-5" />
      </a>
    </div>
  );
};

export default Navbar;
