import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser)
        navigate('/')
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid :uid,email:email,displayName:displayName} ));
        navigate('/browse');
        
      } else {
        // User is signed out  
        dispatch(removeUser());
        navigate('/');
        
      }
    });
    // this will call after component unmount
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
        <img
          className="w-44"
          alt="logo"
          src={LOGO}
        />
      </div>
      { user && 
        <div className="flex text-white"  >
       <div className="rounded-full h-12 w-12 bg-red-700 capitalize text-center font-bold 
        m-3 p-2">{user?.displayName[0]}  &nbsp;{user?.displayName[1]}</div>
        <button
          className="px-2 my-4 rounded-lg bg-red-700"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
      }
      
    </div>
  );
};

export default Header;
