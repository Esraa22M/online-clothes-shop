import styled from "styled-components";
export const ButtonContainer = styled.button`
  min-width: 10.5rem;
  width: auto;
  height: 3rem;
  letter-spacing: 0.5px;
  line-height: 3rem;
  padding: 0 2.2em 0 2.2em;
  font-size: 0.8rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
export const GoogleSingIn = styled(ButtonContainer)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
export const InvertedButton = styled(ButtonContainer)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
