import { Component } from "react";
import React from "react";
import { Container, Header1, Header2, SubtitleRede, TitleRede, ImageHeader } from "./headerStyle";
import imageHeader from "../../assets/imageHeader.webp";
import { headerPhrase } from "./data";

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
