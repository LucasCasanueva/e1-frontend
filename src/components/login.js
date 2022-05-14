import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useCurrentUser from '../hooks/useCurrentUser';

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { currentUser, handleUserLogin } = useCurrentUser(); 

    const fetchMe = async (token) => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
          };
          const response = await fetch(`${process.env.REACT_APP_API_URL}/users/me`, requestOptions);
          if (response.ok) {
              const data = await response.json();
              return data;
          }
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const email    = String(event.target.email.value);
        const password = String(event.target.password.value);
        const values = {
            email: email,
            password: password
        };
        console.log(values);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: JSON.stringify(`grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`),

          };
        console.log(requestOptions);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/login/access-token`, requestOptions);
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            console.log(data.access_token);
            const user = await fetchMe(data.access_token);
            user.access_token = data.access_token;
            handleUserLogin(user);
            console.log(currentUser);
          }
          else {
              setErrorMessage(response.text());
          }
    };

    if (loading) {
        return <h2>Loading...</h2>;
      }
    
    if (currentUser) return <Navigate to="/home" />;

    return (
        <div>
            <div>
                <h1> Login </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email"></input>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password"></input>
                </div>
                <div>
                  <button type="submit">Login</button>
                </div>
                <div>
                  <Link to='/register'> Register </Link>
                </div>
            </form>
        </div>
    );
}