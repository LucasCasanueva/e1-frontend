import React, {createContext, useEffect, useCallback} from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

let logoutTimer;

export const CurrentUserContext = createContext();

const CurrentUserContextProvider = ({ children }) => {
    const [currentUser, storeUser, clearStoredUser] = useLocalStorage('user');
    const [sessionExpDate, storeSessionExpDate, clearSessionExpDate] = useLocalStorage('sessionExpiration');
    const navigate = useNavigate();

    const handleUserLogin = (user) => {
        const expiration = new Date(jwtDecode(user.access_token).exp * 1000);
        storeUser(user);
        storeSessionExpDate(expiration);
    };

    const handleUserLogout = () => {
        clearStoredUser();
        clearSessionExpDate();
    };

    const handleAutomaticLogout = useCallback(() => {
        clearStoredUser();
        clearSessionExpDate();
        navigate('/login');
    }, [navigate]);

    useEffect(() => {
        if (currentUser && sessionExpDate) {
        const remainingTime = new Date(sessionExpDate).getTime() - new Date().getTime();
        logoutTimer = setTimeout(handleAutomaticLogout, remainingTime);
        } else {
        clearTimeout(logoutTimer);
        }
    }, [currentUser, sessionExpDate, handleAutomaticLogout]);

    return (
        <CurrentUserContext.Provider value={{ currentUser, handleUserLogin, handleUserLogout }}>
            {children}
        </CurrentUserContext.Provider>
    );
};

export default CurrentUserContextProvider;