import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCurrentUser from '../../hooks/useCurrentUser';

export default function LocationForm() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { currentUser } = useCurrentUser(); 

    const handleSubmit = async (event) => {
        console.log('HOLA');
        event.preventDefault();
        const title = String(event.target.name.value);
        const xcoord = String(event.target.xcoord.value);
        const ycoord = String(event.target.ycoord.value);
        const values = {
            title: title,
            coordinates: `POINT(${xcoord} ${ycoord})`
        };
        console.log(values);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentUser.access_token}`
            },
            body: JSON.stringify(values),
          };
        const response = await fetch(`${process.env.REACT_APP_API_URL}/positions`, requestOptions);
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            console.log('ok');
          }
          else {
              setErrorMessage(response.text());
          }
    };

    return (
        <div>
            <div>
                <h1> Add Location </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"></input>
                </div>
                <div>
                    <label htmlFor="xcoord">Coordenada X</label>
                    <input type="text" name="xcoord"></input>
                </div>
                <div>
                    <label htmlFor="ycoord">Coordenada Y</label>
                    <input type="text" name="ycoord"></input>
                </div>
                <div>
                  <button type="submit">Add</button>
                </div>
                <div>
                    <Link to='/home'> Home </Link>
                </div>
            </form>
        </div>
    );
}