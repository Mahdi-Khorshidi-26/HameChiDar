import Application from "./routes/pages/applications/application/application"
import Applications from "./routes/pages/applications/applications"
import Root from "./routes/pages/root/root"

const routes = [
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
]

export default routes