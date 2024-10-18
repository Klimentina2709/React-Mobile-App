import React from "react";
import ArtistItem, { ArtistType } from "./ArtistItem";
import { Typography } from "@mui/material";

interface Props {
  artists: ArtistType[];
}

const ArtistsList: React.FC<Props> = ({ artists }) => {
  return (
    <div style={{ backgroundColor: "#D3D3D3", padding: "20px 0" }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        sx={{ paddingTop: "5px" }}
      >
        Browse the artist
      </Typography>
      {artists.map((artist) => (
        <ArtistItem key={artist.id} {...artist} />
      ))}
    </div>
  );
};

export default ArtistsList;
