import React from "react";
import './Login.css'
import { loginUri } from "../Spotify/Spotify";

const Login = () => {

  return (
    
    <div className="login-page">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      <a href={loginUri}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
