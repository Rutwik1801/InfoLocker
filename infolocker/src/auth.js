import { getAuth, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";

// sign up

const auth = getAuth();
export default  sigUpHandler=async(email,password)=>{
    console.log("cfvhrhgtgg")
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
        console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  
}

//   log in
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

//   log out
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});