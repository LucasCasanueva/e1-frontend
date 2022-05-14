import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useCurrentUser from '../hooks/useCurrentUser';

export default function Register() {
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
    
    const login = async (email, password) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: JSON.stringify(`grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`),

          };
        const response = await fetch(`${process.env.REACT_APP_API_URL}/login/access-token`, requestOptions);
        if (response.ok) {
            const data = await response.json();
            const user = await fetchMe(data.access_token);
            user.access_token = data.access_token;
            handleUserLogin(user);
            console.log('login exitoso');
          }
          else {
              setErrorMessage(response.text());
          }
    };
    
    const handleSubmit = async (event) => {
        console.log('HOLA');
        event.preventDefault();
        const email    = String(event.target.email.value);
        const nickname = String(event.target.nickname.value);
        const password = String(event.target.password.value);
        const values = {
            email: email,
            is_active: true,
            is_superuser: false,
            full_name: nickname,
            password: password
        };
        console.log(values);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values),

          };
        console.log(requestOptions);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, requestOptions);
        console.log(response);
        if (response.ok) {
            await login(email, password);
            console.log('ok');
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
                <h1> Create Account </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nickname">Nickname: </label>
                    <input type="text" name="nickname"></input>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email"></input>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password"></input>
                </div>
                <div>
                  <button type="submit">Register</button>
                </div>
                <div>
                  <Link to='/login'> Login </Link>
                </div>
            </form>
        </div>
    );
}