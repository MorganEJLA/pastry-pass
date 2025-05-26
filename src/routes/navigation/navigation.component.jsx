import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as PastryLogo } from "../../assets/logo.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {""}
              Sign Out{""}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
