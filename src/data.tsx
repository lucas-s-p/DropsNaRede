import { createBrowserRouter } from "react-router-dom";
import Home from "./app/home";
import Activities from "./app/activities";
import Schools from "./app/schools";

const data = [
    {
        path: "/",
        element: <Home/>
    },

    {
        path: "activities",
        element: <Activities/>
    },

    {
        path: "schools",
        element: <Schools/>
    }
];

export const routes = createBrowserRouter(data);
