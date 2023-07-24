import React, { useState } from "react";
import { CardGroup, Container, DescriptionModal, GroupContainer, Modal, Name, Image, NameContainer, TitleGroup, TitleModal, TitleModalContainer, Link } from "./groupStyle";
import { group } from "./data";

const Grupo: React.FC = () => {
    const [activeCard, setActiveCard] = useState<any>(null);

    const handleMouseEnter = (participant: any) => {
      setActiveCard(participant);
    };
  
    const handleMouseLeave = () => {
      setActiveCard(null);
    };
  
    const navigateTo = (link: string) => {
        window.open(link);
    }

    return (
        <Container>
            <TitleGroup>Conheça os participantes do DROPS na Rede</TitleGroup>
            <GroupContainer>
            {group.map((participant, index) => (
                <CardGroup
                key={index}
                onMouseEnter={() => handleMouseEnter(participant)}
                onMouseLeave={handleMouseLeave}
                >
                    <NameContainer>
                        <Name>{participant.name}</Name>
                    </NameContainer>
                    <Image src={participant.image}></Image>
                    {activeCard === participant && (
                    <Modal isVisible={true}>
                        <TitleModalContainer>
                            <TitleModal>{participant.work}</TitleModal>
                        </TitleModalContainer>
                        <DescriptionModal>{participant.description}</DescriptionModal>
                        <Link onClick={() => navigateTo(participant.link)}>Sobre: Clique aqui</Link>
                    </Modal>
                    )}              
                </CardGroup>
            ))}
            </GroupContainer>
        </Container>
    );
};
  
export default Grupo;
