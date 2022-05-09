import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('SUBMIT');  // cambiar por fetch cuando conectemos con backend
        const a = event.target[0];
        const b = event.target[1];
        const c = event.target[2];
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({full_name: a,
                    email: b,
                    password: c,
                    is_active: true,
                    is_superuser: false})
          };
        console.log(process.env.REACT_APP_API_URL);
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/users`, requestOptions).then((response) => {
            if (response.status !== 200) {
                setMessage('Something went wrong');
                return [];
            }
            console.log(response.json());
            return response.json();
        });
    }

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
                    <input type="text" name="nickName"></input>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="text" name="email"></input>
                </div>
                <div>
                    <label for="password">Password</label>
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