import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useCurrentUser from '../hooks/useCurrentUser';

export default function Home() {
    const { currentUser, handleUserLogout } = useCurrentUser(); 

    if (currentUser) {
        return (
            <div>
                <div>
                    <h1> Home </h1>
                </div>
                    <div>
                        <h2> Hi {currentUser.full_name}! </h2>
                    </div>
                    <div>
                        <p>Email: {currentUser.email}</p>
                    </div>
                    <div>
                        <p>What would you like to do?</p>
                    </div>
                    <div>
                        <Link to='/users'> Ver Usuarios </Link>
                    </div>
                    <div>
                        <Link to='/locations/form'> Registrar Ubicacion </Link>
                    </div>
                    <div>
                        <Link to='/users'> Ver Mis Ubicaciones </Link>
                    </div>
                    <div>
                        <Link to='/users'> Comparar Ubicaciones </Link>
                    </div>
                    <div>
                        <button onClick={handleUserLogout}> Logout </button>
                    </div>
            </div>
        );
    }
    else {
        return (<Navigate to="/login" />);
    }
}