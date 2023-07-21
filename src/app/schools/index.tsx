import { useRef } from "react";
import { Container, Introduction, MessageContainer, MessageView, ProfessorContainer, SchoolContainer } from "./schoolsStyle";
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
                    <ProfessorContainer></ProfessorContainer>
                    <SchoolContainer></SchoolContainer>
                </MessageView>
            </MessageContainer>
        </Container>
    )
    
}
