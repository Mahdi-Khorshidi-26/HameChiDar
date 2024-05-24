import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/pages/root/root";
import Applications from "./routes/pages/applications/applications";
import Application from "./routes/pages/applications/application/application";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "applications",
        element: <Applications />,
        children: [
          {
            path: ":application",
            element: <Application />,
          },
        ],
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
