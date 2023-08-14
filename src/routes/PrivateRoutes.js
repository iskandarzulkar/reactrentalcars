import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = (props) =>{
    const {isAuthenticated} = useSelector(state => state.loginAdmin);
  
    if(!isAuthenticated) return <Navigate to ="/loginAdmin" />

    return props.children
}

export default PrivateRoute
