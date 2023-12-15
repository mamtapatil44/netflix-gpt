import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

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
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
        <img
          className="w-44"
          alt="logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
