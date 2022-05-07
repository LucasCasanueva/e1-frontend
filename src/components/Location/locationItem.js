export default function LocationItem(props) {
    const { loc } = props;

    return (
        <div>
            <li>
                <p>Name: {loc.name}</p>
                <p>Location: ({loc.x}, {loc.y})</p>
            </li>
        </div>
    );
}