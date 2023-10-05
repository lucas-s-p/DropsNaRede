import CuriositiesDesataque from "./cusiosities";
import { Container, CuriositiesTextDestaque, Destaques } from "./indexStyle";
import OthersCuriosities from "./otherscuriosities";
import OthersCuriositiesMobile from "./otherscuriositiesMobile";

export default function Curiosities() {

    return (
        <Container>
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
