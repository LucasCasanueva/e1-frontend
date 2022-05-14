import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useCurrentUser from '../hooks/useCurrentUser';

export default function Home() {
    const { currentUser, handleUserLogout } = useCurrentUser(); 

    /*const getWeather = async () => {
        const lat = -33.414591;
        const long = -70.559059;
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentUser.access_token}`
            },
          };
        const response = await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&long=${long}`, requestOptions);
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            console.log('weather ok');
          }
          else {
              console.log('fail');
          }
    };

    useEffect(() =>{
        getWeather();
    }, []);*/
    
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
                        <Link to='/map'> Ver Mis Ubicaciones </Link>
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