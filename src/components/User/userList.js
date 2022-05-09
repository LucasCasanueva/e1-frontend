import { useEffect, useState } from "react";
import UserItem from "./userItem";

export default function UserList() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [usersList, setUsersList] = useState();

    const usersArray = [
        {
            id: 1,
            nick: 'kuky'
        },
        {
            id: 2,
            nick: 'pablito'
        },
        {
            id: 3,
            nick: 'nacho'
        },
        {
            id: 4,
            nick: 'maxi'
        },
    ];

    useEffect(() =>{
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
          };
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/users`, requestOptions).then((response) => {
            console.log(response);
            if (response.status !== 200) {
                setErrorMessage('Something went wrong');
                return [];
            }
            console.log(response.json());
            setUsersList(response.json());
            return response.json();
        });
            //const users = response.json();
            //console.log(response);
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
      }
    
    return (
        <div>
            <div>
                <h1>Users List</h1>
            </div>
            <ul>
                {usersList.map((user) => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </ul>
        </div>
    );
}