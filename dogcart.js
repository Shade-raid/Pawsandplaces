import { Card, CardContent } from "@mui/material";

const DogCard = ({ imageUrl, description, location }) => {
  return (
    <Card>
      <CardContent>
        <img src={imageUrl} alt="Dog" className="w-full h-40 object-cover" />
        <p>{description}</p>
        <p>Location: {location.lat}, {location.lng}</p>
      </CardContent>
    </Card>
  );
};

export default DogCard;