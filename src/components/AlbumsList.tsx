import { Link, useParams } from "react-router-dom";
import artists from "../db";
import { ImageList, ImageListItem } from "@mui/material";

const AlbumsList = () => {
  const { id } = useParams();
  const artistId = id ? parseInt(id, 10) : null;
  const artist = artists.find((artist) => artist.id === artistId);

  return (
    <ImageList
      sx={{ width: "95%", margin: 0, padding: "10px" }}
      gap={0}
      cols={2}
    >
      {artist?.albums ? (
        artist.albums.map((art) => (
          <Link key={art.albumId} to={`/artist/${artist.id}/${art.albumId}`}>
            <ImageListItem>
              <img
                src={`/images/albums/${art.cover}.jpg`}
                alt={art.cover}
                loading="lazy"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              />
            </ImageListItem>
          </Link>
        ))
      ) : (
        <div>No albums found</div>
      )}
    </ImageList>
  );
};

export default AlbumsList;
