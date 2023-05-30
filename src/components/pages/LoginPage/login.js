import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "./login.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

const SignIn = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.loginMain}>
        <div className={styles.logo}>
          <TwitterIcon
            sx={{ fontSize: 40 }}
            style={{ color: "rgb(29, 155, 240)" }}
          />
        </div>
        <div className={styles.content1}>
          <h1>Sign in to Twitter </h1>
        </div>
        <div className={styles.parentContainer}>
          <div className={styles.content2}>
            <span style={{ display: "flex" }}>
              <GoogleIcon style={{ marginRight: "5px" }} />
              Sign in with Google
            </span>
          </div>
          <div className={styles.content2}>
            <span style={{ color: "black", display: "flex" }}>
              {" "}
              <AppleIcon style={{ marginRight: "5px" }} />
              Sign in with Apple
            </span>
          </div>
          <div className={styles.content3}>
            <span>or</span>
          </div>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Phone , Email or Username"
            variant="outlined"
          />
          <Button
            className={styles.btn}
            style={{ background: "black" }}
            variant="contained"
          >
            Next
          </Button>
          <Button className={styles.btn} variant="outlined">
            Forgot Password?
          </Button>
          <div style={{ marginTop: "4rem", opacity: 0.8 }}>
            Don't have an account? <Button size="small">Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
