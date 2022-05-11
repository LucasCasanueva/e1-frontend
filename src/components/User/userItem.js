export default function UserItem(props) {
    const { user } = props;

    return (
        <div>
            <li>
                <p>Id: {user.id}</p>
                <p>Email: {user.email}</p>
            </li>
        </div>
    );
}