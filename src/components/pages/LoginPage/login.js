import React, {useEffect, useState} from "react";
import GoogleButton from "../../atoms/button/google";
import AppleButton from "../../atoms/button/apple";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FaTwitter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Password from "./Password";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isEmailFound, setIsEmailFound] = useState(true);
  const [isPasswordPage, setIsPasswordPage] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(() => {
    let timer;
    if(!isEmailFound) {
      timer = setTimeout(() => {
        setIsEmailFound(true);
      }, 3000)
    }

    return () => clearTimeout(timer);
  }, [isEmailFound])

  function userHandle(e) {
    setdata(e.target.value);
    setEmail(e.target.value);
  }

  function onNext() {    
    const lclStorageData = JSON.parse(localStorage.getItem("signupData"))

    const isUserFound = lclStorageData.filter(el => {
      if(el.email === email) {
        return true;
      }
    }).length;

    if(!isUserFound) {
      setIsEmailFound(false)
      return;
    }

    setIsPasswordPage(true);

  }

  return (
    <div>
      {!isPasswordPage ? <div className={styles.page}>
        <div className={styles.Icon}>
          <RxCross2 />
          <FaTwitter color="skyblue" />
        </div>
        <div className={styles.body}>
          <h1>Sign in to Twitter</h1>
          <GoogleButton />
          <AppleButton />
          <div className={styles.content3}>
            <span>or</span>
          </div>

          <br />
          <TextField
            onChange={userHandle}
            style={{ width: "63%", marginBottom: "30px" }}
            id="outlined-basic"
            label="Phone , Email or Username"
            variant="outlined"
            value={email}
          />
          <Button
            onClick={onNext}
            className={styles.btn}
            style={{
              textTransform: "none",
              background: "black",
              width: "63%",
              borderRadius: "5%",
              marginBottom: "30px",
            }}
            variant="contained"
          >
            Next
          </Button>
          <Button
            className={styles.btn}
            variant="outlined"
            sx={{
              width: "63%",
              borderRadius: "5%",
              textTransform: "none",
              color: "black",
            }}
          >
            <b>Forgot Password?</b>
          </Button>
          <div style={{ marginTop: "4rem", opacity: 0.8 }}>
            <b>Don't have an account? </b>
            <Link to="/register">Sign up</Link>
          </div>
          {!isEmailFound && (
            <Alert severity="info">
              <strong>Sorry, we could not find your account.</strong>
            </Alert>
          )}
        </div>
      </div> : <Password email={email}/> }
    </div>
  );
};

export default SignIn;
