import { Outlet, createBrowserRouter } from "react-router-dom";
import ArtistPage from "./components/ArtistPage";
import Root from "./components/Root";
import AlbumPage from "./components/AlbumPage";
import ArtistsList from "./components/ArtistsList";
import artists from "./db";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <ArtistsList artists={artists} />,
      },
      {
        path: "artist/:id",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <ArtistPage />,
          },
          {
            path: ":albumId",
            element: <AlbumPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
