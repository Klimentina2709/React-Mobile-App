import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/">
      <Box
        height={310}
        width="100%"
        position="relative"
        sx={{ padding: 0, backgroundColor: "#66FAEE" }}
      >
        <img
          src="/images/raw/Girls-Listen-Music_0.jpg"
          alt="Background"
          style={{
            width: "100%",
            height: "97%",
            objectFit: "cover",
            filter: "brightness(0.6)",
          }}
        />
        <Typography
          variant="h5"
          textTransform="uppercase"
          fontWeight="bold"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
        >
          music db
        </Typography>
      </Box>
    </Link>
  );
};

export default Navbar;
