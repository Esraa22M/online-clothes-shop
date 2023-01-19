// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword ,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcnOx6xJEi_Wb23OOhTpVl4WY61ouoFHU",
  authDomain: "crwn-clothing-db-78a2c.firebaseapp.com",
  projectId: "crwn-clothing-db-78a2c",
  storageBucket: "crwn-clothing-db-78a2c.appspot.com",
  messagingSenderId: "74113490878",
  appId: "1:74113490878:web:bceebe74ab2dfb30d9a3ef",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

/* db variable points to database in the firebase console */
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth , additionalInfo={}) => {
  if(!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  /*allows us to access the data or check wether the data exists or  not */
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());
  if (!userSnapShot.exists()) {
    const { emailName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        emailName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (err) {
      console.log("user creating error ", err.message);
    }
    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async(email , password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth , email , password)

}
export const signInAuthUserWithEmailAndPassword = async(email , password)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth , email , password)

}