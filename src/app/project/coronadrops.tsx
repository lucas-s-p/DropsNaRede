import { Helmet } from "react-helmet";
import { Container } from "./style";

export default function ProjectCoronaDrops() {
    return (
        <Container>
            <Helmet>
                <title>Drops na Rede | Coronadrops</title>
                <meta name="Drops na Rede | Coronadrops" content="O Drops de Física ensinando a você a se prevenir do corona vírus."/>
                <link rel="canonical" href="/coronadrops"></link>
            </Helmet>
            <iframe src="https://drops-coronadrops.web.app" width="100%" height="100%"></iframe>
        </Container>
    )
}
