import "./map.scss"; // Your styles for the map
import { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Import the icon images
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const windmillIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface Windmill {
  site: string;
  capacity: string;
  company: string;
  lat: number;
  long: number; // Use 'lng' for longitude
}

const MapBox = () => {
  const [windmills, setWindmills] = useState<Windmill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/mapsite");
      console.log("Fetched map data:", response.data);
      setWindmills(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching windmill data:", error);
      setError("Failed to fetch windmill data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading map data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mapBox">
      <div className="overviewText">Overview of 21 parks</div>
      <MapContainer
        center={[windmills[0]?.lat || 0, windmills[0]?.long || 0]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      {windmills.map((windmill, index) => (
  windmill.lat && windmill.long ? (
    <Marker key={index} position={[windmill.lat, windmill.long]} icon={windmillIcon}>
      <Popup>
        <strong>{windmill.site}</strong><br />
        Capacity: {windmill.capacity} kW<br />
       
      </Popup>
    </Marker>
  ) : null // Skip marker if lat or lng is missing
))}

      </MapContainer>
    </div>
  );
};

export default MapBox;
