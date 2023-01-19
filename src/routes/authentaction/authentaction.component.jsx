import { useEffect } from "react";
import { getRedirectResult, }from "firebase/auth";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/firebase.utils";
import SingUpForm from "../../components/sing-up/sing-up.component";
import SingInForm from "../../components/sing-in/sing-in.component";
import "./authentaction.styles.scss";
const Authentaction = () => {
  /* useeffect with empty dependacy array meaning 
  run this code once 
  the component mounts for the first time */
  // useEffect(() => {
  //   async function getResponse(){
  //     const response = await getRedirectResult(auth);
  //     if(response){
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   getResponse()
  // }, []);

  return (
    <div className="authentaction-container">
      {/* <button onClick={logGoogleUser}>Sign in with google popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button> */}
      <SingInForm></SingInForm>
      <SingUpForm></SingUpForm>
    </div>
  );
};
export default Authentaction;
