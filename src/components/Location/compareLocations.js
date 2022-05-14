import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from 'react-router-dom';
import useCurrentUser from '../../hooks/useCurrentUser';

export default function CompareLocations() {
    const { currentUser } = useCurrentUser();

    return (
        <div>
            <div>
                <h1> See Locations of 5 Users </h1>
            </div>
            <form>
                <div>
                    <label htmlFor="name">ID 1: </label>
                    <input type="text" name="name"></input>
                </div>
                <div>
                    <label htmlFor="name">ID 2: </label>
                    <input type="text" name="name"></input>
                </div>
                <div>
                    <label htmlFor="name">ID 3: </label>
                    <input type="text" name="name"></input>
                </div>
                <div>
                    <label htmlFor="name">ID 4: </label>
                    <input type="text" name="name"></input>
                </div>
                <div>
                    <label htmlFor="name">ID 5: </label>
                    <input type="text" name="name"></input>
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
                <div>
                    <Link to='/home'> Home </Link>
                </div>
            </form>
        </div>
    );
}