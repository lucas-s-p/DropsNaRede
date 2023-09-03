import CuriositiesDesataque from "./cusiosities";
import { Container, CuriositiesTextDestaque, Destaques } from "./indexStyle";

export default function Curiosities() {

    return (
        <Container>
            <Destaques>
                <CuriositiesTextDestaque>Destaques do DROPS</CuriositiesTextDestaque>
                <CuriositiesDesataque></CuriositiesDesataque>
            </Destaques>
        </Container>
    )
}
