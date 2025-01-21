import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    console.log("password.current.value ", password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: firstName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const { uid, email, displayName } = auth?.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            console.log("signup ", auth?.currentUser);
          }).catch((error) => {

          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "--" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {

          const user = userCredential.user;
          console.log("sign in ====", user);
          updateProfile(auth.currentUser, {
            displayName: firstName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const { uid, email, displayName } = auth?.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            console.log("signup ", auth?.currentUser);
          }).catch((error) => {

          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "--" + errorMessage);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover "
        style={{ backgroundImage: `url(${BG_URL})` }}
      />
      
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative w-full sm:w-96 md:w-1/3 p-6 bg-black bg-opacity-80 rounded-lg text-white mx-auto mt-32"
      >
        <h1 className="font-bold text-3xl py-4 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={firstName}
            type="text"
            placeholder="First Name"
            className="p-2 m-2 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-700 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-700 rounded-md"
        />
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        <button
          className="p-2 m-2 bg-red-700 rounded-sm w-full mt-4 hover:bg-red-600"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 m-4 text-center cursor-pointer text-blue-500" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};



export default Login;
