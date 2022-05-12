import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import LocationForm from './components/Location/locationForm';
import PingList from './components/Ping/pingList';
import UserList from './components/User/userList';

export default function Routez() {
    return (
        <Routes>
            <Route exact path="/" element={<Register />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/locations" element={<LocationForm />} />
            <Route exact path="/pings" element={<PingList />} />
            <Route exact path="/users" element={<UserList />} />
        </Routes>
    );
}