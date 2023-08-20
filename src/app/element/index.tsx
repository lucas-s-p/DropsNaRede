import { useEffect, useState } from "react";
import { Container } from "./style";

export default function Element() {
    const [v, setV] = useState(10);
    
    setTimeout(() => {
        returnHome(v);
    }, 0);
    
    const returnHome = (i: number) => {
        if (i == 0) {
            window.location.href = "/";
        }
        else {
            setTimeout(() => {
                setV(i - 1);
                returnHome(v);
            }, 1000);
        }
    }
    
    return (
        <Container>
            {`Página não encontrada!\n\nRetornado a página inicial do\nDROPS na Rede em ${v} segundos.`}
        </Container>
    )
}
