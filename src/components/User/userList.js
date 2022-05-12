import { useEffect, useState } from "react";
import UserItem from "./userItem";

export default function UserList() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [usersList, setUsersList] = useState([]);

    const getUsers = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
          };
          const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, requestOptions);
          if (response.ok) {
            const data = await response.json();
            setUsersList(data);
          }
          else {
              setErrorMessage(response.text());
          }
    };

    useEffect(() =>{
        getUsers();
    }, []);

    if (loading) {
        return <h2> Loading... </h2>;
      }
    if (errorMessage != '') {
        return <h2> {errorMessage} </h2>
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