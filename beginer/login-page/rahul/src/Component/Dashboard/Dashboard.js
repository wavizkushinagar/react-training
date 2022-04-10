import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  let history = useHistory();

  const logOut=()=>{
    localStorage.removeItem("token")
    history.push('/');
  }
  return (
    <div>
        <h1> Its Dashboard Page  </h1>
        <Button onClick={logOut}>Logout</Button>
    </div>
  )
}
