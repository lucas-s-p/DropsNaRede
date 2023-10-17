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
                    <PageDrops onClick={() => redirect("/")}>PÁGINA INICIAL</PageDrops>
                    <PageDrops onClick={() => redirect("/nml")}>MUNDO DA LUA</PageDrops>
                    <PageDrops onClick={() => redirect("/coronadrops")}>CORONA DROPS</PageDrops>
                    <PageDrops onClick={() => redirect("/activities")}>ATIVIDADES</PageDrops>
                    <PageDrops onClick={() => redirect("/curiosities")}>CURIOSIDADES</PageDrops>
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
