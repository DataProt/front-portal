import React, {useState,useContext} from 'react';
import {UserContext} from "../context/usercontext";
import {signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {auth} from "../firebase-config";
import { isAuth } from '../context/usercontext';
import {getFirestore} from "firebase/firestore";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const {toggleModals} = useContext(UserContext);

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate("/")
    } catch {
      alert("For some reasons we can't disconnect you, please check your internet connection and retry.")
    }
  }

  if (isAuth == true) {
    const db = getFirestore();
    const {currentUser} = useContext(UserContext);
    return ( 
    <>
    <button onClick={logOut} className="btn btn-danger ms-2">Log Out</button>
    </>)
  }
  else{
    return(
      <div>
        <button className="btn btn-primary ms-2"
          onClick={() => toggleModals("signUp")}>
            Sign Up
          </button>
          <button 
            onClick={() => toggleModals("signIn")} className="btn btn-primary ms-2">
            Sign In
          </button>
      </div>
    )
  }
}
