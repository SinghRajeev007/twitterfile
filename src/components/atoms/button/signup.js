import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";



export default function SignUpButton({ handleSignup }) {
  const navigate = useNavigate();
  const [signupPass, setsignupPass] = useState(false);
  const [password, setPassword] = useState('');

  function handleClick(ev) {
    const validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    if (!validation.test(password)) {
      setsignupPass(true);
      return;
    }
}



  return (
    <div>
      <Button
       onClick={handleClick}
        variant="outlined"
        // onClick={() => {
        //   navigate("/login");
        //   handleSignup();
        // }}
        sx={{
          backgroundColor: "white",
          width: "25rem",
          borderRadius: "15px",
          textTransform: "none",
        }}
      >
        Sign Up
      </Button>
    </div>
  );
}
