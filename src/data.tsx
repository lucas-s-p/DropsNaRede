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
        name: "Home",
        path: "/",
        element: <Home/>,
        errorElement: <Element/>
    },

    {
        name: "Atividades",
        path: "activities",
        element: <Activities/>
    },

    {
        name: "Drops nas escolas",
        path: "schools",
        element: <Schools/>
    },
    {
        name: "DROPS no Mundo da Lua",
        path: "nml",
        element: <ProjectNML/>
    },
    {
        name: "CoronaDrops",
        path: "coronadrops",
        element: <ProjectCoronaDrops/>
    },
    {
        name: "Curiosidades",
        path: "curiosities",
        element: <Curiosities/>
    },

    {
        name: "Olhos da Nasa",
        path: "NASAEyes",
        element: <NASAEyes/>
    },

    {
        name: "Bingo",
        path: "bingotelescope",
        element: <Bingo/>
    },

    {
        name: "Google Sky Maps",
        path: "SkyMaps",
        element: <SkyMaps/>
    }
];

export const routes = createBrowserRouter(data);
