import { Link, Route } from "react-router-dom";

const CustomLink = ({ to, label }) => (
  <Route
    path={to}
    exact
    children={({ match }) => (
      <Link
        to={to}
        className={`${match ? "active-link" : ""} text-decoration-none my-1 text-white fs-20`}
      >
        {label}
      </Link>
    )}
  />
);

export default CustomLink;