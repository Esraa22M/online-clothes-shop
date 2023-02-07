import styled from "styled-components";
import {
  InvertedButton,
  GoogleSingIn,
  ButtonContainer,
} from "../button/button.styles";
export const CartdropDownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border: 1px solid black;
  top: 90px;
  right: 40px;
  z-index: 5;
  ${ButtonContainer},${InvertedButton},${GoogleSingIn} {
    margin-top: auto;
  }
`;
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
