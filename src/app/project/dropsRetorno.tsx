import { Helmet } from "react-helmet"
import { Container } from "./style"

export default function DropsRetorno() {
    return (
        <Container>
            <Helmet>
                <title>Drops na Rede | O Reroeno</title>
                <meta name="Drops na Rede | O Retorno" content="Aprenda de forma incrivel sobre os planetas do nosso sistema solar."/>
                <link rel="canonical" href="/dropsoretorno"></link>
            </Helmet>
            <iframe src="https://dropdefisica.wordpress.com" width="100%" height="100%"></iframe>
        </Container>
    )
}
