import { useEffect, useRef, useState } from "react";
import { Container, Input, Introduction, MessageContainer, MessageView, ProfessorContainer, ResponseArea, SchoolContainer, TextTitle, IndroductionButton, MessageGeral, TitleContact, TitleContactMessage, TitleContainer, MessageIntro, Message } from "./schoolsStyle";
import Nav from "../home/nav";
import { dataPhraseMessage } from "./data";
import { Helmet } from "react-helmet";
import { onClickSend } from "./send";
import { firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Schools() {

    const introductionRef = useRef<HTMLDivElement>(null);
    const messageRef = useRef<HTMLDivElement>(null);
    const [click, setClick] = useState(false);

    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [escola, setEscola] = useState<string>('');
    const [cidade, setCidade] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');

    const changeMessage = () => {
        if (introductionRef.current && messageRef.current) {
            introductionRef.current.style.display = "none";
            messageRef.current.style.display = "grid";
            
            messageRef.current.style.width = "90%";
            messageRef.current.style.height = "80%";
        }
    }

    const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTelefone(event.target.value);
    };
    const handleEscolaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEscola(event.target.value);
    };
    const handleCidadeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCidade(event.target.value);
    };
    const handleMensagemChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMensagem(event.target.value);
    };

    const send = async() => {
        if (onClickSend(nome, email, telefone, escola, cidade, mensagem)) {
            try {
                const docRef = await addDoc(collection(firestore, "conviteescolar"), {
                    nome: nome,
                    email: email,
                    telefone: telefone,
                    escola: escola,
                    cidade: cidade,
                    mensagem: mensagem    
                });
                console.log('Mensagem enviada com sucesso!');
                setNome(""); setEmail(""); setTelefone(""); setEscola(""); setCidade(""); setMensagem("");
            }
            catch(e) {
                console.log('Ocorreu um erro ao enviar a mensagem!');
            }
        }
    }

    return (
        <Container>
            <Helmet>
                <title>Drops na Rede | Escolas</title>
                <meta name="Drops na Rede - Escolas" content="Faça seu convite para o Drops comparecer a sua escola."/>
                <link rel="canonical" href="/schools"></link>

            </Helmet>
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
                            <Input type={"name"} placeholder="Digite o seu nome" value={nome} onChange={handleNomeChange}></Input>
                        </ResponseArea>
                        <ResponseArea>
                            <TextTitle>Email para contato</TextTitle>
                            <Input type={"email"} placeholder="Digite o seu email" value={email} onChange={handleEmailChange}></Input>
                        </ResponseArea>
                        <ResponseArea>
                            <TextTitle>Número de telefone</TextTitle>
                            <Input type={"tel"} placeholder="Digite o seu telefone" value={telefone} onChange={handleTelefoneChange}></Input>
                        </ResponseArea>
                        <ResponseArea>
                            <TextTitle>Nome da Escola</TextTitle>
                            <Input placeholder="Digite o nome da escola" value={escola} onChange={handleEscolaChange}></Input>
                        </ResponseArea>
                        <ResponseArea>
                            <TextTitle>Cidade</TextTitle>
                            <Input placeholder="Cidade - UF" value={cidade} onChange={handleCidadeChange}></Input>
                        </ResponseArea>
                    </ProfessorContainer>
                    <SchoolContainer>
                        <TitleContainer>
                            <TitleContactMessage>Escreva a sua mensagem:</TitleContactMessage>
                        </TitleContainer>
                        <MessageGeral placeholder="Escreva a sua mensagem..." value={mensagem} onChange={handleMensagemChange}></MessageGeral>
                        <IndroductionButton onClick={() => send()}>{click ? "Enviado":"Enviar solicitação"}</IndroductionButton>
                    </SchoolContainer>
                </MessageView>
            </MessageContainer>
        </Container>
    )    
}
