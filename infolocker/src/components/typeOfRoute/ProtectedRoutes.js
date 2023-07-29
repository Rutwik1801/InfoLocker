import React from 'react'
import { useEffect } from 'react';
import store from '../../store/store'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoutes(props) {


    const items = useSelector((state) => state.loginData[0].id)
    const userId=localStorage.getItem("userId")
    console.log(items);


    if ( userId) {
            return props.children;
    } else {
        return <Navigate to = "/login" / >
    }

}

export default ProtectedRoutes