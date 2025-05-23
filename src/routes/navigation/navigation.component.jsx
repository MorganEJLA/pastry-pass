import { Outlet, Link } from "react-router-dom";
import { ReactComponent as PastryLogo } from "../../assets/logo.svg";

import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <PastryLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/explore">
            Explore
          </Link>
          <Link className="sign-in" to="/sign-in">
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
