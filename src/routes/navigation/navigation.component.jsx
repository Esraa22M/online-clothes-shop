import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { sinOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";
const Navigation = () => {
  let {currentUser}= useContext(UserContext)
  return (
    <>
      <div>
        <nav className="primary-navigation">
          <Link className="logo-container" to="/">
            <Crown />
          </Link>
          <ul className="links-container">
            <li className="link-item">
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
            </li>
            {currentUser ? (
              <li className="link-item">
                <span className="nav-link" onClick={sinOutUser}>
                  Sign out
                </span>
              </li>
            ) : (
              <li className="link-item">
                <Link to="/auth" className="nav-link">
                  Sign in
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
