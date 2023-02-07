import { InvertedButton, GoogleSingIn, ButtonContainer } from "./button.styles";

const getButton = (buttonType = "default") => {
  return {
    default: ButtonContainer,
    google: GoogleSingIn,
    inverted: InvertedButton,
  }[buttonType];
};
const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};
export default Button;
