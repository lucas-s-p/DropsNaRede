import { createBrowserRouter } from "react-router-dom";
import Home from "./app/home/index";
import Activities from "./app/activities/index";
import Schools from "./app/schools/index";

const data = [
    {
        path: "/",
        element: <Home/>,
        errorElement: <></>
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
