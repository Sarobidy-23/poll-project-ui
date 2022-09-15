import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useDataProvider } from '../context/ApiContext';

const Routes = () => {
const {idUser} = useDataProvider()

    return (idUser !=0 ? <Outlet/> : <Navigate to='/login'/>)
}

export default Routes
