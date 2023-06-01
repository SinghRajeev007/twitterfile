import React, { useEffect, useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import TextField from "@mui/material/TextField";
import styles from "./Password.module.css";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";


export default function Password({email}) {
  const navigate = useNavigate();
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState(false);

  useEffect(() => {
    let timer;
    if(message) {
      timer = setTimeout(() => {
        setmessage(false);
      }, 3000)
    }

    return () => clearTimeout(timer);
  }, [message])
  function handleChange(e) {
    setpassword(e.target.value);
  }
  function handleClick() {
    const validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    if (!validation.test(password)) {
      setmessage(true);
      return;
    }

    const lclStorageData = JSON.parse(localStorage.getItem("signupData"))

    const isUserFound = lclStorageData.filter(el => {
      if(el.email === email) {
        return true;
      }
    }).length;

    if(isUserFound) {
      return navigate('/home');
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <div
        style={{
          width: "550px",
          height: "600px",
          margin: "0 auto",
          height: "600px",
          background: "white",
          borderRadius: "20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <TwitterIcon
            sx={{ fontSize: 40 }}
            style={{ color: "rgb(29, 155, 240)" }}
          />
        </div>
        <div
          style={{
            width: "440px",
            margin: "0 auto",
            position: "relative",
            height: "500px",
          }}
        >
          <h1>Enter your password</h1>
          <div className={styles.textinput}>
            <TextField
              onChange={handleChange}
              id="filled-multiline-flexible"
              fullWidth
              label="password"
              variant="outlined"
            />
          </div>
          <Link to=""> Forgot Password?</Link>
          <Button
            onClick={handleClick}
            className={styles.btn}
            variant="contained"
          >
            Log In
          </Button>
          <div className={styles.links}>
            <p>
              {" "}
              Don't have an account? <Link to="/register"> Sign up</Link>
            </p>
          </div>
          {message ? (
            <Alert severity="info">
              Password Invalid <strong>Please Try Again</strong>
            </Alert>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
