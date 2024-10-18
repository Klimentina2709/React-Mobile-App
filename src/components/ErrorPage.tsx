import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" onClick={handleGoHome}>
          Go Home
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;
