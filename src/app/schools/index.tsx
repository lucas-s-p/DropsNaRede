import { useEffect, useRef, useState } from "react";
import { Container, Input, Introduction, MessageContainer, MessageView, ProfessorContainer, ResponseArea, SchoolContainer, TextTitle, IndroductionButton, MessageGeral, TitleContact, TitleContactMessage, TitleContainer, MessageIntro, Message } from "./schoolsStyle";
import Nav from "../home/nav";
import { dataPhraseMessage } from "./data";

export default function Schools() {

    const introductionRef = useRef<HTMLDivElement>(null);
    const messageRef = useRef<HTMLDivElement>(null);
    const [click, setClick] = useState(false);

    const onClickSend = () => {
        setClick(true);
    }

    const changeMessage = () => {
        if (introductionRef.current && messageRef.current) {
            introductionRef.current.style.display = "none";
            messageRef.current.style.display = "grid";
            
            messageRef.current.style.width = "90%";
            messageRef.current.style.height = "80%";
        }
    }

    return (
        <Container>
            <MessageContainer>
                <Introduction ref={introductionRef}>
                    <MessageIntro>
                        <Message>{dataPhraseMessage}</Message>
                    </MessageIntro>
                    <IndroductionButton onClick={() => changeMessage()}>Solicitar visita</IndroductionButton>
                </Introduction>
                <MessageView ref={messageRef}>
                    <ProfessorContainer>
                        <TitleContact>Preencha as informações (obrigatório):</TitleContact>
                        <ResponseArea>
                            <TextTitle>Nome do responsável</TextTitle>
                            <Input type={"name"} placeholder="Digite o seu nome"></Input>
                        </ResponseArea>
                        <ResponseArea>
                            <TextTitle>Email para contato</TextTitle>
                            <Input type={"email"} placeholder="Digite o seu email"></Input>
                        </ResponseArea>
                        <ResponseArea>
                            <TextTitle>Número de telefone</TextTitle>
                            <Input type={"tel"} placeholder="Digite o seu telefone"></Input>
                        </ResponseArea>
                        <ResponseArea>
                            <TextTitle>Nome da Escola</TextTitle>
                            <Input placeholder="Digite o nome da escola"></Input>
                        </ResponseArea>
                        <ResponseArea>
                            <TextTitle>Cidade</TextTitle>
                            <Input placeholder="Cidade - UF"></Input>
                        </ResponseArea>
                    </ProfessorContainer>
                    <SchoolContainer>
                        <TitleContainer>
                            <TitleContactMessage>Escreva a sua mensagem:</TitleContactMessage>
                        </TitleContainer>
                        <MessageGeral placeholder="Escreva a sua mensagem..."></MessageGeral>
                        <IndroductionButton onClick={() => onClickSend()}>{click ? "Enviado":"Enviar solicitação"}</IndroductionButton>
                    </SchoolContainer>
                </MessageView>
            </MessageContainer>
        </Container>
    )    
}
