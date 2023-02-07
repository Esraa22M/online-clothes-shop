import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sing-in.styles.scss";
/* use context  */
const SingInForm = () => {
  /* GET form fields values */
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  let resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password for this email");
          break;
        case "auth/user-not-found":
          alert("no user is associated with this email");
          break;
        default:
          console.log(err.code);
      }
    }
  };

  /* use context for the signed in user */

  const singinWithGoogle = async () => {
    await signInWithGooglePopup();
    /*store current signedin user */

    // setCurrentUser(user);
  };

  return (
    <div className="sing-up-container">
      <h2>Already have an account ?</h2>
      <span>Sing in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sing In</Button>
          <Button
            onClick={singinWithGoogle}
            buttonType={BUTTON_TYPES_CLASSES["google"]}
            type="button"
          >
            google Sing In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SingInForm;
