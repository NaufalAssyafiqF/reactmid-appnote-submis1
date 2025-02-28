import React from "react";
import ActiveNote from "./pages/ActiveNote";
import { useRoutes } from "react-router-dom";
import AddNote from "./pages/AddNote";
import ViewNote from "./pages/ViewNote";
import ArchiveNote from "./pages/ArchiveNote";
import NotFound from "./pages/NotFound";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <ActiveNote />,
    },
    {
      path: "/add",
      element: <AddNote />,
    },
    {
      path: "/view/:id",
      element: <ViewNote />,
    },
    {
      path: "/archive",
      element: <ArchiveNote />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return element;
}

export default App;
