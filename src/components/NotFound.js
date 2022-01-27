import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="text-center">
      <h1 className="my-4 text-3xl">404: page not found</h1>
      <p className="text-lg">
        Requested path:
        <code className="mx-2 rounded dark:bg-slate-700 bg-slate-400">
          {location.pathname}
        </code>
      </p>
    </div>
  );
};

export default NotFound;
