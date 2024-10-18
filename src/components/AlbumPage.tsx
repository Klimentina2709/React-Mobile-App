import { useParams } from "react-router-dom";
import artists from "../db";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const AlbumPage = () => {
  const { albumId } = useParams();
  const artist = artists.find((artist) =>
    artist.albums.some((album) => album.albumId === albumId)
  );

  let foundAlbum;
  if (artist) {
    foundAlbum = artist.albums.find((album) => album.albumId === albumId);
  }

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
          sx={{
            width: 150,
            height: 150,
            margin: "0 auto",
            paddingTop: "30px",
          }}
          component="img"
          image={`/images/albums/${foundAlbum?.cover}.jpg`}
          alt={foundAlbum?.title}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom component="p">
            <span style={{ fontWeight: "bold", fontSize: "0.9em" }}>
              Title:
            </span>{" "}
            {foundAlbum?.title}
          </Typography>
          <Typography gutterBottom component="p">
            <span style={{ fontWeight: "bold", fontSize: "0.9em" }}>Year:</span>{" "}
            {foundAlbum?.year}
          </Typography>
          <Typography gutterBottom component="p">
            <span style={{ fontWeight: "bold", fontSize: "0.9em" }}>
              Price:
            </span>{" "}
            {foundAlbum?.price} $
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default AlbumPage;
