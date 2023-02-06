import styled from "styled-components";
import { Link } from "react-router-dom";
export const PrimaryNavigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  margin-bottom: 1.75em;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 5rem;
  padding: 1.75rem;
`;
export const NavLinksContainer = styled.ul`
  padding: 0;
  list-style: none;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavLink = styled(Link)`
  padding: 0.75em 1em;
  text-transform: uppercase;
  cursor: pointer;
`;
