import React from "react";
import CustomLink from "./CustomLink";

const Layout = ({ children }) => {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xl-2 side-bar" >
            <div className="px-3 pt-4 min-vh-100">
              <ul className="nav flex-column text-white">
                <li>
                  <CustomLink to="/" label="Home" activeOnlyWhenExact={true}/>
                </li>
                <li>
                  <CustomLink to="/appointment" label="Add/Update" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col py-3">{children}</div>
        </div>
      </div>
  );
};

export default Layout;
