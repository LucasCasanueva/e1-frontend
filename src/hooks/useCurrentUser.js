import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default () => useContext(CurrentUserContext);