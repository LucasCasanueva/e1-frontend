import React, { useState } from 'react';

export default function LocationForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('SUBMIT');  // cambiar por fetch cuando conectemos con backend
    };

    return (
        <div>
            <div>
                <h1> Add Location </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="name">Name</label>
                    <input type="text" name="name"></input>
                </div>
                <div>
                    <label for="coordx">Coordenada X</label>
                    <input type="text" name="coordx"></input>
                </div>
                <div>
                    <label for="coordy">Coordenada Y</label>
                    <input type="text" name="coordy"></input>
                </div>
            </form>
        </div>
    );
}