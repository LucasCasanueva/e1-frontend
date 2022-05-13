export default function LocationItem(props) {
    const { loc } = props;

    return (
        <div>
            <li>
                <p>Name: {loc.title}</p>
            </li>
        </div>
    );
}