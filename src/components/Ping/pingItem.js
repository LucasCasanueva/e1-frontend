export default function PingItem(props) {
    const { ping } = props;

    return (
        <div>
            <li>
                <p>Sender: {ping.sender}</p>
                <p>Reciever: {ping.reciever}</p>
            </li>
        </div>
    );
}