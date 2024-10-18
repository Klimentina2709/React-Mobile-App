import { RouterProvider } from "react-router-dom";
import router from "./router";
import Container from "@mui/material/Container";
import "./App.css";

function App() {
  return (
    <Container maxWidth="xs">
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
