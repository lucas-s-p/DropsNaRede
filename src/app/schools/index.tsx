import { useRef } from "react";
import { Container, Input, Introduction, MessageContainer, MessageView, ProfessorContainer, ResponseArea, SchoolContainer, TextTitle } from "./schoolsStyle";
import Nav from "../home/nav";

export default function Schools() {

    const introductionRef = useRef<HTMLDivElement>(null);
    const messageRef = useRef<HTMLDivElement>(null);

    const changeMessage = () => {
        if (introductionRef.current && messageRef.current) {
            introductionRef.current.style.display = "none";
            messageRef.current.style.display = "grid";
        }
    }

    return (
        <Container>
            <Nav></Nav>
            <MessageContainer>
                <Introduction ref={introductionRef} onClick={() => changeMessage()}>    
                </Introduction>
                <MessageView ref={messageRef}>
                    <ProfessorContainer>
                        <ResponseArea>
                            <TextTitle>Nome da Escola</TextTitle>
                            <Input></Input>
                        </ResponseArea>
                        <ResponseArea>
                            <TextTitle>Email para contato</TextTitle>
                            <Input type={"email"}></Input>
                        </ResponseArea>
                        <ResponseArea>
                            <TextTitle>Número de telefone</TextTitle>
                            <Input type={"tel"}></Input>
                        </ResponseArea>
                        <ResponseArea>
                            <TextTitle>Nome do responsável</TextTitle>
                            <Input></Input>
                        </ResponseArea>
                    </ProfessorContainer>
                    <SchoolContainer>

                    </SchoolContainer>
                </MessageView>
            </MessageContainer>
        </Container>
    )    
}
