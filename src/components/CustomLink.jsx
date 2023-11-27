import { Link, useRouteMatch } from "react-router-dom";

const CustomLink = ({ to, label, activeOnlyWhenExact }) => {
  
  const match = useRouteMatch({
    path: activeOnlyWhenExact ? to : to + "(.*)",
    exact: activeOnlyWhenExact,
  });

  return (
    <Link
      to={to}
      className={`${
        match ? "active-link" : ""
      } text-decoration-none my-1 text-white fs-20`}
    >
      {label}
    </Link>
  );
};

export default CustomLink;
