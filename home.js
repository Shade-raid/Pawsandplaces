import UploadForm from "../components/UploadForm";
import { useEffect, useState } from "react";
import axios from "axios";
import DogCard from "../components/DogCard";

const Home = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/dogs").then((res) => setDogs(res.data));
  }, []);

  return (
    <div>
      <h1>Places - Discover Street Dogs</h1>
      <UploadForm />
      <div>
        {dogs.map((dog, index) => (
          <DogCard key={index} {...dog} />
        ))}
      </div>
    </div>
  );
};

export default Home;