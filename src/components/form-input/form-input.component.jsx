import {
  FormInputStyle,
  FormInputLabel,
  InputContainer,
} from "./form-input.styles";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <InputContainer>
      <FormInputStyle {...otherProps}></FormInputStyle>
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </InputContainer>
  );
};
export default FormInput;
