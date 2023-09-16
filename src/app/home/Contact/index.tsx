import { ChangeEvent, useRef, useState } from "react";
import {
    ContactBanner,
    ContactContainer,
    TextSend,
    EmailContainer,
    Image,
    ImageContainer,
    LastName,
    Message,
    Email,
    Phone,
    Send,
    Input,
    FirstName,
    InputMessage,
    ButtonSend,
    EmailContainerCenter,
    TextTitle
} from "./contactStyles";
import contactImage from "../../assets/contact-img.svg";

export default function Contact() {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const textButtonRef = useRef<SVGTextElement>(null);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [send, setSend] = useState(false);

    const onClickButton = () => {
        if (name && lastName && email && number && message) {
            setSend(true);
            if (buttonRef.current) {
                buttonRef.current.style.backgroundColor = "#000053";
            }
            if (textButtonRef.current) {
                textButtonRef.current.style.color = "white";
            }
        }
    };

    const contactRef = useRef(null);

    return (
        <ContactContainer ref={contactRef}>
            <TextTitle>Envie a sua dúvida</TextTitle>
            <ContactBanner>
                <ImageContainer>
                    <Image src={contactImage} />
                </ImageContainer>
                <EmailContainer>
                    <EmailContainerCenter>
                        <FirstName>
                            <Input 
                            value={name} 
                            placeholder="Nome" 
                            maxLength={20} 
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)} />
                        </FirstName>
                        <LastName>
                            <Input 
                            value={lastName} 
                            placeholder="Sobrenome" 
                            maxLength={20} 
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}/>
                        </LastName>
                        <Email>
                            <Input 
                            value={email} 
                            placeholder="Email" 
                            maxLength={50} 
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}/>
                        </Email>
                        <Phone>
                            <Input 
                            value={number} 
                            placeholder="Telefone" 
                            maxLength={19} 
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setNumber(event.target.value)}/>
                        </Phone>
                        <Message>
                            <InputMessage 
                            value={message} 
                            placeholder="Mensagem" 
                            rows={5} 
                            maxLength={270} 
                            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)}/>
                        </Message>
                        <Send>
                            <ButtonSend ref={buttonRef} onClick={() => onClickButton()}>
                                <TextSend ref={textButtonRef}>{send? "Enviado" : "Enviar"}</TextSend>
                            </ButtonSend>
                        </Send>
                    </EmailContainerCenter>
                </EmailContainer>
            </ContactBanner>
        </ContactContainer>
    );
}
