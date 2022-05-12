import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { stringify } from 'flatted';

export default function Register() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNickname = (value) => {
        setNickname(value);
    };

    const handleEmail = (value) => {
        setEmail(value);
    };

    const handlePassword = (value) => {
        setPassword(value);
    };

    const handleSubmit = async (event) => {
        console.log('HOLA');
        event.preventDefault();
        const values = {
            email: email,
            full_name: nickname,
            password: password,
            is_active: true,
            is_superuser: false
        };
        console.log(values);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: stringify(values),
          };
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, requestOptions);
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            console.log('ok');
          }
          else {
              setErrorMessage(response.text());
          }
    };

    if (loading) {
        return <h2>Loading...</h2>;
      }
    
    return (
        <div>
            <div>
                <h1> Create Account </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="nickName">Nickname</label>
                    <input type="text" name="nickName" onChange={handleNickname}></input>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="text" name="email" onChange={handleEmail}></input>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="text" name="password" onChange={handlePassword}></input>
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