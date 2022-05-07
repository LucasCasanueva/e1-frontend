import LocationItem from "./locationItem";

export default function LocationList() {

    const locationsArray = [
        {
            id: 1,
            name: 'starbucks',
            x: '24.24',
            y: '56.56',
        },
        {
            id: 2,
            name: 'mcdonald',
            x: '19.19',
            y: '22.22',
        },
        {
            id: 3,
            name: 'cinehoyts',
            x: '35.35',
            y: '43.43',
        },
        {
            id: 4,
            name: 'cerro kenny',
            x: '31.31',
            y: '41.41',
        },
    ];
    
    return (
        <div>
            <div>
                <h1>My Locations</h1>
            </div>
            <ul>
                {locationsArray.map((loc) => (
                    <LocationItem key={loc.id} loc={loc}/>
                ))}
            </ul>
        </div>
    );
}