import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from  "./ForgetPassword.module.css"
import Button from '@mui/material/Button';

export default function ForgotPasword() {
  return (
    <div>
    <div className={styles.header}>
    <TwitterIcon sx={{ fontSize: 30 }} style={{ color: "rgb(29, 155, 240)" }} /> Password Reset
    <div>
    <h1>Find Your Twitter account</h1> 
    <p>Enter your email, phone number, or Username</p>
    <div></div>
    <div> <Button variant="contained">Search</Button></div>
    </div>
    </div>
    </div>
  )
}
