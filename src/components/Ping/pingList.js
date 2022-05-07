import PingItem from "./pingItem";

export default function PingList() {

    const pingsArray = [
        {
            id: 1,
            sender: 'lucas',
            reciever: 'pablo'
        },
        {
            id: 2,
            sender: 'lucas',
            reciever: 'max'
        },
        {
            id: 3,
            sender: 'lucas',
            reciever: 'ignacio'
        },
        {
            id: 4,
            sender: 'lucas',
            reciever: 'claudio'
        },
    ];

    return (
        <div>
            <div>
                <h1>My Pings</h1>
            </div>
            <ul>
                {pingsArray.map((ping) => (
                    <PingItem key={ping.id} ping={ping}/>
                ))}
            </ul>
        </div>
    );
}