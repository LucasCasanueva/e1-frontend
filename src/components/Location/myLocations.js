import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useCurrentUser from "../../hooks/useCurrentUser";
import './map.css';

export default function MyLocations() {

    const positions = [[-33.412295, -70.558359], [-33.414591, -70.559059], [-33.414436, -70.563955], [-33.410070, -70.563453]]
    const { currentUser } = useCurrentUser();
    const positions2 = [];

    const getMyPositions = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentUser.access_token}`
            },
          };
          const response = await fetch(`${process.env.REACT_APP_API_URL}/positions`, requestOptions);
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            data.map((pos) => (
                positions2.push([parseFloat(pos.point.slice(6,16)), parseFloat(pos.point.slice(17,27))])
            ))
          }
          else {
              console.log('no paso');
          }
    };

    useEffect(() =>{
        getMyPositions();
    }, []);

  return (
    <div className="map">
        <MapContainer className="map" center={[-33.412295, -70.558359]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {positions.map((pos) => (
                    <Marker position={pos}>
                        <Popup>
                            hola
                        </Popup>
                    </Marker>
                ))}
        </MapContainer>
        <div>
            <Link to='/home'> Home </Link>
        </div>
    </div>
  );
}