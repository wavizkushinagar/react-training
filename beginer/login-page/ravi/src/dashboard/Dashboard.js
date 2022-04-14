import React from 'react';
import {useHistory} from 'react-router-dom';
const Dashboard = ()=>{
    
        let history = useHistory();

        const onClickLogout = (e) => {
            // setIsAuthenticated(false)
            localStorage.removeItem("token")
            history.push('/');
          }
    return(
        <div>
            <h2>hello dashboard</h2>
            <button onClick={onClickLogout}>logout</button>

         

        </div>
    )
}
export default Dashboard ;