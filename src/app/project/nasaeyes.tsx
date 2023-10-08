import { Helmet } from "react-helmet";
import { Container } from "./style";

export default function NASAEyes() {
    return (
        <Container>
            <Helmet>
                <title>NDrops na Rede | Nasa Eyes</title>
                <meta name="Drops na Rede | Nasa Eyes" content="Visualize de forma tridimensional o nosso sistema solar utilizando o NASA Eyes."/>
                <link rel="canonical" href="/NASAEyes"></link>
            </Helmet>
            <iframe src="https://eyes.nasa.gov/apps/solar-system/#/home" width="100%" height="100%"></iframe>
        </Container>
    )
}
