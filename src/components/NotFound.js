import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <div>404: page not found</div>
      <p>
        Requested path:
        <code className="rounded bg-slate-700">{location.pathname}</code>
      </p>
    </>
  );
};

export default NotFound;
