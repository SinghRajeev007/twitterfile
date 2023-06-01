import styles from "./Details.module.css";
import { RxCross2 } from "react-icons/rx";
import DetailsText from "./detailsText";
import GroupedSelect from "../../atoms/inputField/select";
import SignUpButton from "../../atoms/button/signup";
import OutlinedInput from "@mui/material/OutlinedInput";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Details() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [useEmail, setUseEmail] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);

  const [nevigate, setnevigate] = useState(false);
  const [alert, setalert] = useState(false);

  const nevigates = useNavigate();

  function navigate() {
    nevigates("/login");
  }

  const Storage = localStorage.getItem("signupData")
    ? JSON.parse(localStorage.getItem("signupData"))
    : [];

  const handleToggle = (e) => {
    e.preventDefault();
    setUseEmail(!useEmail);
  };

  function handleSignup() {
    const temp = {
      name: name,
      email: email,
      phone: phone,
    };

    localStorage.setItem("signupData", JSON.stringify([...Storage, temp]));

    const email_regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (
      name === "" ||
      (phone.length < 10 && email_regex.test(email) === false)
    ) {
      setnevigate(false);
      setalert(true);
    } else {
      setnevigate(true);
    }
  }

  function onPasswordChange(event) {
    const val = event.target.value;
    const validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    if (!validation.test(val)) {
      setIsValidPassword(false);
      return;
    }
    setIsValidPassword(true);
  }

  return (
    <div className={styles.Details}>
      <div className={styles.Icon}>
        <RxCross2 />
      </div>
      <h1>Create your account</h1>
      <div>
        <OutlinedInput
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          sx={{
            width: "25rem",
            marginBottom: "20px"
            
          }}
        />
      </div>
      {useEmail ? (
        <div>
          <OutlinedInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: "25rem",
              marginBottom: "20px"
            }}
          />
        </div>
      ) : (
        <div>
          <OutlinedInput
            placeholder="Phone"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{
              width: "25rem",
              marginBottom: "20px"
            }}
          />
          </div>
          )}
          <div>
          <OutlinedInput
            placeholder="Password"
            type="text"
            onChange={onPasswordChange}
            sx={{
              width: "25rem",
             marginBottom: "20px"
              
            }}
          />
          </div>
          {!isValidPassword && (
            <Alert severity="info">
              <strong>Password Should contain minimum one capital letter, 
              one small letter, one number and minimum 8 character </strong>
            </Alert>
          )}
      <a href="/" onClick={handleToggle} className={styles.emailtoggle}>
        {useEmail ? "Use phone instead" : "Use email instead"}
      </a>
      <div>
        <DetailsText />
      </div>
      <div>
        <GroupedSelect />
      </div>
      <div className={styles.btn}>
        <SignUpButton handleSignup={handleSignup} />
        {nevigate ? navigate() : " "}
        {alert ? (
          <Alert severity="info">
            <strong>Fill Properly.</strong>
          </Alert>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}
