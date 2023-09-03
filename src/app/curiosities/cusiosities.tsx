import { useState } from "react";
import { Container } from "./curiosityStyle";
import { data } from "./data"
import Curiosity from "./curiosity";

export default function CuriositiesDesataque() {
    const [mouse, setMouse] = useState<Boolean>(false);

    return (
        <Container>
            {data.map(({title, image, about, link, description}) => 
                <Curiosity title={title} image={image} about={about} link={link} description={description}/>
            )}
        </Container>
    )
}
