import { FaTwitter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
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
    <div>
      <div className={styles.page}>
        <div className={styles.Icon}>
          <RxCross2 />
          <FaTwitter color="#50b7f5" />
        </div>
        <div className={styles.body}>
          <h1>Enter your password</h1>
          <div className={styles.textinput}>
            <TextField
              type="password"
              onChange={handleChange}
              id="filled-multiline-flexible"
              fullWidth
              label="password"
              variant="outlined"
              sx={{
                width: "19rem",
                height: "1rem",
              }}
            />
            <div className={styles.password}>
              {" "}
              <Link to="/forgot"> Forgot Password?</Link>
            </div>
          </div>
          <Button
            onClick={handleClick}
            className={styles.btn}
            variant="contained"
            sx={{
              textTransfer: "none",
              marginTop: "15rem",
            }}
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
            " "
          )}
        </div>
      </div>
    </div>
  );
}
