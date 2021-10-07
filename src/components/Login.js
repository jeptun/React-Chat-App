import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import "firebase/app";

//Firebase Config
import { auth  } from "../firebase";
import firebase from "firebase/app";


const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2> Welcome to Chat</h2>
        <div
            className="login-button google"
            onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
           <GoogleOutlined /> Sign In With Google  
        </div>

        <br/> <br/>
        
    {/* Aktuálně potlečené nastavení na straně fb. "nastavení cookies  
      //
        <div
            className="login-button facebook"
            onClick={()=>auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
        >
           <FacebookOutlined /> Sign In With Facebook  
        </div>
        */ }
      </div>
    </div>
  );
};

export default Login;
