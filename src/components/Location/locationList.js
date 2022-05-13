import React, {useState, useEffect} from 'react';
import LocationItem from "./locationItem";
import useCurrentUser from "../../hooks/useCurrentUser";

export default function LocationList() {
    const [positionsList, setPositionsList] = useState([]);
    const {currentUser} = useCurrentUser();

    const getPositions = async () => {
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
            setPositionsList(data);
          }
          else {
              console.log('no paso');
          }
    };

    useEffect(() =>{
        getPositions();
    }, []);
    
    return (
        <div>
            <div>
                <h1>My Locations</h1>
            </div>
            <ul>
                {positionsList.map((loc) => (
                    <LocationItem key={loc.id} loc={loc}/>
                ))}
            </ul>
        </div>
    );
}