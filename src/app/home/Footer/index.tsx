import { Contact, CopyRightDropsTextF2, CopyRightDropsTextF3, Footer1, Footer2, Footer3, FooterTitle, RedeSocialTextFooter, FooterTitleContainer, Separator, DropsImage, TextContact, ContactContainer, ContainerFooterContact } from "./contatoStyle";
import dropsimage from "../../assets/drops.jpg";
import React, { Component } from "react";

export default class Footer extends Component {

    navigateTo = (link: string) => {
        window.open(link);
    }

    render() {
        return (
            <Contact>
                <Footer1>
                    <DropsImage src={dropsimage}></DropsImage>
                </Footer1>
                <Footer2>
                    <ContactContainer>
                        <FooterTitle>Contato</FooterTitle>
                        <ContainerFooterContact>
                            <TextContact>Email: drops@ufcg.edu.br</TextContact>
                            <TextContact>Telefone: +55 (83)99999-9999</TextContact>
                            <TextContact>Cidade: Campina Grande - PB</TextContact>
                            <TextContact>CEP: 99999-999</TextContact>
                        </ContainerFooterContact>
                    </ContactContainer>
                    <CopyRightDropsTextF2>Copyright © 2023 DROPS - UFCG</CopyRightDropsTextF2>
                </Footer2>
                <Footer3>
                    <FooterTitleContainer>
                        <FooterTitle>Nossas Redes</FooterTitle>
                    </FooterTitleContainer>
                    <Separator></Separator>
                    <RedeSocialTextFooter onClick={() => this.navigateTo("https://www.instagram.com")}>Instagram</RedeSocialTextFooter>
                    <RedeSocialTextFooter onClick={() => this.navigateTo("https://www.facebook.com")}>Facebook</RedeSocialTextFooter>
                    <CopyRightDropsTextF3>Copyright © 2023 DROPS - UFCG</CopyRightDropsTextF3>
                </Footer3>
            </Contact>
        )
    }
}
