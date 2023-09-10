import Square from "./Square";
import { data } from "./data";
import { Container, Curiosity } from "./othersStyles";

export default function OthersCuriosities() {
    return (
        <Container>
            {data.slice(6,data.length).map(({image, about, title, link}) =>
            <Curiosity onClick={()=> window.open(link)}>
                <Square image={image} textAbout={about} title={title}></Square>
            </Curiosity>
            )}
        </Container>
    )
}
