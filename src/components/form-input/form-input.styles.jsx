import styled, { css } from "styled-components";
const subColor = "grey";
const mainColor = "black";
const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;
export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${(shrink) => shrink && shrinkLabel};
`;
export const FormInputStyle = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 1.25em;
  padding: 0.625em 0.625em 0.625em 0.25em;
  display: block;
  border: none;
  width: 100%;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabel};
  }
`;
export const InputContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
