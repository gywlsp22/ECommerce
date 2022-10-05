import React, { useContext } from 'react';
import { StoreContext } from '../Store';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
  
  const { state } = useContext(StoreContext);
  const {userInfo} = state;
  return userInfo ? children : <Navigate to ="/signin" />;

}