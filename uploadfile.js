import { useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { Input, Textarea, Button } from "@mui/material";

const UploadForm = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState(null);

  const handleImageChange = (e) => setImage(e.target.files[0]);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleLocation = (e) => setLocation(e.latlng);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);
    formData.append("location", JSON.stringify(location));

    await axios.post("http://localhost:5000/api/dogs", formData);
  };

  const LocationMarker = () => {
    useMapEvents({ click(e) { handleLocation(e); } });
    return location ? <Marker position={location} /> : null;
  };

  return (
    <div>
      <h2>Upload Dog Photo</h2>
      <Input type="file" accept="image/*" onChange={handleImageChange} />
      <Textarea value={description} onChange={handleDescriptionChange} placeholder="Describe the dog..." />
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};

export default UploadForm;