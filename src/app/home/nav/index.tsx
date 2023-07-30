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
                <NavImageDrops onClick={() => redirect("/")} src={imageDrops}></NavImageDrops>
                <NavPages>
                    <PageDrops onClick={() => redirect("/")}>Na Rede</PageDrops>
                    <PageDrops onClick={() => navigateTo("https://dropsnomundodalua.netlify.app")}>No Mundo da Lua</PageDrops>
                    <PageDrops onClick={() => navigateTo("https://drops-coronadrops.web.app")}>Corona Drops</PageDrops>
                    <PageDrops onClick={() => redirect("/activities")}>Atividades</PageDrops>
                    <PageDrops onClick={() => redirect("/schools")}>Nas Escolas</PageDrops>
                </NavPages>
            </ContainerDesktop>
            <ContainerMobile>
                <DrawerMobile isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} navigateTo={navigateTo} redirect={redirect}/>
                <ModalButton onClick={() => toggleDrawer()}>
                    <ModalButtonImage src={imageOpenDrawer}/>
                </ModalButton>
                <NavImageDrops onClick={() => redirect("/")} src={imageDrops}></NavImageDrops>
            </ContainerMobile>
        </NavContainer>
    )
}
