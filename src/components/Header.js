import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { toggelGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);

  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleGptSearch = () => {
    dispatch(toggelGptSearchView());
  };

  return (
    <div className="absolute z-10 w-full bg-gradient-to-b from-black">
      <div className="flex flex-row justify-between p-2 px-2 md:px-10 ">
        <div className="flex flex-row items-center cursor-pointer">
          <img className="w-16 md:w-44 " alt="logo" src={LOGO} />
        </div>

        {user && (
          <nav className="flex flex-row items-center font-md text-md gap-6">
            <div className=" ">
              <button
                className="px-2 py-1 border bg-purple-600 rounded-lg text-white "
                onClick={handleGptSearch}
              >
                {showGptSearch ? "Home" : "Gpt Seach"}
              </button>
            </div>
            <div
              className="rounded-full text-sm h-10 w-10 bg-red-700 capitalize font-bold flex items-center justify-center text-center text-white
       "
            >
              UN
            </div>
            <div className=" ">
              <button
                className="px-2 py-1 border bg-red-700 rounded-lg text-white"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
