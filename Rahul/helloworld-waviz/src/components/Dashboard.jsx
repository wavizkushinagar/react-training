import React from "react";
import { useHistory } from "react-router-dom";


const Dashboard =()=>{
    let history = useHistory();
    const onClickLogout = (e) => {
        // setIsAuthenticated(false)
        localStorage.removeItem("token")
        history.push('/login');
      }
    return(
        <>
        <h1>Dashboard</h1> <br /> <button onClick={onClickLogout}>logout</button>
        </>
    )
}
export default Dashboard;