import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sing-up.styles.scss';
const SingUpForm = () => {
  const defaultFormFields = {
    emailName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { emailName, email, password, confirmPassword } = formFields;
  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  let resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }
    try {
      let { user } = await createAuthUserWithEmailAndPassword(email, password);
      const userDocRef = await createUserDocumentFromAuth(user, { emailName });
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use")
        alert("email is already in use");
      else console.log("user creation error ", err.code);
    }
  };
  return (
    <div className="sing-up-container">
      <h2>Don't have an account ?</h2>
      <span>Sing up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Name"}
          type="text"
          name="emailName"
          value={emailName}
          onChange={handleChange}
        />
        <FormInput
          label={"Email"}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label={"Password"}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          label={"Confirm Password"}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit" >Sing up</Button>
      </form>
    </div>
  );
};
export default SingUpForm;
