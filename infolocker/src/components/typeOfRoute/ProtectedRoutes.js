import React from 'react'
import { useEffect } from 'react';
import store from '../../store/store'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoutes(props) {


    const items = useSelector((state) => state.loginData[0].id)
    console.log(items);


    if (items === 0) {
        return <Navigate to = "/login" / >
    } else {


        return props.children;
    }

}

export default ProtectedRoutes