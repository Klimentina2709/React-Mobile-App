import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import artists from "../db";
import AlbumsList from "./AlbumsList";

const ArtistPage = () => {
  const { id } = useParams();
  const artistId = id ? parseInt(id, 10) : null;
  const artist = artists.find((artist) => artist.id === artistId);
  return (
    <Card
      sx={{
        backgroundColor: "#D3D3D3",
        borderRadius: 0,
        boxShadow: 0,
      }}
    >
      <CardActionArea sx={{ cursor: "default" }}>
        <CardMedia
          sx={{ width: 150, height: 150, margin: "0 auto", paddingTop: "30px" }}
          component="img"
          image={`/images/covers/${artist?.cover}.jpg`}
          alt={artist?.name}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {artist?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {artist?.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <AlbumsList />
    </Card>
  );
};

export default ArtistPage;
