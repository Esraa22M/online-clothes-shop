import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { sinOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.jsx";
import CartIcon from "../../components/cart-icon/cart-icon.components";
import CartDropDown from "../../components/cart-drop-down/cart-drop-down.component";
import { CartContext } from "../../contexts/cart.context";
import {
  NavLinksContainer,
  NavLink,
  PrimaryNavigation,
  LogoContainer,
} from "./navigation.styles.jsx";
const Navigation = () => {
  let { currentUser } = useContext(UserContext);
  let { setIsCartOpen, iscartOpen } = useContext(CartContext);
  return (
    <>
      <div>
        <PrimaryNavigation>
          <LogoContainer to="/">
            <Crown />
          </LogoContainer>
          <NavLinksContainer>
            <li className="link-item">
              <NavLink to="/shop">Shop</NavLink>
            </li>
            {currentUser ? (
              <li className="link-item">
                <NavLink onClick={sinOutUser} as="span">
                  Sign out
                </NavLink>
              </li>
            ) : (
              <li className="link-item">
                <NavLink to="/auth">Sign in</NavLink>
              </li>
            )}
            <li>
              <CartIcon onClick={() => setIsCartOpen(!iscartOpen)} />
            </li>
          </NavLinksContainer>
          {iscartOpen && <CartDropDown />}
        </PrimaryNavigation>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
