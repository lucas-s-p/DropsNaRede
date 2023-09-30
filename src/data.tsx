import { createBrowserRouter } from "react-router-dom";
import Home from "./app/home/index";
import Activities from "./app/activities/index";
import Schools from "./app/schools/index";
import Project from "./app/project/nml";
import ProjectNML from "./app/project/nml";
import ProjectCoronaDrops from "./app/project/coronadrops";
import Element from "./app/element";
import Curiosities from "./app/curiosities/index";
import NASAEyes from "./app/project/nasaeyes";
import Bingo from "./app/project/bingo";
import SkyMaps from "./app/project/skymaps";

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
    },

    {
        path: "NASAEyes",
        element: <NASAEyes/>
    },

    {
        path: "bingotelescope",
        element: <Bingo/>
    },

    {
        path: "SkyMaps",
        element: <SkyMaps/>
    }
];

export const routes = createBrowserRouter(data);
