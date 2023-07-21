import { Component } from "react";
import { PageDrops, NavContainer, NavPages, NavImageDrops } from "./navStyle";
import React from "react";
import imageDrops from "../../assets/drops.jpg";

export default class Nav extends Component {

    navigateTo = (link: string) => {
        window.open(link);
    }

    redirect = (link: string) => {
        window.location.href = link;
    }

    render() {
        return (
            <NavContainer>
                <NavImageDrops onClick={() => this.redirect("/")} src={imageDrops}></NavImageDrops>
                <NavPages>
                    <PageDrops onClick={() => this.navigateTo("https://dropsnomundodalua.netlify.app")}>Mundo da Lua</PageDrops>
                    <PageDrops onClick={() => this.navigateTo("https://drops-coronadrops.web.app")}>Corona Drops</PageDrops>
                    <PageDrops onClick={() => this.redirect("/")}>Na Rede</PageDrops>
                    <PageDrops onClick={() => this.redirect("/activities")}>Atividades</PageDrops>
                    <PageDrops onClick={() => this.redirect("/schools")}>Drops nas Escolas</PageDrops>
                </NavPages>
            </NavContainer>
        )
    }
}
