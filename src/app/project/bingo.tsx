import { Helmet } from "react-helmet";
import { Container } from "./style";

export default function Bingo() {
    return (
        <Container>
            <Helmet>
                <title>Drops na Rede | Bingo</title>
                <meta name="Drops na Rede | Bingo" content="Conheça o Bingo, que é um radiotelescópio projetado para fazer a primeira detecção de Oscilações Acústicas de Bárions."/>
                <link rel="canonical" href="/bingotelescope"></link>
            </Helmet>
            <iframe src="https://bingotelescope.org/" width="100%" height="100%"></iframe>
        </Container>
    )
}
