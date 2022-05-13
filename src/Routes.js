import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import LocationForm from './components/Location/locationForm';
import PingList from './components/Ping/pingList';
import UserList from './components/User/userList';
import Home from './components/home';
import LocationList from './components/Location/locationList';
import CurrentUserContextProvider from './contexts/CurrentUserContext';

export default function Routez() {
    return (
        <CurrentUserContextProvider>
            <Routes>
                <Route exact path="/" element={<Register />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/locations/form" element={<LocationForm />} />
                <Route exact path="/locations" element={<LocationList />} />
                <Route exact path="/pings" element={<PingList />} />
                <Route exact path="/users" element={<UserList />} />
            </Routes>
        </CurrentUserContextProvider>
    );
}