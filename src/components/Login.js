import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../feature/userSlice";
import { auth, provider } from "../firebase";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const signIn = () =>{
    auth.signInWithPopup(provider).then(({user})=>{
      dispatch(login({
        displayname: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,

      }))
    }).catch(error => alert({error}));
  }
	return (
  <div className="login">
    <div className="login_container">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt=""/>
    </div>
    <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
  </div>);
}

export default Login;
