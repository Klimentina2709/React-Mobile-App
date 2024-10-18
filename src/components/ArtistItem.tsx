import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface ArtistType {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: {
    albumId: string;
    title: string;
    year: number;
    cover: string;
    price: number;
  }[];
}

const ArtistItem: React.FC<ArtistType> = ({ id, cover, name }) => {
  return (
    <Link to={`/artist/${id}`}>
      <Box width="95%" height="370px" margin="10px auto" position="relative">
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src={`/images/covers/${cover}.jpg`}
          alt={name}
        />
        <Typography
          sx={{
            position: "absolute",
            bottom: 0,
            width: "27%",
            color: "white",
            padding: "3px",
            background: "#2196F3",
            textAlign: "center",
          }}
        >
          {name}
        </Typography>
      </Box>
    </Link>
  );
};

export default ArtistItem;
