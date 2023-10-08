import { Helmet } from "react-helmet";
import CuriositiesDesataque from "./cusiosities";
import { Container, CuriositiesTextDestaque, Destaques } from "./indexStyle";
import OthersCuriosities from "./otherscuriosities";
import OthersCuriositiesMobile from "./otherscuriositiesMobile";

export default function Curiosities() {

    return (
        <Container>
            <Helmet>
                <title>Drops na Rede | Curiosidades</title>
                <meta name="Drops na Rede | Curiosidades" content="Veja uma lista com conteúdos fantásticos sobre o mundo da Física."/>
                <link rel="canonical" href="/curiosities"></link>
            </Helmet>
            <Destaques>
                <CuriositiesTextDestaque>Destaques do DROPS</CuriositiesTextDestaque>
                <CuriositiesDesataque></CuriositiesDesataque>
            </Destaques>
            <CuriositiesTextDestaque>Outras Curiosidades</CuriositiesTextDestaque>
            <OthersCuriosities></OthersCuriosities>
            <OthersCuriositiesMobile></OthersCuriositiesMobile>
        </Container>
    )
}
