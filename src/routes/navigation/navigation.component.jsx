import { Outlet , Link} from "react-router-dom";
import {ReactComponent as Crown} from '../../assets/crown.svg';
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <>
      <div>
        <nav className="primary-navigation">
            <Link className="logo-container" to='/'>
                <Crown/>
            </Link>
            <ul className="links-container">
                <li className="link-item">
                    <Link to='/shop' className="nav-link">Shop</Link>
                </li>
                <li className="link-item">
                    <Link to='/signin' className="nav-link">Sign IN</Link>
                </li>
            </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
