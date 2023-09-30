import { useState } from "react";
import { 
    PageDrops, 
    NavContainer, 
    NavPages, 
    NavImageDrops, 
    ContainerDesktop, 
    ContainerMobile 
} from "./navStyle";
import { 
    ModalButton, 
    ModalButtonImage 
} from "./navStyleMobile";
import imageOpenDrawer from "../../assets/buttonDrawer.png";
import DrawerMobile from "./drawerMobile";
import imageDrops from "../../assets/drops.jpg";

export default function Nav() {

    const navigateTo = (link: string) => {
        window.open(link);
    }

    const redirect = (link: string) => {
        window.location.href = link;
    }

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <NavContainer>
            <ContainerDesktop>
                <ModalButton onClick={() => toggleDrawer()}>
                    <ModalButtonImage src={imageOpenDrawer}/>
                </ModalButton>
                <DrawerMobile isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} navigateTo={navigateTo} redirect={redirect}/>
                <NavPages>
                    <PageDrops onClick={() => redirect("/")}>Na Rede</PageDrops>
                    <PageDrops onClick={() => redirect("/nml")}>Mundo da Lua</PageDrops>
                    <PageDrops onClick={() => redirect("/coronadrops")}>Corona Drops</PageDrops>
                    <PageDrops onClick={() => redirect("/schools")}>Nas Escolas</PageDrops>
                    <PageDrops onClick={() => redirect("/curiosities")}>Curiosidades</PageDrops>
                </NavPages>
            </ContainerDesktop>
            <ContainerMobile>
                <ModalButton onClick={() => toggleDrawer()}>
                    <ModalButtonImage src={imageOpenDrawer}/>
                </ModalButton>
                <DrawerMobile isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} navigateTo={navigateTo} redirect={redirect}/>
                <NavImageDrops onClick={() => redirect("/")} src={imageDrops}></NavImageDrops>
            </ContainerMobile>
        </NavContainer>
    )
}
