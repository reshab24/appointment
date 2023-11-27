import React from "react";
import CustomLink from "./CustomLink";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-auto col-md-3 col-xl-2 px-0 side-bar" >
            <div className="d-flex px-3 pt-4 min-vh-100">
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 text-white"
              >
                <li className="text-white">
                  <CustomLink to="/" label="Home" />
                </li>
                <li className="text-white">
                  <CustomLink to="/appointment" label="Add" />
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div className="col py-3">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
