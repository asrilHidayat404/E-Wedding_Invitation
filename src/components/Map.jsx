import { MapContainer, TileLayer } from "react-leaflet";
import { useRef } from "react";

const Map = () => {
  const mapRef = useRef(null);
  const latitude = -7.10523181445376; // Ganti dengan latitude yang sesuai
  const longitude = 113.7367229885252; // Ganti dengan longitude yang sesuai

  return (
    <div className="relative bg-blue-300" style={{ width: "200px", height: "200px" }}>
      <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default Map;
