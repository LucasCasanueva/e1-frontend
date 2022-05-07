import UserItem from "./userItem";

export default function UserList() {

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

    return (
        <div>
            <div>
                <h1>Users List</h1>
            </div>
            <ul>
                {usersArray.map((user) => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </ul>
        </div>
    );
}