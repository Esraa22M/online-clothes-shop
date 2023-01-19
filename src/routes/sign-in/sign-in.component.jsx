import SingUpForm from "../../components/sing-up/sing-up.component";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
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
  const logGoogleUser = async () => {
    let { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button> */}
      <SingUpForm></SingUpForm>
    </div>
  );
};
export default SignIn;
