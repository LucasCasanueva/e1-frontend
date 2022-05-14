import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useCurrentUser from '../hooks/useCurrentUser';

export default function Home() {
    const { currentUser, handleUserLogout } = useCurrentUser();
    const [tiempo, setTiempo] = useState({}); 

    const getWeather = async () => {
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
            console.log(data);
            setTiempo(data);          }
          else {
              console.log('fail');
          }
    };

    useEffect(() =>{
        getWeather();
    }, []);
    
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
                        <p>Tiempo: {tiempo.descripcion}</p>
                    </div>
                    <div>
                        <p>Temperatura Actual: {tiempo.temp_actual}</p>
                    </div>
                    <div>
                        <p>Temperatura Máxima: {tiempo.temp_maxima}</p>
                    </div>
                    <div>
                        <p>Temperatura Mínima: {tiempo.temp_minima}</p>
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
                        <Link to='/locations/me'> Ver Mis Ubicaciones </Link>
                    </div>
                    <div>
                        <Link to='/locations/compare'> Comparar Ubicaciones </Link>
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