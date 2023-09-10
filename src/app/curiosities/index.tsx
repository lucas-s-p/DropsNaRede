import CuriositiesDesataque from "./cusiosities";
import { Container, CuriositiesTextDestaque, Destaques } from "./indexStyle";
import OthersCuriosities from "./otherscuriosities";

export default function Curiosities() {

    return (
        <Container>
            <Destaques>
                <CuriositiesTextDestaque>Destaques do DROPS</CuriositiesTextDestaque>
                <CuriositiesDesataque></CuriositiesDesataque>
            </Destaques>
            <CuriositiesTextDestaque>Outras Curiosidades</CuriositiesTextDestaque>
            <OthersCuriosities></OthersCuriosities>
        </Container>
    )
}
