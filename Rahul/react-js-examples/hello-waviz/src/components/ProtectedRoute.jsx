import React, { Component, useEffect } from "react";

import {  useHistory } from "react-router-dom";
 

function ProtectedRoute(response) {
    var history = useHistory();
    let component = response.component;
    useEffect(() => {
        if (! localStorage.getItem('value')) {
            history.push('/dashboard')
        }
    },[])

    return (
        <>
            <Component />
        </>
    );
}

export default ProtectedRoute;