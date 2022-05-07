export default function UserItem(props) {
    const { user } = props;

    return (
        <div>
            <li>
                <p>Id: {user.id}</p>
                <p>Nickname: {user.nick}</p>
            </li>
        </div>
    );
}