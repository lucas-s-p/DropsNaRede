import { Component } from "react";
import { Container, Header1, Header2, SubtitleRede, TitleRede, ImageHeader } from "./headerStyle";
import { headerPhrase } from "./data";
import imageHeader from "../../assets/imageHeader.webp";
import React from "react";

export default class Header extends Component<React.FC> {
    render() {
        return (
            <Container>
                <Header1>
                    <TitleRede>DROPS NA REDE</TitleRede>
                    <SubtitleRede>{headerPhrase}</SubtitleRede>
                </Header1>
                <Header2>
                    <ImageHeader src={imageHeader}></ImageHeader>
                </Header2>
            </Container>
        )
    }
}
