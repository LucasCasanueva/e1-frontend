import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";

export default function Map() {

    const positions = [[-33.412295, -70.558359], [-33.414591, -70.559059], [-33.414436, -70.563955], [-33.410070, -70.563453]]

  return (
    <div className="leaflet_container">
        <MapContainer center={[-33.412295, -70.558359]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {positions.map((pos) => (
                    <Marker position={pos}>
                        <Popup>
                            I was here!
                        </Popup>
                    </Marker>
                ))}
        </MapContainer>
    </div>
  );
}