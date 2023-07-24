import { useContext, useState } from "react";
import { PageDrops, NavContainer, NavPages, NavImageDrops, ContainerDesktop, ContainerMobile } from "./navStyle";
import React from "react";
import imageOpenDrawer from "../../assets/buttonDrawer.png";
import DrawerMobile from "./drawerMobile";
import { ModalButton, ModalButtonImage } from "./navStyleMobile";
import imageDrops from "../../assets/drops.jpg";
import { Provider } from "../Provider";

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

    /** 
    const { scrollRef } = useContext(Provider);
    const scrollToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    };
    **/

    return (
        <NavContainer>
            <ContainerDesktop>
                <NavImageDrops onClick={() => redirect("/")} src={imageDrops}></NavImageDrops>
                <NavPages>
                    <PageDrops onClick={() => navigateTo("https://dropsnomundodalua.netlify.app")}>Mundo da Lua</PageDrops>
                    <PageDrops onClick={() => navigateTo("https://drops-coronadrops.web.app")}>Corona Drops</PageDrops>
                    <PageDrops onClick={() => redirect("/")}>Na Rede</PageDrops>
                    <PageDrops onClick={() => redirect("/activities")}>Atividades</PageDrops>
                    <PageDrops onClick={() => redirect("/schools")}>Drops nas Escolas</PageDrops>
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
