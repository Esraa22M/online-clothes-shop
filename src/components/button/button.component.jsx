import { InvertedButton, GoogleSingIn, ButtonContainer } from "./button.styles";
export const BUTTON_TYPES_CLASSES = {
  default: "default",
  google: "google-sign-in",
  inverted: "inverted",
};
const getButton = (buttonType = BUTTON_TYPES_CLASSES.default) => {
  return {
    [BUTTON_TYPES_CLASSES.default]: ButtonContainer,
    [BUTTON_TYPES_CLASSES.google]: GoogleSingIn,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[buttonType];
};
const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};
export default Button;
