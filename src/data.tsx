import { createBrowserRouter } from "react-router-dom";
import Home from "./app/home/index";
import Activities from "./app/activities/index";
import Schools from "./app/schools/index";
import Project from "./app/project/nml";
import ProjectNML from "./app/project/nml";
import ProjectCoronaDrops from "./app/project/coronadrops";
import Element from "./app/element";
import Curiosities from "./app/curiosities/index";

const data = [
    {
        path: "/",
        element: <Home/>,
        errorElement: <Element/>
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
    },
    {
        path: "curiosities",
        element: <Curiosities/>
    }
];

export const routes = createBrowserRouter(data);
