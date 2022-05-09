import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('SUBMIT');  // cambiar por fetch cuando conectemos con backend
    };

    if (loading) {
        return <h2>Loading...</h2>;
      }

    return (
        <div>
            <div>
                <h1> Login </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nickName">Nickname</label>
                    <input type="text" name="nickName"></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
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