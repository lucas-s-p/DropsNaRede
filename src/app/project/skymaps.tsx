import { Helmet } from "react-helmet";
import { Container } from "./style";

export default function SkyMaps() {
    return (
        <Container>
            <Helmet>
                <title>Drops na Rede | Google Sky Maps</title>
                <meta name="Drops na Rede | Google Sky Maps" content="Utlize o serviço da Google Sky Maps para visualizar o espaço."/>
                <link rel="canonical" href="/SkyMaps"></link>
            </Helmet>
            <iframe src="https://www.google.com/sky/" width="100%" height="100%"></iframe>
        </Container>
    )
}
