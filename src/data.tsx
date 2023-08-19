import { createBrowserRouter } from "react-router-dom";
import Home from "./app/home/index";
import Activities from "./app/activities/index";
import Schools from "./app/schools/index";
import Project from "./app/project/nml";
import ProjectNML from "./app/project/nml";
import ProjectCoronaDrops from "./app/project/coronadrops";

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
    },
    {
        path: "nml",
        element: <ProjectNML/>
    },
    {
        path: "coronadrops",
        element: <ProjectCoronaDrops/>
    }
];

export const routes = createBrowserRouter(data);
