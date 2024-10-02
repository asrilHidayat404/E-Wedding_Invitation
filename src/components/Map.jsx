import { MapContainer, TileLayer } from "react-leaflet";
import { useRef } from "react";

const Map = () => {
  const mapRef = useRef(null);
  const latitude = -7.10523181445376; // Ganti dengan latitude yang sesuai
  const longitude = 113.7367229885252; // Ganti dengan longitude yang sesuai

  return (
    <div className="relative bg-blue-300" style={{ width: "200px", height: "200px" }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1979.5894824816007!2d113.73625053834765!3d-7.105247336610506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDYnMTguOSJTIDExM8KwNDQnMTUuMSJF!5e0!3m2!1sid!2sbr!4v1727792089513!5m2!1sid!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default Map;
