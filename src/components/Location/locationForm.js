import React, { useState } from 'react';
import { stringify } from 'flatted';

export default function LocationForm() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [title, setTitle] = useState('');
    const [xcoord, setXcoord] = useState('');
    const [ycoord, setYcoord] = useState('');

    const handleTitle = (value) => {
        setTitle(value);
    };

    const handleXcoord = (value) => {
        setXcoord(value);
    };

    const handleYcoord = (value) => {
        setYcoord(value);
    };

    const handleSubmit = async (event) => {
        console.log('HOLA');
        event.preventDefault();
        const values = {
            title: title,
            coordinates: (xcoord, ycoord)
        };
        console.log(values);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: stringify(values),
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
                    <label for="name">Name</label>
                    <input type="text" name="name" onChange={handleTitle}></input>
                </div>
                <div>
                    <label for="coordx">Coordenada X</label>
                    <input type="text" name="coordx" onChange={handleXcoord}></input>
                </div>
                <div>
                    <label for="coordy">Coordenada Y</label>
                    <input type="text" name="coordy" onChange={handleYcoord}></input>
                </div>
                <div>
                  <button type="submit">Add</button>
                </div>
            </form>
        </div>
    );
}